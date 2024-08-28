import styles from './Navigation.module.css';
import usePopup from '../../hooks/usePopup';
import { ReactComponent as MenuImage } from '../../assets/svg/menu.svg';
import Sidebar from '../Sidebar/Sidebar';
import SECTIONS from '../../const/sections';

function Navigation() {
  const { ref: refSidebar, show: showSidebar, setShow: setShowSidebar } = usePopup();

  return (
    <nav>
      <ul className={styles.nav}>
        <li
          className={styles.navMenu}
          onClick={(e) => {
            e.stopPropagation();
            setShowSidebar((show) => !show);
          }}
        >
          <MenuImage className={styles.menuImg} />
          <span>Меню</span>
        </li>
        {SECTIONS.map(({ href, name }) => (
          <li key={href} className={styles.navItem}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
      <Sidebar refp={refSidebar} showSidebar={showSidebar} onClose={() => setShowSidebar(false)} />
    </nav>
  );
}

export default Navigation;
