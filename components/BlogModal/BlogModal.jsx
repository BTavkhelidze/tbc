'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './BlogModal.module.css';

export default function BlogModal({
  blog,
  blogs,
  isNew = false,
  onClose,
  title,
  delateBtn = true,
}) {
  const [blogBody, setBlogBody] = useState(blog?.body || null);
  const modalRef = useRef();

  // Handle textarea change
  const handleInputChange = (e) => {
    setBlogBody(e.target.value);
  };

  // Delete blog functionality
  function deleteBlog() {
    const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
    // Update localStorage with the new blogs
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    // Refresh page to get UpdatedBlogs
    window.location.reload();
  }

  // Save edited Blog functionality
  function saveBlog() {
    let updatedBlogs = [];
    if (isNew) {
      const id = blogs.length + 1;
      const body = blogBody;
      const reactions = { likes: 0, dislikes: 0 };
      const newBlog = { id, body, reactions };
      updatedBlogs = [newBlog, ...blogs];
    } else {
      updatedBlogs = blogs.map((b) => {
        if (b.id !== blog.id) {
          return b;
        } else {
          return { ...blog, body: blogBody };
        }
      });
    }

    // Update localStorage with the new blogs
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    // Refresh page to get UpdatedBlogs
    window.location.reload();
  }

  // Close modal on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.BlogModal__wrapper}>
      <div className={styles.BlogModal} ref={modalRef}>
        <h1 style={{ textAlign: 'center', paddingTop: '20px' }}> {title}</h1>
        <textarea
          name='blog-body'
          id='blog-body'
          value={blogBody || ''}
          className={styles.textArea}
          onChange={handleInputChange}
        ></textarea>
        <div className={styles.blog_btns}>
          <button className={styles.button} onClick={saveBlog}>
            Save
          </button>
          {delateBtn && (
            <button className={styles.button} onClick={deleteBlog}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
