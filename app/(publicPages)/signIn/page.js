import Link from 'next/link';
import styles from './signIn.module.css';

import { authenticate } from '@/app/lib/actions';

export default function page() {
  return (
    <div className={styles.box}>
      <div className={styles.box_header}>
        <h5 className={styles.header_title}>LogIn</h5>
      </div>
      <form action={authenticate}>
        <div className={styles.input_box}>
          <label htmlFor='email'></label>
          <input
            type='text'
            className={styles.input_field}
            placeholder='Email'
            required
            name='email'
            id='email'
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='pass'></label>
          <input
            type='password'
            className={styles.input_field}
            placeholder='Password'
            required
            id='pass'
            name='password'
          />
        </div>
        <div className={styles.forgot}>
          <section>
            <input type='checkbox' id={styles.check} />
            <label htmlFor='check'>Remember me</label>
          </section>
          <section>
            <Link href='/forgot-password'>Forgot password</Link>
          </section>
        </div>
        <div className={styles.submit_wrapper}>
          <button className={styles.submit_btn} id='submit' type='submit' />
          <label htmlFor='submit'>Sign In</label>
        </div>
        <div className={styles.sign_up_link}>
          <p>
            Do not have account ? <Link href='/signUp'>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
