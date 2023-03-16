import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/index/Index';
import Post from './pages/post/Post';
import CommonLayout from './templates/CommonLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Index />} />
        <Route path="/post/:postId" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
