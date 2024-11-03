'use client';
import style from './Header.module.css';
import Image from 'next/image';

import Link from 'next/link';
import NavLink from '../Nav-Link/Nav-Link';

import { useUser } from '@auth0/nextjs-auth0/client';

const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <header className={style.header_container_wrapper}>
      <div className={style.header_container}>
        <nav>
          <ul>
            <li>
              <NavLink href='/products'>Products</NavLink>
            </li>
            <li>
              <NavLink href='/about'>About</NavLink>
            </li>
            <li>
              <NavLink href='/contact'>Contact</NavLink>
            </li>

            <li>
              <NavLink href='/blog'>Blogs</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          {user ? (
            <>
              <div className={style.profile_wrapper}>
                <a href='/profile'>
                  <Image
                    width={20}
                    height={20}
                    src='https://www.svgrepo.com/show/43426/profile.svg'
                    alt=''
                  />
                </a>
              </div>

              <button className={style.button}>
                <a href='api/auth/logout'>
                  <Image
                    width={30}
                    height={30}
                    src='https://www.svgrepo.com/show/18970/logout.svg'
                    alt='log out'
                  />
                </a>
              </button>
            </>
          ) : (
            <button className={style.button}>
              <a href='/api/auth/login'>Log in</a>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
