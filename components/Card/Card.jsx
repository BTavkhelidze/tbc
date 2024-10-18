'use client';

import { useRouter } from 'next/navigation';
import style from './Card.module.css';

const Card = ({ productsObj }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`./products/${id}`);
  };

  return (
    <div className={style.card}>
      <div className={style.image_wrapper}>
        <img alt='Blink Video Doorbell' src={productsObj.images[0]} />
      </div>
      <div className={style.card_desc_wrapper}>
        <h1 className={style.title}>{productsObj.title}</h1>
        <div className={style.price_wrapper}>
          <p className={style.price}>{productsObj.price}$</p>
          <button onClick={() => handleClick(productsObj.id)} type='button'>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;