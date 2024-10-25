import style from './Header.module.css';
import Image from 'next/image';
import { signOut } from '@/app/lib/actions';
import Link from 'next/link';
import NavLink from '../Nav-Link/Nav-Link';

const Header = () => {
  return (
    <header className={style.header_container_wrapper}>
      {/* <p>Tbc</p> */}
      <div className={style.header_container}>
        {/* navigation from layout.jsx */}
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
          <div className={style.profile_wrapper}>
            <Link href='/profile'>
              <Image
                width={20}
                height={20}
                src='https://www.svgrepo.com/show/43426/profile.svg'
                alt=''
              />
            </Link>
          </div>

          <button className={style.button} onClick={signOut}>
            <Image
              width={30}
              height={30}
              src='https://www.svgrepo.com/show/18970/logout.svg'
              alt='log out'
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
