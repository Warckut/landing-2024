import classNames from 'classnames';
import styles from './ProfileMenu.module.css';
import { ReactComponent as ProfileImage } from '../../assets/svg/user.svg';
import { ReactComponent as ShoppingCartImage } from '../../assets/svg/shopping-cart.svg';
import rowImage from '../../assets/svg/chevron-down.svg';
import usePopup from '../../hooks/usePopup';

function ProfileMenu() {
  const [ref, show, setShow] = usePopup();

  return (
    <>
      <button ref={ref} className={classNames('btn-reset', styles.profile)} onClick={() => setShow((v) => !v)}>
        <ProfileImage className={styles.profileImg} />
        <span className={styles.profileTitle}>Профиль</span>
        <img
          src={rowImage}
          alt='row'
          className={classNames(styles.row, {
            [styles.up]: show,
          })}
        />
        <div
          className={classNames(styles.profilePopup, {
            [styles.popupActive]: show,
          })}
        >
          <a href='/SignIn' className={classNames('btn btn-primary', styles.popupBtn)}>
            Войти
          </a>
          <a href='/SignUp' className={classNames('btn btn-outline', styles.popupBtn)}>
            Зарегистрироваться
          </a>
        </div>
      </button>
      <button className={classNames('btn-reset', styles.cart)}>
        <ShoppingCartImage className={styles.cartImg} />
        <span className={styles.cartTitle}>Корзина</span>
        <span className={styles.cartCount}>9</span>
        <img src={rowImage} alt='row' className={styles.row} />
      </button>
    </>
  );
}

export default ProfileMenu;
