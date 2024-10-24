'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../globals.css';
import { sessionStatus } from '../../components/utils/session';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';


export default function AuthLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const checkSession = async () => {
      const session = await sessionStatus(); 

      if (!session) {
        router.push('/signIn'); 
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
      <Header />
      {children}
      <Footer />
    </div>
  );
}
