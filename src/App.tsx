import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index/Index';
import PostPage from './pages/post/Post';
import UserPage from './pages/user/User';
import CommonLayout from './templates/CommonLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
