import React from 'react';
import PostPlaceholder from '../../atom/postPlaceholder/PostPlaceholder';
import Head1 from '../../atom/head/Head1';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import CardContainer from '../../templates/CardContainer';
import { IPost } from './post.type';
import useData from '../../hooks/useData';

const placeholders = [...Array(10).keys()];

function PostList() {
  const [data, fetchError] = useData<IPost[]>(
    'https://jsonplaceholder.typicode.com/posts/',
    { parentIdKey: 'userId', parentResultKey: 'user', dataUrl: 'https://jsonplaceholder.typicode.com/users/' },
  );

  return (
    <CardContainer>
      <Head1>Post list</Head1>
      {fetchError && <div>{fetchError}</div>}

      {!data && !fetchError && placeholders.map((item) => <PostPlaceholder key={item} />)}

      {data?.map((item) => (
        <PostItem key={item.id} item={item} isTruncated />
      ))}
    </CardContainer>
  );
}

export default PostList;
