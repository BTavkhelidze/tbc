'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../globals.css';
import { sessionStatus } from '../../components/utils/session';

export default function PublicLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const checkSession = async () => {
      const session = await sessionStatus(); 

      if (session===true) {
        router.push('/profile'); 
      } else {
        setLoading(false); 
      }
    };

    checkSession();
  }, [router]); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.layoutContainer}>
      {children}
    </div>
  );
}
