import Image from 'next/image';
import styles from './page.module.css';
import Products from './products/page';

export default function Home() {
  return (
    <div>
      <Products />
    </div>
  );
}
