import React from 'react';
import styled from 'styled-components';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import { IPost } from './post.type';
import useData from '../../hooks/useData';
import styleVariables from '../../styleVariables';

const Container = styled.div`
  margin-top: 12px;
  border-radius: 18px;
  padding: 14px 12px 28px;

  background-color: ${styleVariables.colors.white};

  @media ${styleVariables.viewport.desktop} {
    padding: 16px 22px 32px;
  }
`;

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
    <Container>
      <Head>Post list</Head>
      {fetchError && <div>{fetchError}</div>}

      {data?.map((item) => (
        <PostItem key={item.id} item={item} isTruncated />
      ))}
    </Container>
  );
}

export default PostList;
