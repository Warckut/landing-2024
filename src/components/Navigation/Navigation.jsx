import styles from './Navigation.module.css';
import usePopup from '../../hooks/usePopup';
import { ReactComponent as MenuImage } from '../../assets/svg/menu.svg';
import Sidebar from '../Sidebar/Sidebar';

function Navigation() {
  const [refSB, showSB, setShowSB] = usePopup();

  return (
    <>
      <ul className={styles.nav}>
        <li
          className={styles.navMenu}
          onClick={(e) => {
            e.stopPropagation();
            setShowSB((v) => !v);
          }}
        >
          <MenuImage className={styles.menuImg}/>
          <span>Меню</span>
        </li>
        <li className={styles.navItem}>
          <a href='#main'>Главная</a>
        </li>
        <li className={styles.navItem}>
          <a href='#about'>О проекте</a>
        </li>
        <li className={styles.navItem}>
          <a href='#articles'>Статьи</a>
        </li>
        <li className={styles.navItem}>
          <a href='/'>Отзывы</a>
        </li>
        <li className={styles.navItem}>
          <a href='/'>Знания</a>
        </li>
        <li className={styles.navItem}>
          <a href='/'>Вопросы</a>
        </li>
        <li className={styles.navItem}>
          <a href='/'>Цены</a>
        </li>
        <li className={styles.navItem}>
          <a href='/'>Оставить заявку</a>
        </li>
        <li className={styles.navItem}>
          <a href='/'>Спонсоры</a>
        </li>
      </ul>
      <Sidebar refp={refSB} showSB={showSB} onClose={() => setShowSB(false)} />
    </>
  );
}

export default Navigation;
