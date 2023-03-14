import React, { useContext } from 'react';
import { PostsContext } from '../../providers/posts/PostsProvider';

function PostList() {
  const { data } = useContext(PostsContext);

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          {item.user?.username}
          {' '}
          :
          {' '}
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default PostList;
