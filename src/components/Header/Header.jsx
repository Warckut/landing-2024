import classNames from 'classnames';
import styles from './Header.module.css';
import Top from './Top/Top';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import Mobile from './Mobile/Mobile';

function Header(props) {
  const { scroll, show, category, categories, onSelected } = props;

  return (
    <header
      className={classNames({
        [styles.header_scroll]: scroll,
        [styles.header]: !scroll,
        [styles.header_show]: show,
      })}
    >
      <Top scroll={scroll} categories={categories} category={category} onSelected={onSelected} />
      <Middle scroll={scroll} categories={categories} category={category} onSelected={onSelected} />
      <Bottom scroll={scroll} />
      <Mobile />
    </header>
  );
}

export default Header;
