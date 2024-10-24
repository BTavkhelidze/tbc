import Link from 'next/link';
import styles from './signUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.box}>
      <div className={styles.box_header}>
        <h5 className={styles.header_title}>Sign Up</h5>
      </div>
      <form className={styles.signup_form}>
        <div className={styles.input_box}>
          <label htmlFor='username'></label>
          <input
            type='text'
            className={styles.input_field}
            placeholder='Username'
            required
            name='username'
            id='username'
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='email'></label>
          <input
            type='email'
            className={styles.input_field}
            placeholder='Email'
            required
            name='email'
            id='email'
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='password'></label>
          <input
            type='password'
            className={styles.input_field}
            placeholder='Password'
            required
            name='password'
            id='password'
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='confirm_password'></label>
          <input
            type='password'
            className={styles.input_field}
            placeholder='Confirm Password'
            required
            name='confirm_password'
            id='confirm_password'
          />
        </div>
        <div className={styles.submit_wrapper}>
          <button className={styles.submit_btn} id='submit' type='submit' />
          <label htmlFor='submit'>Sign Up</label>
        </div>
        <div className={styles.sign_in_link}>
          <p>
            Already have an account? <Link href='/signIn'>Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
