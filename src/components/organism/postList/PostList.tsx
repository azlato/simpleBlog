import React from 'react';
import PostItem from '../../postItem/PostItem';
import { IPost } from './post.type';
import useData from '../../../hooks/useData';

function PostList() {
  const [data, fetchError] = useData<IPost[]>(
    'https://jsonplaceholder.typicode.com/posts/',
    { parentIdKey: 'userId', parentResultKey: 'user', dataUrl: 'https://jsonplaceholder.typicode.com/users/' },
  );

  return (
    <div>
      {fetchError && <div>{fetchError}</div>}

      {data?.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default PostList;
