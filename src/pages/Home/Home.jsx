import { useState, useEffect } from 'react';
import AboutProject from '../../components/AboutProject/AboutProject';
import Articles from '../../components/Articles/Articles';
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import { CATEGORIES } from './constants';

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;

function Home() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('Все категории');
  const [lastScroll, setLastScroll] = useState(scrollPos());
  const categories = CATEGORIES;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = scrollPos();
      if (currentScrollPos < 150) setShow(false);
      else if (currentScrollPos > lastScroll && show) setShow(false);
      else if (currentScrollPos < lastScroll && !show) setShow(true);
      
      setLastScroll(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show, lastScroll]);

  return (
    <>
      <Header
        show={show}
        scroll={true}
        categories={categories}
        category={category}
        onSelected={(v) => setCategory(v)}
      />
      <Header
        show={true}
        scroll={false}
        categories={categories}
        category={category}
        onSelected={(v) => setCategory(v)}
      />
      <Main />
      <AboutProject />
      <Articles />
    </>
  );
}

export default Home;
