'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import searchIcon from '@/assets/icons8-search.svg';
import style from './Search.module.css';

const Search = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/products?search=${debouncedSearch}`);
    }
  }, [debouncedSearch, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.searchButton}>
      <form onSubmit={handleSubmit} className={style.box}>
        <label>
          <input
            type='text'
            placeholder='search the product'
            className={`${style.input} dark:text-[#E2E8F0] text-black`}
            value={search}
            onChange={(e) => setSearch(e.target.value.trim())}
          />
        </label>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 50 50'
          width='20px'
          height='20px'
          className='dark:fill-[#E2E8F0]'
        >
          <path d='M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z' />
        </svg>
      </form>
    </div>
  );
};

export default Search;
