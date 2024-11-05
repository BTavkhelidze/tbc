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
      {/*  padding: 14px 16px; */}
      <button
        onClick={() => setEditBlog(true)}
        className={`w-[240px] bg-white dark:bg-[#E2E8F0] px-[12px] py-[14px]`}
      >
        Edit Blog
      </button>
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
