import styles from './Signup.module.css';
export default function SignUp()
{
  return (
    <div className={styles.parent_container}> 
      <div className={styles.signup_container}> 
        <h2 className={styles.title}>Sign Up</h2>
        <form className={styles.signup_form}>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="Repeat your password">Password</label>
            <input type="Repeat your password" id="Repeat your password" placeholder="Repeat your password" />
          </div>
          <div className={styles.button_wrapper}>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}