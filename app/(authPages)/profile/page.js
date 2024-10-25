'use client';
import { useEffect, useState } from 'react';
import style from './Profile.module.css';
import Image from 'next/image';
import { signOut } from '@/app/lib/actions';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log('Token:', token);

    const getAuthUser = async () => {
      if (!token) {
        setError('Please log in.');
        return;
      }

      try {
        const res = await fetch('https://dummyjson.com/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getAuthUser();
  }, []);

  return (
    <main className={style.profile_container}>
      {error && <p className={style.error_message}>{error}</p>}
      {userData ? (
        <>
          <section className={style.description_content_wrapper}>
            <div className={style.background_decoration}>
              <div className={style.profile_image}>
                <Image
                  className={style.prof_img}
                  src={
                    userData.image ||
                    'https://ssl.gstatic.com/onebox/media/sports/photos/ufc/3605_rZmNsA_96x96.png'
                  }
                  alt='profile image'
                  width={96}
                  height={96}
                />
              </div>
            </div>
            <div className={style.profile_description}>
              <div>
                <h2 className={style.profile_name}>
                  {`${userData.firstName} ${userData.lastName}`}
                </h2>
                <div>
                  <span className={style.profile_email}>
                    Email: {userData.email}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className={style.profile_settings}>
            <nav>
              <ul>
                <li>Account settings</li>
                <li>Manage password</li>
                <li>Order history</li>
                <li>Address</li>
                <li>Notification</li>
                <li>
                  <button onClick={signOut}>Sign Out</button>
                </li>
              </ul>
            </nav>
          </section>

          <section className={style.account_settings}>
            <form>
              <div className={style.label_wrapper}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' value={userData.firstName} />
              </div>
              <div className={style.label_wrapper}>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' value={userData.lastName} />
              </div>

              <div className={style.label_wrapper}>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={userData.email} />
              </div>

              <div className={style.label_wrapper}>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                  type='tel'
                  id='phoneNumber'
                  required
                  value='(+987) 123 456 789'
                />
              </div>
              <div className={style.buttons_wrapper}>
                <button type='button'>Cancel</button>
                <button type='submit'>Update</button>
              </div>
            </form>
          </section>
        </>
      ) : (
        !error && <p>Loading user data...</p>
      )}
    </main>
  );
};

export default Profile;
