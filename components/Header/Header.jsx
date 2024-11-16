'use client';
import style from './Header.module.css';
import Image from 'next/image';

import Link from 'next/link';
import NavLink from '../Nav-Link/Nav-Link';

import { useUser } from '@auth0/nextjs-auth0/client';
import ToggleBtn from './toggleBtn';

import { useTranslations } from 'next-intl';
import LanguageDropdown from '../LanguageDropdown';

const Header = ({ locale }) => {
  const { user } = useUser();

  const t = useTranslations('NavbarLinks');

  const handleLogin = () => {
    // Redirect to /{locale}/products after login
    window.location.href = `/api/auth/login`;
  };

  const navLinks = [
    {
      id: 1,
      href: '/products',
      text: t('products'),
    },
    {
      id: 2,
      href: '/about',
      text: t('about'),
    },
    {
      href: '/contact',
      text: t('contact'),
      id: 3,
    },
    {
      href: '/blog',
      text: t('blog'),
      id: 4,
    },
  ];
  return (
    <header className={`${style.header_container_wrapper} dark:bg-[#0F172A]  `}>
      <div className={style.header_container}>
        <nav>
          <ul className='flex'>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink href={link.href} locale={locale}>
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <ToggleBtn />
          {user ? (
            <>
              <div className={style.profile_wrapper}>
                <Link href={`/${locale}/profile`}>
                  <Image
                    width={20}
                    height={20}
                    src='https://www.svgrepo.com/show/43426/profile.svg'
                    alt=''
                    className='dark:bg-[#E2E8F0]'
                  />
                </Link>
              </div>

              <button className={style.button}>
                <Link href={`/api/auth/logout`}>
                  <Image
                    width={30}
                    height={30}
                    src='https://www.svgrepo.com/show/18970/logout.svg'
                    alt='log out'
                    className='dark:bg-[#E2E8F0]'
                  />
                </Link>
              </button>
            </>
          ) : (
            <button
              className='bg-transparent dark:text-[#E2E8F0]'
              onClick={handleLogin}
            >
              Log in
            </button>
          )}
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
