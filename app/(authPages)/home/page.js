import Products from '../products/page';
import style from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <main className={style.home_container}>
      {/* <section className={style.banner_section}>
        <div className={style.banner_text}>
          <h2 className={style.welcome_message}>Welcome to Our Website</h2>
          <p className={style.intro_text}>
            We are dedicated to providing the best services. Explore our content
            to learn more.
          </p>
        </div>
      </section>

      <section className={style.features_section}>
        <h3 className={style.features_title}>Our Features</h3>
        <ul className={style.features_list}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
      </section>

      <section className={style.contact_section}>
        <form>
          <div className={style.input_wrapper}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Your Name' />
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Your Email' />
          </div>
          <div className={style.buttons_wrapper}>
            <button type='submit'>Submit</button>
            <button type='button'>Cancel</button>
          </div>
        </form>
      </section> */}
      <Products />
    </main>
  );
};

export default Home;
