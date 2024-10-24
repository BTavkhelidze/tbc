"use client"; //
import { useState } from "react";
import "./BlogModal.css";
export default function BlogModal({ blog, blogs, isNew = false }) {
  const [blogBody, setBlogBody] = useState(blog?.body || null);

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
    console.log(isNew);
    let updatedBlogs = [];
    if (isNew) {
      // if the create blog button is pressed
      const id = blogs.length + 1;
      const body = blogBody;
      const reactions = { likes: 0, dislikes: 0 };
      const newBlog = { id, body, reactions };
      updatedBlogs = [newBlog, ...blogs];
      console.log(newBlog, updatedBlogs);
    } else {
      // if edited and then saved
      updatedBlogs = blogs.map((b) => {
        if (b.id !== blog.id) {
          return b;
        } else {
          return { ...blog, body: blogBody };
        }
      });
    }

    // Update localStorage with the new blogs
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    //refresh page to get UpdatedBlogs
    window.location.reload();
  }

  //create Blog functionality
  function createBlog() {
    // Update localStorage with the new blogs
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    //refresh page to get UpdatedBlogs
    window.location.reload();
  }

  return (
    <div className="BlogModal__wrapper">
      <div className="BlogModal">
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Edit Blog</h1>
        <textarea
          name="blog-body"
          id="blog-body"
          value={blogBody ? blogBody : ""}
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
