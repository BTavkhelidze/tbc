'use client';
import { usePathname } from 'next/navigation';
import style from './Nav-Link.module.css';
import Link from 'next/link';

const NavLink = ({ href, children, locale }) => {
  const path = usePathname();
  console.log(locale);
  return (
    <>
      {' '}
      <Link
        href={`/${locale}${href}`}
        className={path.startsWith(href) ? style.active : undefined}
      >
        <p
          className={`${
            path.startsWith(href) ? style.text : undefined
          } dark:text-[#E2E8F0]`}
        >
          {children}
        </p>
      </Link>
    </>
  );
};

export default NavLink;
