'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import searchIcon from '@/assets/icons8-search.svg';
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
            value={search}
            onChange={(e) => setSearch(e.target.value.trim())}
          />
        </label>

        <Image src={searchIcon} className={style.icon} alt='Search icon' />
      </form>
    </div>
  );
};

export default Search;
