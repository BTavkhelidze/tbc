import style from './Profile.module.css';

const Profile = () => {
  return (
    <main className={style.profile_container}>
      <section className={style.description_content_wrapper}>
        <div className={style.bakcground_decoration}>
          <div className={style.profile_image}>
            <img
              src='https://ssl.gstatic.com/onebox/media/sports/photos/ufc/3605_rZmNsA_96x96.png'
              alt='profile image'
            />
          </div>
        </div>
        <div className={style.profile_description}>
          <div>
            <h2 className={style.profile_name}>Ilia Topuria</h2>
            <div>
              <span className={style.profile_email}>
                Email: elmatadortopuria@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={style.profile_settings}>
        <nav>
          <ul>
            <li>Account settings</li>
            <li>Manage password</li>
            <li>Order history</li>
            <li>Address</li>
            <li>Notification</li>
          </ul>
        </nav>
      </section>
      <section className={style.account_settings}>
        <form>
          <div className={style.label_wrapper}>
            <label htmlFor='username'>First Name</label>
            <input type='text' id='username' placeholder='Ilia' />
          </div>
          <div className={style.label_wrapper}>
            <label htmlFor='username'>Last Name</label>
            <input type='text' id='username' placeholder='Topuria' />
          </div>

          <div className={style.label_wrapper}>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='elmatadortopuria@gmail.com'
            />
          </div>

          <div className={style.label_wrapper}>
            <label htmlFor='secondname'>Phone Number</label>
            <input
              type='tel'
              id='secondname'
              required
              placeholder='(+987) 123 456 789'
            />
          </div>
          <div className={style.buttons_wrapper}>
            <button type='submit'>Cancel</button>
            <button type='submit'>Update</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;
