import classNames from 'classnames';
import styles from './ProfileMenu.module.css';
import profileImage from '../../assets/svg/user.svg';
import shoppingCartImage from '../../assets/svg/shopping-cart.svg';
import rowImage from '../../assets/svg/chevron-down.svg';
import usePopup from '../../hooks/usePopup';

function ProfileMenu() {
  const [ref, show, setShow] = usePopup();

  return (
    <div className={styles.wrapper}>
      <button ref={ref} className={styles.profile} onClick={() => setShow((v) => !v)}>
        <img src={profileImage} alt='profile' />
        <span>Профиль</span>
        <img
          src={rowImage}
          alt='row'
          className={classNames({
            [styles.down]: !show,
            [styles.up]: show,
          })}
        />
        <div
          className={classNames(styles.profile__popup, {
            [styles.profile__popup_active]: show,
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
      <button className={styles.cart}>
        <img src={shoppingCartImage} alt='basket' />
        <span>Корзина</span>
        <img src={rowImage} alt='row' />
      </button>
    </div>
  );
}

export default ProfileMenu;
