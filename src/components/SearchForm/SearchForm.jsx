import classNames from 'classnames';
import styles from './SearchForm.module.css';
import { ReactComponent as SearchImage } from '../../assets/svg/search.svg';
import Select from '../Select/Select';

function SearchForm(props) {
  const { category, categories, onSelected } = props;

  return (
    <form className={styles.search}>
      <SearchImage className={styles.searchImg} />
      <input className={styles.searchInput} type='text' placeholder='Поиск по ...' />
      <Select selected={category} values={categories} onSelected={onSelected} />
      <input type='submit' value='Поиск' className={classNames(styles.searchBtn, 'btn', 'btn-primary')} />
    </form>
  );
}

export default SearchForm;
