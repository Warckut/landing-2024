import classNames from 'classnames';
import usePopup from '../../../hooks/usePopup';
import styles from './Mobile.module.css';
import logoImage from '../../../assets/svg/logo-mobile.svg';
import profileImage from '../../../assets/svg/user-blue.svg';
import shoppingCartImage from '../../../assets/svg/shopping-cart-blue.svg';
import menuImage from '../../../assets/svg/menu-blue.svg';
import Sidebar from '../../Sidebar/Sidebar';

function Mobile() {
  const [refSB, showSB, setShowSB] = usePopup();
  const [refProfile, showProfile, setShowProfile] = usePopup();

  return (
    <div className={styles.mobile}>
      <div className={'container'}>
        <a className={styles.mobile__logo} href='/'>
          <img src={logoImage} alt='logo' />
        </a>
        <div className={styles.mobile__btngroup}>
          <button
            ref={refProfile}
            onClick={() => setShowProfile((v) => !v)}
            className={classNames(styles.mobile__profile, styles.profile)}
          >
            <img src={profileImage} alt='profile' />
            <div
              className={classNames(styles.profile__popup, {
                [styles.profile__popup_active]: showProfile,
              })}
            >
              <a href='/SignIn' className={classNames('btn', 'btn-primary')}>
                Войти
              </a>
              <a href='/SignUp' className={classNames('btn', 'btn-outline')}>
                Зарегистрироваться
              </a>
            </div>
          </button>
          <button className={styles.mobile__cart}>
            <img src={shoppingCartImage} alt='shopping cart' />
            <span>9</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSB((state) => !state);
            }}
            className={styles.mobile__menu}
          >
            <img src={menuImage} alt='menu' />
            <span>Меню</span>
          </button>
        </div>
      </div>
      <Sidebar refp={refSB} showSB={showSB} onClose={() => setShowSB(false)} />
    </div>
  );
}

export default Mobile;
