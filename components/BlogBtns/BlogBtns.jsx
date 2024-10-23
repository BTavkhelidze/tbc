"use client";
import { useState } from "react";
import "./BlogBtns.css";
import BlogModal from "../BlogModal/BlogModal";

export function EditBlogBtn({ blog, blogs }) {
  const [editBlog, setEditBlog] = useState(false);
  return (
    <>
      <button onClick={() => setEditBlog(true)}>Edit Blog</button>
      {editBlog && <BlogModal blog={blog} blogs={blogs} />}
    </>
  );
}
