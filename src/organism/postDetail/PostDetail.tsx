import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import { IPost } from '../postList/post.type';
import useData from '../../hooks/useData';
import { IComment } from './comment.type';
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

function PostDetail() {
  const { postId } = useParams();
  const [post] = useData<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { parentIdKey: 'userId', parentResultKey: 'user', dataUrl: 'https://jsonplaceholder.typicode.com/users/' },
  );
  useData<IComment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  return (
    <Container>
      {post
            && <PostItem item={post} />}
    </Container>
  );
}

export default PostDetail;
