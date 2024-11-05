import Posts from '@/components/Post/Posts';
import style from './Blogs.module.css';
import BlogsLocalStorage from '@/components/BlogsLocalStorage/BlogsLocalSorage';
import CreateBlog from '@/components/CreateBlog/CreateBlog';
export default async function Blogs({ searchParams }) {
  let sortBy = '';
  let order;
  const query = await fetch(
    `https://dummyjson.com/posts?sortBy=title&order=asc`
  );
  const { posts } = await query.json();

  return (
    <main className={`w-full dark:bg-[#0F172A]`}>
      <div className={`${style.blogs_container} dark:bg-[#0F172A]`}>
        <section className={style.title_wrapper}>
          <h1 className='dark:text-[#E2E8F0]'>Blogs</h1>
          <CreateBlog blogs={posts} isNew={true} />
        </section>
        <section className={style.blogs}>
          <BlogsLocalStorage>
            {posts.map((post) => (
              <Posts key={post.id} post={post} blogs={posts} />
            ))}
          </BlogsLocalStorage>
        </section>

        <section className='flex-1 text-center bg-[#f5f5f5] dark:bg-[#0F172A]'>
          <h1 className='dark:text-[#E2E8F0]'>Advertising space</h1>
        </section>
      </div>
    </main>
  );
}
