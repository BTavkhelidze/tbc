'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { useRouter } from 'next/navigation';
const Search = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 2000);
  const router = useRouter();

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/products?search=${debouncedSearch}`);
    }
  }, [debouncedSearch, router]);

  return (
    <div>
      <input
        type='text'
        placeholder='search the product'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
