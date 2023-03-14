import React from 'react';
import { PostsProvider } from '../../providers/posts/PostsProvider';
import PostList from '../../components/postList/PostList';

function Home() {
  return (
    <PostsProvider>
      <div>Home</div>
      <PostList />
    </PostsProvider>
  );
}

export default Home;
