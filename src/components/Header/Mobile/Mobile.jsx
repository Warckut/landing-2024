import classNames from 'classnames';
import usePopup from '../../../hooks/usePopup';
import styles from './Mobile.module.css';
import { ReactComponent as LogoImage } from '../../../assets/svg/logo.svg';
import { ReactComponent as MenuImage } from '../../../assets/svg/menu.svg';
import Sidebar from '../../Sidebar/Sidebar';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';

function Mobile() {
  const { ref: refSidebar, show: showSidebar, setShow: setShowSidebar } = usePopup();

  return (
    <div className={styles.mobile}>
      <div className={'container'}>
        <a className={styles.mobileLogo} href='/'>
          <LogoImage className={styles.logoImg} />
        </a>
        <div className={styles.mobileBtngroup}>
          <ProfileMenu />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSidebar((state) => !state);
            }}
            className={classNames('btn-reset', styles.mobileMenu)}
          >
            <MenuImage className={styles.menuImg} />
            <span>Меню</span>
          </button>
        </div>
      </div>
      <Sidebar refp={refSidebar} showSidebar={showSidebar} onClose={() => setShowSidebar(false)} />
    </div>
  );
}

export default Mobile;
