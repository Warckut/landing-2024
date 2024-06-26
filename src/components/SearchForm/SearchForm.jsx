import classNames from 'classnames';
import styles from './SearchForm.module.css';
import searchImage from '../../assets/svg/search.svg';
import Select from '../Select/Select';

function SearchForm(props) {
  const { category, categories, onSelected } = props;

  return (
    <form className={styles.search}>
      <img src={searchImage} alt='search' className={styles.search__img} />
      <input type='text' placeholder='Поиск по ...' />
      <Select selected={category} values={categories} onSelected={onSelected} />
      <input type='submit' value='Поиск' className={classNames('btn', 'btn-primary')} />
    </form>
  );
}

export default SearchForm;
