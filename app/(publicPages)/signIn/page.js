import Link from 'next/link';
import styles from './signIn.module.css';
export default function page() {
  return (
    <div className={styles.box}>
      <div className={styles.box_header}>
        <h5 className={styles.header_title}>LogIn</h5>
      </div>
      <div className={styles.input_box}>
        <label></label>
        <input
          type='text'
          className={styles.input_field}
          placeholder='Email'
          required
        />
      </div>
      <div className={styles.input_box}>
        <label></label>
        <input
          type='password'
          className={styles.input_field}
          placeholder='Password'
          required
        />
      </div>
      <div className={styles.forgot}>
        <section>
          <input type='checkbox' id={styles.check} />
          <label for='check'>Remember me</label>
        </section>
        <section>
          <Link href='/forgot-password'>Forgot password</Link>
        </section>
      </div>
      <div className={styles.submit_wrapper}>
        <button className={styles.submit_btn} id='submit' />
        <label for='submit'>Sign In</label>
      </div>
      <div className={styles.sign_up_link}>
        <p>
          Don't have account ? <Link href='/signUp'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
