import classNames from 'classnames';
import styles from './Sidebar.module.css';
import logoImage from '../../assets/svg/logo.svg';
import searchImage from '../../assets/svg/search.svg';

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
        <div className={styles.sidebar__content}>
          <a href='/' className={styles.sidebar__logo}>
            <img src={logoImage} alt='logo' />
          </a>
          <div className={styles.sidebar__search}>
            <img src={searchImage} alt='search' />
            <input type='text' className={styles.sidebar__search} placeholder='Поиск по ...' />
          </div>
          <ul style={props.style} className={`${styles.nav}`} onClick={onClose}>
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
        </div>
        <button className={classNames(styles.sidebar__closebtn, 'btn-outline')} onClick={onClose}>
          Закрыть меню
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
