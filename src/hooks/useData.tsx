import { useState, useEffect } from 'react';

async function fetchIds(resourceUrl: string, ids: number[]) {
  const fetchPromises = ids.map((id) => fetch(`${resourceUrl}/${id}`));
  const items = await Promise.all(fetchPromises).then(
    (responses) => Promise.all(responses.map((response) => response.json())),
  );
  return items;
}

type Unarray<T> = T extends (infer U)[] ? U : T;

function useData<D>(
  url: string,
  referenceSubdata?: {
    parentIdKey: keyof Unarray<D>,
    parentResultKey: keyof Unarray<D>,
    dataUrl: string
  },
) {
  const [data, setData] = useState<null | D>(null);

  useEffect(
    () => {
      const abortController = new AbortController();

      fetch(url, { signal: abortController.signal })
        .then((response) => response.json())
        .then(async (jsonData: D) => {
          const isArrayInstance = Array.isArray(jsonData);
          let saveData = isArrayInstance ? jsonData : [jsonData];

          if (referenceSubdata) {
            const ids: number[] = saveData.map(
              (item) => item[referenceSubdata.parentIdKey],
            );
            const uniqueIds = [...new Set<number>(ids)];

            const fetchedSubdata = await fetchIds(referenceSubdata.dataUrl, uniqueIds);
            const dataWithReferenceSubdata = saveData.map((item) => {
              const subDataItem = fetchedSubdata.find(
                (subItem) => subItem.id === item[referenceSubdata.parentIdKey],
              );

              return {
                ...item,
                [referenceSubdata.parentResultKey]: subDataItem || null,
              };
            });

            saveData = dataWithReferenceSubdata;
          }

          setData(isArrayInstance ? saveData : saveData[0]);
        }).catch((error) => {
          if (abortController.signal.aborted) {
            return;
          }

          console.error('Fetching data error', error);
        });

      return () => {
        abortController.abort();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return data;
}

export default useData;
