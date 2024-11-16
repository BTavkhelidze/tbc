'use client';

import DropDownArrowDown from '@/public/assets/vectors/dropdownArrowDown.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const langMap = { ge: 'GEO', en: 'EN' };

const LanguageDropdown = () => {
  const params = useParams();
  const pathname = usePathname();
  const selectedLanguage = langMap[params?.locale] || 'EN';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Handle clicks outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getPathWithLocale = (locale) => {
    if (!pathname || !params?.locale) return '/';
    return `/${locale}${pathname.slice(3)}`;
  };

  return (
    <div ref={dropdownRef} className='relative flex '>
      <button
        onClick={toggleDropdown}
        className='flex items-center gap-2 rounded px-4 py-2 '
      >
        <p className='dark:text-white border px-[10px] py-[8px] w-[60px] border-[#0ea5e9]'>
          {selectedLanguage}
        </p>
        <Image
          src={DropDownArrowDown}
          alt='dropDown'
          className={`transform transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isDropdownOpen && (
        <ul className='absolute top-12 w-full rounded bg-white shadow-lg'>
          {selectedLanguage !== 'EN' && (
            <Link href={getPathWithLocale('en')}>
              <li
                className='cursor-pointer rounded px-4 py-2 hover:bg-gray-200/80'
                onClick={closeDropdown}
              >
                EN
              </li>
            </Link>
          )}
          {selectedLanguage !== 'GEO' && (
            <Link href={getPathWithLocale('ge')}>
              <li
                className='cursor-pointer rounded px-4 py-2 hover:bg-gray-200/80'
                onClick={closeDropdown}
              >
                GEO
              </li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
