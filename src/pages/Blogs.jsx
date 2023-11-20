import React, { useState, useEffect } from 'react';
import './CSS/Blogs.css';
import banner from '../components/Assets/banner_blog.png';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch data from your API (replace with your API endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  const handlePostClick = (postId) => {
    // Toggle the selected post
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  return (
    <div>
      <div className='bannerdisplay'>
        <img src={banner} alt="Banner for Blog" />
      </div>
      <div className='blog-content'>
        {blogData.map(blog => (
          <div
            key={blog.id}
            className={`blog-post ${selectedPost === blog.id ? 'selected' : ''}`}
            onClick={() => handlePostClick(blog.id)}
          >
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
