import style from './singleBlog.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();

  return data.posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export default async function Product({ params }) {
  const post = await getProduct(params.id);

  return (
    <>
      {/* flex: 1;
  text-align: center;
  background-color: #f5f5f5; */}
      <main className='w-full dark:bg-[#0F172A]'>
        <div className={style.post_container}>
          <section className='flex-[1] text-center bg-[#f5f5f5] dark:text-[#E2E8F0] dark:bg-[#0F172A]'>
            <h1 className={style.title}> Advertising space</h1>
          </section>
          <section className={style.post_content_wrapper}>
            <div className={style.post_img_wrapper}>
              <Image
                src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'
                alt='user'
                width={40}
                height={40}
              />
              <span className='dark:text-[#E2E8F0] text-black'>
                UserId: {post.userId}
              </span>
            </div>
            <h4 className='dark:text-[#E2E8F0] text-black'>{post.title}</h4>

            <span
              className={`${style.body_text} dark:text-[#E2E8F0] text-black`}
            >
              Body Text
            </span>
            <h5
              className={`${style.post_body_text} dark:text-[#E2E8F0] text-black`}
            >
              {post.body}
            </h5>
            <p className={`${style.views} dark:text-[#E2E8F0] text-black`}>
              {post.views} Views
            </p>

            <div className={style.single_reaction_Wrapper}>
              <span className={`${style.reactions} ${style.like}`}>
                <Image
                  className={style.reactions_image}
                  src='https://www.svgrepo.com/show/1198/like.svg'
                  alt='likes button'
                  width={20}
                  height={20}
                />
                {post.reactions.likes}
              </span>
              <span className={`${style.reactions} ${style.dislike}`}>
                {post.reactions.dislikes}
                <Image
                  width={20}
                  height={20}
                  className={style.reactions_image}
                  src='https://www.svgrepo.com/show/504867/show-youtube-dislikes.svg'
                  alt='likes button'
                />
              </span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
