import classNames from 'classnames';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.loader)}>
        <span>T</span>
      </div>
    </div>
  );
}

export default Loader;
