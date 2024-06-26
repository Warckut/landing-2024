import AboutProject from '../../components/AboutProject/AboutProject';
import Articles from '../../components/Articles/Articles';
import Main from '../../components/Main/Main';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';

function Home() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('Все категории');
  const categories = [
    'Все категории',
    'Тонометры',
    'Дерматология',
    'Инфекционные болезни',
    'Кардиология',
    'Неврология',
    'Общая медицина',
    'Терапия',
    'Хирургия',
  ];

  const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;

  useEffect(() => {
    let lastScroll = scrollPos();
    window.onscroll = function () {
      if (scrollPos() < 150) {
        setShow(false);
      } else if (scrollPos() > lastScroll && show) {
        setShow(false);
      } else if (scrollPos() < lastScroll && !show) {
        setShow(true);
      }
      lastScroll = scrollPos();
    };
  });

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
