import React from 'react';
import styled from 'styled-components';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import CardContainer from '../../templates/CardContainer';
import { IPost } from './post.type';
import useData from '../../hooks/useData';
import styleVariables from '../../styleVariables';

const Head = styled.h1`
  margin: 10px;
  border-bottom: 1px solid ${styleVariables.colors.gray200};
  padding: 16px;

  font-size: 20px;
  font-weight: ${styleVariables.fontWeight[500]};
`;

function PostList() {
  const [data, fetchError] = useData<IPost[]>(
    'https://jsonplaceholder.typicode.com/posts/',
    { parentIdKey: 'userId', parentResultKey: 'user', dataUrl: 'https://jsonplaceholder.typicode.com/users/' },
  );

  return (
    <CardContainer>
      <Head>Post list</Head>
      {fetchError && <div>{fetchError}</div>}

      {data?.map((item) => (
        <PostItem key={item.id} item={item} isTruncated />
      ))}
    </CardContainer>
  );
}

export default PostList;
