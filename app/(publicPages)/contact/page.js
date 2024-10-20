import style from './Contact.module.css';

const Contact = () => {
  return (
    <main className={style.contact_container}>
      <div className={style.title_wrapper}>
        <h1 className={style.title}>Contact</h1>
      </div>
      <section className={style.contact_wrapper}>
        <div className={style.contact}>
          <div className={style.first_text}>Let’s get in Touch</div>
        </div>
        <div className={style.submit_form}>
          <form>
            <div className={style.label_wrapper}>
              <input type='text' id='username' />
              <label htmlFor='username'>Name</label>
            </div>

            <div className={style.label_wrapper}>
              <input type='text' id='email' />
              <label htmlFor='email'>Email</label>
            </div>

            <div className={style.label_wrapper}>
              <input type='tel' id='secondname' required />
              <label htmlFor='tel'>Mobile</label>
            </div>

            <div className={style.label_wrapper}>
              <textarea id='text' required />
              <label htmlFor='text'>Text</label>
            </div>

            <button type='submit'>Send</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
