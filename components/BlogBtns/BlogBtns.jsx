'use client';
import { useState } from 'react';
import './BlogBtns.css';
import BlogModal from '../BlogModal/BlogModal';

export function EditBlogBtn({ blog, blogs, onClose }) {
  const [editBlog, setEditBlog] = useState(false);
  const handleCloseModal = () => {
    setEditBlog(false);
  };
  return (
    <>
      <button onClick={() => setEditBlog(true)}>Edit Blog</button>
      {editBlog && (
        <BlogModal
          blog={blog}
          blogs={blogs}
          onClose={handleCloseModal}
          title='Edit Blog'
        />
      )}
    </>
  );
}
