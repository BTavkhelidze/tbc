import style from './Contact.module.css';

const Contact = () => {
  return (
    <main className='w-full dark:bg-[#0F172A]'>
      <div className={`${style.contact_container} `}>
        <div className={style.title_wrapper}>
          <h1 className='dark:text-[#E2E8F0]  mb-[20px] text-black'>Contact</h1>
        </div>
        <section
          className={`${style.contact_wrapper} border border-[#0EA5E9] dark:border-[#0EA5E9]`}
        >
          <div className={style.contact}>
            <div className='text-center  dark:text-[#E2E8F0]   text-black '>
              Let’s get in Touch
            </div>
          </div>
          <div className={style.submit_form}>
            <form>
              <div className={style.label_wrapper}>
                <input
                  type='text'
                  id='username'
                  className='border border-[#0EA5E9] dark:border-[#0EA5E9] dark:text-[#E2E8F0]'
                />
                <label
                  htmlFor='username '
                  className='dark:bg-[#0F172A] dark:text-[#E2E8F0] bg-white'
                >
                  Name
                </label>
              </div>

              <div className={style.label_wrapper}>
                <input
                  type='text'
                  id='email'
                  className='border border-[#0EA5E9] dark:border-[#0EA5E9] dark:text-[#E2E8F0]'
                />
                <label
                  htmlFor='email'
                  className='dark:bg-[#0F172A] dark:text-[#E2E8F0] bg-white'
                >
                  Email
                </label>
              </div>

              <div className={style.label_wrapper}>
                <input
                  type='tel'
                  id='secondname'
                  required
                  className='border border-[#0EA5E9] dark:border-[#0EA5E9] dark:text-[#E2E8F0]'
                />
                <label
                  htmlFor='tel'
                  className='dark:bg-[#0F172A] dark:text-[#E2E8F0] bg-white'
                >
                  Mobile
                </label>
              </div>

              <div className={style.label_wrapper}>
                <textarea
                  id='text'
                  required
                  className='dark:bg-[#0F172A] text-black dark:text-[#E2E8F0] bg-white border border-[#0EA5E9]  '
                />
                <label
                  htmlFor='text'
                  className='dark:bg-[#0F172A] dark:text-[#E2E8F0] bg-white'
                >
                  Text
                </label>
              </div>

              <button
                type='submit'
                className='hover:text-[#E2E8F0] hover:bg-[#0EA5E9] bg-white text-[#0F172A]'
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
