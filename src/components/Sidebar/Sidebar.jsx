import classNames from 'classnames';
import styles from './Sidebar.module.css';
import { ReactComponent as LogoImage } from '../../assets/svg/logo.svg';
import { ReactComponent as SearchImage } from '../../assets/svg/search.svg';

function Sidebar(props) {
  const { showSB, onClose, refp } = props;
  return (
    <div
      className={classNames(styles.overlay, {
        [styles.overlay_show]: showSB,
      })}
    >
      <aside
        ref={refp}
        className={classNames(styles.sidebar, {
          [styles.sidebar_show]: showSB,
        })}
      >
        <div className={styles.sidebarContent}>
          <a href='/' className={styles.sidebarLogo}>
            <LogoImage />
          </a>
          <div className={styles.sidebarSearch}>
            <SearchImage className={styles.searchImg} />
            <input type='text' className={styles.searchInput} placeholder='Поиск по ...' />
          </div>
          <ul style={props.style} className={styles.nav} onClick={onClose}>
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
        </div>
        <button className={classNames(styles.sidebarClosebtn, 'btn-outline')} onClick={onClose}>
          Закрыть меню
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
