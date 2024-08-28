import classNames from 'classnames';
import styles from './Sidebar.module.css';
import { ReactComponent as LogoImage } from '../../assets/svg/logo.svg';
import { ReactComponent as SearchImage } from '../../assets/svg/search.svg';
import SECTIONS from '../../const/sections';

function Sidebar({ showSidebar, onClose, refp }) {
  return (
    <div
      className={classNames(styles.overlay, {
        [styles.overlay_show]: showSidebar,
      })}
    >
      <aside
        ref={refp}
        className={classNames(styles.sidebar, {
          [styles.sidebar_show]: showSidebar,
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
          <ul className={styles.nav} onClick={onClose}>
            {SECTIONS.map(({ name, href }) => (
              <li key={href} className={styles.navItem}>
                <a href={href}>{name}</a>
              </li>
            ))}
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
