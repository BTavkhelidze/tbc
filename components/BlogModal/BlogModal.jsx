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

  const handleInputChange = (e) => {
    setBlogBody(e.target.value);
  };

  function deleteBlog() {
    const updatedBlogs = blogs.filter((b) => b.id !== blog.id);

    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    window.location.reload();
  }

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

    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    window.location.reload();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.BlogModal__wrapper}>
      <div
        className={`${styles.BlogModal} dark:bg-[#0F172A] bg-[#e2e8f0]`}
        ref={modalRef}
      >
        <h1 className='text-center pt-[20px] dark:text-[#E2E8F0]'> {title}</h1>
        <textarea
          name='blog-body'
          id='blog-body'
          value={blogBody || ''}
          className={`${styles.textArea} dark:bg-[#1E293B] bg-white text-black dark:text-[#E2E8F0] outline-none  border-black border  dark:border-[#1D2537]`}
          onChange={handleInputChange}
        ></textarea>
        <div className={styles.blog_btns}>
          <button
            className={`${styles.button} bg-white text-black dark:text-[#E2E8F0]  dark:bg-[#1E293B]  border  border-black dark:border-[#E2E8]`}
            onClick={saveBlog}
          >
            Save
          </button>
          {delateBtn && (
            <button
              className={`${styles.button} bg-white  dark:bg-[#E2E8F0]`}
              onClick={deleteBlog}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
