import classNames from 'classnames';
import styles from './Bottom.module.css';
import Navigation from '../../Navigation/Navigation';

function Bottom({ scroll }) {

  return (
    <div
      className={classNames(styles.bottom, {
        hidden: scroll,
      })}
    >
      <div className='container'>
        <Navigation />
      </div>
    </div>
  );
}

export default Bottom;
