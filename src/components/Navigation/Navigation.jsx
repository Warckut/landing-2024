import styles from './Navigation.module.css';
import usePopup from '../../hooks/usePopup';
import menuImage from '../../assets/svg/menu.svg';
import Sidebar from '../Sidebar/Sidebar';

function Navigation(props) {
  const [refSB, showSB, setShowSB] = usePopup();

  return (
    <>
      <ul style={props.style} className={styles.nav}>
        <li
          className={styles.nav__menu}
          onClick={(e) => {
            e.stopPropagation();
            setShowSB((v) => !v);
          }}
        >
          <img src={menuImage} alt='menu' />
          <span>Меню</span>
        </li>
        <li className={styles.nav__item}>
          <a href='#main'>Главная</a>
        </li>
        <li className={styles.nav__item}>
          <a href='#about'>О проекте</a>
        </li>
        <li className={styles.nav__item}>
          <a href='#articles'>Статьи</a>
        </li>
        <li className={styles.nav__item}>
          <a href='/'>Отзывы</a>
        </li>
        <li className={styles.nav__item}>
          <a href='/'>Знания</a>
        </li>
        <li className={styles.nav__item}>
          <a href='/'>Вопросы</a>
        </li>
        <li className={styles.nav__item}>
          <a href='/'>Цены</a>
        </li>
        <li className={styles.nav__item}>
          <a href='/'>Оставить заявку</a>
        </li>
        <li className={styles.nav__item}>
          <a href='/'>Спонсоры</a>
        </li>
      </ul>
      <Sidebar refp={refSB} showSB={showSB} onClose={() => setShowSB(false)} />
    </>
  );
}

export default Navigation;
