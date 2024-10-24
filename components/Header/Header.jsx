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
              <NavLink href='/home'>Home</NavLink>
            </li>
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
          <nav>
          <ul>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
            <li>
              <NavLink href='/signIn'>SignIn</NavLink>
            </li>
            <li>
              <NavLink href='/signUp'>SignUp</NavLink>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
