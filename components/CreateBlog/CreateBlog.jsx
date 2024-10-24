'use client';

import { useState, useEffect } from 'react';
import BlogModal from '../BlogModal/BlogModal';
import styles from './CreateBlog.module.css';

export default function CreateBlog({ blogs }) {
  const [createBlog, setCreateBlog] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('blogs');

    if (dataFromLocalStorage) {
      // Parse the JSON data and set it in the state
      setData(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const handleCloseModal = () => {
    setCreateBlog(false);
  };

  return (
    <>
      <button className={styles.button} onClick={() => setCreateBlog(true)}>
        Create Blog
      </button>
      {createBlog && (
        <BlogModal
          isNew={true}
          blogs={data || blogs}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
