import styles from './Articles.module.css';
import article1Image from '../../assets/img/article1.png';
import article2Image from '../../assets/img/article2.png';
import article3Image from '../../assets/img/article3.png';
import arrow from '../../assets/svg/arrow-right.svg';
import Loader from '../Loader/Loader';

function Articles() {
  return (
    <div id="articles" className={styles.articles}>
      <div className='container'>
        <caption>СТАТЬИ</caption>
        <h2>
          Статьи для врачей, пациентов и их родственников, а также научно-популярные доклады о прорывах в медицине
        </h2>
        <div className={styles.articles__list}>
          <div className={styles.articles__item}>
            <img className={styles.articles__image} src={article1Image} alt='' />
            <div className={styles.articles__content}>
              <h5>Головная боль</h5>
              <p>Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы ...</p>
            </div>
            <a href='/' className={`btn ${styles.articles__detail}`}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' />
            </a>
          </div>
          <div className={styles.articles__item}>
            <div className={styles.articles__image}>
              <Loader />
            </div>
            <div className={styles.articles__content}>
              <h5>Мигрень</h5>
              <p>Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика</p>
            </div>
            <a href='/' className={`btn ${styles.articles__detail}`}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' />
            </a>
          </div>
          <div className={styles.articles__item}>
            <img src={article2Image} alt='' className={styles.articles__image} />
            <div className={styles.articles__content}>
              <h5>Доказательная медицина</h5>
              <p>Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться...</p>
            </div>
            <a href='/' className={`btn ${styles.articles__detail}`}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' />
            </a>
          </div>
          <div className={styles.articles__item}>
            <img src={article3Image} alt='' className={styles.articles__image} />
            <div className={styles.articles__content}>
              <h5>Антидепрессанты</h5>
              <p>Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив...</p>
            </div>
            <a href='/' className={`btn ${styles.articles__detail}`}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' />
            </a>
          </div>
        </div>
        <button className='btn btn-primary'>Все статьи</button>
      </div>
    </div>
  );
}

export default Articles;
