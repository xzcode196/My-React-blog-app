import React from 'react';
import Comments from './Comments';
import axios from 'axios';

const BlogPost = ({ title, content, author, date }) => {
 
  return (
    <div className="blog-post">
      <h2>{"My First Blog Post"}</h2>

      <p>{"This is the content of my first blog. Welcome to my Blog! Hope you enjoy reading it."}</p>

      <p style={{ fontSize: '0.85em', color: '#666', marginBottom: '8px' }}>
        Author: {"Xiang Zhang"}
      </p>

      <p style={{ fontSize: '0.85em', color: '#666', marginTop: '12px' }}>
        Date: {"2026-3-25"}
      </p>
    </div>
  );
};

export default BlogPost;