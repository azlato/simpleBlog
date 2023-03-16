import React from 'react';
import { useParams } from 'react-router-dom';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import { IPost } from '../postList/post.type';
import useData from '../../hooks/useData';
import { IComment } from './comment.type';
import CardContainer from '../../templates/CardContainer';

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
    <CardContainer>
      {post
            && <PostItem item={post} />}
    </CardContainer>
  );
}

export default PostDetail;
