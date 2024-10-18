// 'use client';
import style from './Header.module.css';
import Image from 'next/image';

import Link from 'next/link';
const Header = () => {
  return (
    <header className={style.header_container_wrapper}>
      {/* <p>Tbc</p> */}
      <div className={style.header_container}>
        {/* navigation from layout.jsx */}
        <nav>
          <ul>
            <li>
              <Link href='/products'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>

            <li>
              <Link href='/blog'>Blogs</Link>
            </li>
          </ul>
        </nav>

        <div>
          <div className={style.profile_wrapper}>
            <Link href='/profile'>
              <Image
                src='https://www.svgrepo.com/show/43426/profile.svg'
                alt=''
              />
            </Link>
          </div>
          <p>Sign In</p>

          <p>Sign Up</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
