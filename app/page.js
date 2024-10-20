import Image from 'next/image';
import styles from './page.module.css';
import Product from './(authPages)/products/page.js';
export default function Home() {
  return (
    <div>
      <Product />
    </div>
  );
}
