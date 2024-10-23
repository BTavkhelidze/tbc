"use client";
import { useState } from "react";
import "./EditBlogBtn.css";

export default function EditBlogBtn() {
  const [editBlog, setEditBlog] = useState(false);
  return <button onClick={() => setEditBlog(true)}>Edit Blog</button>;
}
