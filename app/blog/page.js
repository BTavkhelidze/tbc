import Posts from '@/components/Post/Posts';
import style from './Blogs.module.css';

export default async function Blogs({ searchParams }) {
  console.log('search', searchParams);
  console.log('hello');

  const query = await fetch('https://dummyjson.com/posts');
  const { posts } = await query.json();

  return (
    <main className={style.blogs_container}>
      <section className={style.title_wrapper}>
        <h1 className={style.title}>Blogs</h1>
      </section>
      <section className={style.blogs}>
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </section>
      <section className={style.free_wrapper}>
        <h1 className={style.title}>Advertising space</h1>
      </section>
    </main>
  );
}
