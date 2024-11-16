'use client';

import style from './Profile.module.css';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) return <div>No user data found</div>; // Ensure `user` exists

  return (
    <div className='px-[60px] py-[30px] bg-white dark:bg-[#0F172A]'>
      <div className='mb-[50px] rounded-3xl overflow-hidden'>
        <Image
          src={user.picture || '/default-avatar.png'}
          alt={user.name || 'User Avatar'}
          width={80}
          height={80}
          className='rounded-full'
        />
      </div>
      <h2 className='text-[16px] font-semibold mb-3 dark:text-[#E2E8F0] text-black'>
        {user.name || 'Anonymous User'}
      </h2>
      <p className='text-[14px] dark:text-[#E2E8F0] text-black'>
        {user.email || 'No email available'}
      </p>
    </div>
  );
}
