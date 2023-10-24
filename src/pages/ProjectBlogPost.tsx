import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectBlogPost: React.FC = () => {
  const { postId } = useParams();

  return (
    <article>
      <h1 className="text-2xl mb-4">Blog Post Title</h1>
      <p>[Your Blog Content Here] {postId}</p>
    </article>
  );
};

export default ProjectBlogPost;
