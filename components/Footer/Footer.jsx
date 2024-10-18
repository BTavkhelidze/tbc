import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer_container_wrapper}>
      <div className={style.footer_container}>
        <span>© 2024</span>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
