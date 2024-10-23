"use client"; //
import { useState } from "react";
import "./BlogModal.css";
export default function BlogModal({ blog, blogs }) {
  const [blogBody, setBlogBody] = useState(blog.body);

  //handle textarea change
  const handleInputChange = (e) => {
    setBlogBody(e.target.value);
  };

  // delete blog functionality
  function deleteBlog() {
    const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
    // Update localStorage with the new blogs
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    //refresh page to get UpdatedBlogs
    window.location.reload();
  }

  //save edited Blog functionality
  function saveBlog() {
    const updatedBlogs = blogs.map((b) => {
      console.log(b.id, blog.id);
      if (b.id !== blog.id) {
        return b;
      } else {
        return { ...blog, body: blogBody };
      }
    });

    // Update localStorage with the new blogs
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    //refresh page to get UpdatedBlogs
    window.location.reload();
  }

  //create Blog functionality

  return (
    <div className="BlogModal__wrapper">
      <div className="BlogModal">
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Edit Blog</h1>
        <textarea
          name="blog-body"
          id="blog-body"
          value={blogBody}
          onChange={handleInputChange}
        ></textarea>
        <div className="blog-btns">
          <button className="save" onClick={saveBlog}>
            Save
          </button>

          <button className="delete" onClick={deleteBlog}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
