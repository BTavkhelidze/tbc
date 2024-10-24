import style from './About.module.css';

const About = () => {
  return (
    <main className={style.about_container}>
      <section className={style.title_wrapper}>
        <h1 className={style.title}> About US</h1>
      </section>
      <section className={style.aU_description_wrapper}>
        <p className={style.aU_description}>
          Welcome to our online shoping website, your one-stop online shopping
          destination! Our website is dedicated to providing a seamless and
          enjoyable shopping experience, where you can find and buy a wide range
          of products from the comfort of your own home. Our mission is to make
          online shopping easy, convenient, and accessible to everyone. We
          strive to provide a user-friendly interface, competitive prices, and a
          vast selection of products to cater to diverse tastes and preferences.
          Whether you are looking for everyday essentials, gifts for loved ones.
          If you have any questions or concerns, please do not hesitate to reach
          out to us. Thank you for choosing us, and happy shopping!
        </p>
      </section>
    </main>
  );
};

export default About;
