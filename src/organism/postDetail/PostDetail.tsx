import React from 'react';
import { useParams } from 'react-router-dom';
import PostItem from '../../molecule/postItem.tsx/PostItem';
import Head2 from '../../atom/head/Head2';
import CommentItem from '../../molecule/commentItem/CommentItem';
import PostPlaceholder from '../../atom/postPlaceholder/PostPlaceholder';
import { IPost } from '../postList/post.type';
import useData from '../../hooks/useData';
import { IComment } from './comment.type';
import CardContainer from '../../templates/CardContainer';

const placeholders = [...Array(5).keys()];

function PostDetail() {
  const { postId } = useParams();
  const [post, postFetchError] = useData<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { parentIdKey: 'userId', parentResultKey: 'user', dataUrl: 'https://jsonplaceholder.typicode.com/users/' },
  );
  const [comments, commentsFetchError] = useData<IComment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  return (
    <>
      <CardContainer>
        {postFetchError && <div>{postFetchError}</div>}

        {post ? <PostItem item={post} /> : <PostPlaceholder />}
      </CardContainer>

      <Head2>Comments</Head2>
      <CardContainer>
        {commentsFetchError && <div>{commentsFetchError}</div>}

        {!comments && !commentsFetchError
        && placeholders.map((item) => <PostPlaceholder key={item} />)}

        {comments?.map((comment) => <CommentItem key={comment.id} item={comment} />) }
      </CardContainer>
    </>
  );
}

export default PostDetail;
