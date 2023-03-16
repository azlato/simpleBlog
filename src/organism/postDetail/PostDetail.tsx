import React from 'react';
import { useParams } from 'react-router-dom';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import Head2 from '../../atom/head/Head2';
import CommentItem from '../../molecule/commentItem/CommentItem';
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
  const [comments] = useData<IComment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  return (
    <>
      <CardContainer>
        {post && <PostItem item={post} />}
      </CardContainer>

      <Head2>Comments</Head2>
      <CardContainer>
        {comments?.map((comment) => <CommentItem key={comment.id} item={comment} />) }
      </CardContainer>
    </>
  );
}

export default PostDetail;
