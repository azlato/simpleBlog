import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Post from './routes/post/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );
}

export default App;
