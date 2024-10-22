'use client';
import { usePathname } from 'next/navigation';
import style from './Nav-Link.module.css';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <>
      {' '}
      <Link
        href={href}
        className={path.startsWith(href) ? style.active : undefined}
      >
        <p className={path.startsWith(href) ? style.text : undefined}>
          {children}
        </p>
      </Link>
    </>
  );
};

export default NavLink;
