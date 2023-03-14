import React, { createContext, useEffect, useState } from 'react';

interface IUser {
  id: number;
  username: string;
}

interface IPost {
  id: number;
  userId: number;
  user: null | IUser;
  title: string;
  body: string;
}

interface IDataContext<D> {
  data: null | D[];
  isLoading: boolean;
  error: null | string;
}

interface IPostDataContext extends IDataContext<IPost> {}

const DEFAULT_STATE: IPostDataContext = {
  data: null,
  isLoading: true,
  error: null,
};

export const PostsContext = createContext<IPostDataContext>(DEFAULT_STATE);

const API_ROOT = 'https://jsonplaceholder.typicode.com';

export function PostsProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [contextData, setContextData] = useState(DEFAULT_STATE);

  useEffect(() => {
    if (!contextData.data) {
      fetch(`${API_ROOT}/posts`).then((response) => response.json()).then(async (posts: IPost[]) => {
        const userIds: number[] = posts.map((item: IPost) => item.userId);
        const uniqueUserIds = [...new Set<number>(userIds)];

        const fetchPromises = uniqueUserIds.map((userId) => fetch(`${API_ROOT}/users/${userId}`));
        const users = await Promise.all(fetchPromises).then(
          (responses) => Promise.all(responses.map((response) => response.json())),
        );

        const postsWithUser = posts.map((post) => {
          const userForPost = users.find((user) => user.id === post.userId);

          return {
            ...post,
            user: userForPost || null,
          };
        });

        setContextData({
          data: postsWithUser,
          isLoading: false,
          error: null,
        });
      }).catch((error: Error) => {
        setContextData({
          data: null,
          isLoading: false,
          error: error.message,
        });
      });
    }
  }, []);

  return (
    <PostsContext.Provider value={contextData}>
      {children}
    </PostsContext.Provider>
  );
}
