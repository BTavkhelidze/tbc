import "./BlogModal.css";
export default function BlogModal({ blog, blogs }) {
  function deleteBlog() {
    const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
    // Update localStorage with the new blogs
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    //refresh page to get UpdatedBlogs
    window.location.reload();
  }
  return (
    <div className="BlogModal__wrapper">
      <div className="BlogModal">Blog Modal</div>
      <button onClick={deleteBlog}>delete btn</button>
    </div>
  );
}
