import Posts from "@/components/Post/Posts";
import style from "./Blogs.module.css";
import BlogsLocalStorage from "@/components/BlogsLocalStorage/BlogsLocalSorage";
import CreateBlog from "@/components/CreateBlog/CreateBlog";
export default async function Blogs({ searchParams }) {
  let sortBy = "";
  let order;
  const query = await fetch(
    `https://dummyjson.com/posts?sortBy=title&order=asc`
  );
  const { posts } = await query.json();

  return (
    <main className={style.blogs_container}>
      <section className={style.title_wrapper}>
        <h1 className={style.title}>Blogs</h1>
        <CreateBlog blogs={posts} isNew={true} />
      </section>
      <section className={style.blogs}>
        <BlogsLocalStorage>
          {posts.map((post) => (
            <Posts key={post.id} post={post} blogs={posts} />
          ))}
        </BlogsLocalStorage>
      </section>
      <section className={style.free_wrapper}>
        <h1 className={style.title}>Advertising space</h1>
      </section>
    </main>
  );
}
