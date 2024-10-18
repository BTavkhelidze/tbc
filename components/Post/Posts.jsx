'use client';

import { useRouter } from 'next/navigation';
import style from './Posts.module.css';

const Posts = ({ post }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`./blog/${id}`);
  };

  return (
    <div className={style.post_wrapper}>
      <p>{post.body}</p>

      <div className={style.btn_reactions_wrapper}>
        <div className={style.reactions_wrapper}>
          <span className={`${style.reactions} ${style.like}`}>
            <img
              className={style.reactions_image}
              src='https://www.svgrepo.com/show/1198/like.svg'
              alt='likes button'
            />
            {post.reactions.likes}
          </span>
          <span className={`${style.reactions} ${style.dislike}`}>
            {post.reactions.dislikes}
            <img
              className={style.reactions_image}
              src='https://www.svgrepo.com/show/504867/show-youtube-dislikes.svg'
              alt='dislikes button'
            />
          </span>
        </div>
        <button onClick={() => handleClick(post.id)} type='button'>
          See More
        </button>
      </div>
    </div>
  );
};

export default Posts;
