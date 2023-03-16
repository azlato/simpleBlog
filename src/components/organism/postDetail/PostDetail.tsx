import React from 'react';
import { useParams } from 'react-router-dom';
import PostItem from '../../postItem/PostItem';
import { IPost } from '../postList/post.type';
import useData from '../../../hooks/useData';
import { IComment } from './comment.type';

function PostDetail() {
  const { postId } = useParams();
  const post = useData<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  useData<IComment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  return (
    <div>
      {post
            && <PostItem item={post} />}
    </div>
  );
}

export default PostDetail;
