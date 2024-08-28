import classNames from 'classnames';
import styles from './Select.module.css';
import { ReactComponent as RowImage } from '../../assets/svg/chevron-down-gray.svg';
import usePopup from '../../hooks/usePopup';

function Select({ selected, values, onSelected }) {
  const { ref, show, setShow } = usePopup();

  return (
    <div ref={ref} className={styles.select}>
      <button
        className={classNames('btn-reset', styles.selectTitle)}
        onClick={(e) => {
          e.preventDefault();
          setShow((v) => !v);
        }}
      >
        <span>{selected}</span>
        <RowImage
          className={classNames(styles.titleImg, {
            [styles.up]: show,
          })}
        />
      </button>
      <ul
        className={classNames(styles.selectContent, {
          hidden: !show,
        })}
      >
        {values.map((item) => (
          <li
            key={item}
            className={classNames(styles.contentItem, {
              [styles.active]: item === selected,
            })}
            onClick={() => {
              onSelected(item);
              setShow(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
