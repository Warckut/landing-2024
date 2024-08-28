import classNames from 'classnames';
import styles from './Middle.module.css';
import { ReactComponent as LogoImage } from '../../../assets/svg/logo.svg';
import SearchForm from '../../SearchForm/SearchForm';
import Navigation from '../../Navigation/Navigation';

function Middle({ scroll, ...rest }) {

  return (
    <div
      className={classNames(styles.middle, {
        [styles.scrollMiddle]: scroll,
      })}
    >
      <div className='container'>
        <a href='/' className={styles.middleLogo}>
          <LogoImage />
        </a>
        {!scroll && <SearchForm {...rest} />}
        {scroll && <Navigation />}
      </div>
    </div>
  );
}

export default Middle;
