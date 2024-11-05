import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className='w-full   bg-white dark:bg-[#0F172A]'>
      <div className={`${style.footer_container} dark:bg-[#0F172A]`}>
        <span className='dark:text-[#E2E8F0]'>© 2024</span>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
