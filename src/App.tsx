import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectBlogPost from './pages/ProjectBlogPost';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="text-gray-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/:postId" element={<ProjectBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
