'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './DeleteProduct.module.css';

const DeleteProduct = ({ productId }) => {
  const router = useRouter();

  const handleDelete = () => {
    const storedProducts = JSON.parse(
      localStorage.getItem('products__default')
    );

    if (storedProducts) {
      const updatedProducts = storedProducts.filter(
        (product) => product.id !== parseInt(productId)
      );

      localStorage.setItem(
        'products__default',
        JSON.stringify(updatedProducts)
      );

      router.push('/products');
    }
  };

  return (
    <button onClick={handleDelete} className={styles.button}>
      Delete Product
    </button>
  );
};

export default DeleteProduct;
