import styles from './Top.module.css';
import SearchForm from '../../SearchForm/SearchForm';
import { ReactComponent as LocationImage } from '../../../assets/svg/map-marker.svg';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';

function Top(props) {
  const { scroll, ...rest } = props;

  return (
    <div className={styles.top}>
      <div className='container'>
        <div className={styles.topRegion}>
          <LocationImage />
          <span className={styles.regionName}>Москва</span>
        </div>
        {scroll && <SearchForm {...rest} />}
        <div className={styles.topMenu}>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default Top;
