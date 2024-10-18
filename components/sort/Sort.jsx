'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import style from './Sort.module.css';

const Sort = () => {
  const [value, setValue] = useState('default');
  const router = useRouter();
  const searchParams = useSearchParams();

  function sortMethod(newValue) {
    const currentSearch = searchParams.get('search') || '';

    if (newValue && newValue !== 'default') {
      router.push(
        `/products?search=${currentSearch}&sortBy=price&order=${newValue}`
      );
    }
  }

  return (
    <div className={style.sort_wrappe}>
      <select
        onChange={(e) => {
          const newValue = e.target.value;
          setValue(newValue);
          sortMethod(newValue);
        }}
        value={value}
      >
        <option value='default'>Default</option>
        <option value='asc'>Low to High</option>
        <option value='desc'>High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
