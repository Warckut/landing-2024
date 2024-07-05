import styles from './Middle.module.css';
import logoImage from '../../../assets/svg/logo.svg';
import SearchForm from '../../SearchForm/SearchForm';
import Navigation from '../../Navigation/Navigation';

function Middle(props) {
  const { scroll, ...rest } = props;

  return (
    <div className={styles.middle} style={{ padding: !scroll ? 'var(--spacing-16) 0' : 'var(--spacing-8) 0' }}>
      <div className='container'>
        <a href='/' className={styles.middle__logo}>
          <img src={logoImage} alt='logo' />
        </a>
        {!scroll && <SearchForm {...rest} />}
        {scroll && <Navigation />}
      </div>
    </div>
  );
}

export default Middle;
