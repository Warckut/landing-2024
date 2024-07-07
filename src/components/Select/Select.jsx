import classNames from 'classnames';
import styles from './Select.module.css';
import { ReactComponent as RowImage } from '../../assets/svg/chevron-down-gray.svg';
import usePopup from '../../hooks/usePopup';

function Select(props) {
  const { selected, values, onSelected } = props;
  const [ref, show, setShow] = usePopup();

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
        {values.map((v) => (
          <li
            key={v}
            className={classNames(styles.contentItem, {
              [styles.active]: v === selected,
            })}
            onClick={() => {
              onSelected(v);
              setShow(false);
            }}
          >
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
