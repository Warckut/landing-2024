import styles from './Top.module.css';
import SearchForm from '../../SearchForm/SearchForm';
import locationImage from '../../../assets/svg/map-marker.svg';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';

function Top(props) {
  const { scroll, ...rest } = props;

  return (
    <div className={styles.top}>
      <div className='container'>
        <div className={styles.top__region}>
          <img src={locationImage} alt='LocationImage' />
          <span>Москва</span>
        </div>
        {scroll && <SearchForm {...rest} />}
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Top;
