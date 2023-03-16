import { useState, useEffect } from 'react';

const FETCH_TIMEOUT_MS = 6000;

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
): [null | D, null | string] {
  const [data, setData] = useState<null | D>(null);
  const [fetchError, setFetchError] = useState<null | string>(null);

  useEffect(
    () => {
      const abortController = new AbortController();
      const fetchTimeout = setTimeout(() => {
        setFetchError('Fetching data timeout');

        abortController.abort();
      }, FETCH_TIMEOUT_MS);

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

          clearTimeout(fetchTimeout);
          setData(isArrayInstance ? saveData : saveData[0]);
        }).catch((error) => {
          if (abortController.signal.aborted) {
            return;
          }

          setFetchError(`Use data hook fetch error: ${error.message}`);
        });

      return () => {
        abortController.abort();
        clearTimeout(fetchTimeout);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [
    data,
    fetchError,
  ];
}

export default useData;
