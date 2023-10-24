import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectBlogPost from './pages/ProjectBlogPost';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 min-h-screen">
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
