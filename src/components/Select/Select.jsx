import classNames from 'classnames';
import styles from './Select.module.css';
import rowImage from '../../assets/svg/chevron-down-gray.svg';
import usePopup from '../../hooks/usePopup';

function Select(props) {
  const { selected, values, onSelected } = props;
  const [ref, show, setShow] = usePopup();

  return (
    <div ref={ref} className={styles.select}>
      <button
        className={classNames('btn-reset', styles.select__title)}
        onClick={(e) => {
          e.preventDefault();
          setShow((v) => !v);
        }}
      >
        <span>{selected}</span>
        <img
          src={rowImage}
          alt='row'
          className={classNames({
            [styles.down]: !show,
            [styles.up]: show,
          })}
        />
      </button>
      <ul
        className={classNames(styles.select__content, {
          hidden: !show,
        })}
      >
        {values.map((v) => (
          <li
            key={v}
            className={classNames(styles.select__item, {
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
