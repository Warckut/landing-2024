import classNames from 'classnames';
import styles from './Articles.module.css';
import headacheImage from '../../assets/img/headache.png';
import migraineImage from '../../assets/img/migraine.png';
import antidepressantsImage from '../../assets/img/antidepressants.png';
import arrow from '../../assets/svg/arrow-right.svg';
import Loader from '../Loader/Loader';

function Articles() {
  return (
    <div id='articles' className={styles.articles}>
      <div className='container'>
        <caption className={styles.articlesCaption}>СТАТЬИ</caption>
        <h2 className={styles.articlesHeading}>
          Статьи для врачей, пациентов и их родственников, а также научно-популярные доклады о прорывах в медицине
        </h2>
        <div className={styles.articlesList}>
          <div className={styles.listItem}>
            <img className={styles.itemImg} src={headacheImage} alt='' />
            <div className={styles.itemContent}>
              <h5 className={styles.contentHeading}>Головная боль</h5>
              <p className={styles.contentParagraph}>
                Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы
              </p>
            </div>
            <a href='/' className={classNames('btn', styles.itemDetail)}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' className={styles.detailImg} />
            </a>
          </div>
          <div className={styles.listItem}>
            <div className={styles.itemImg}>
              <Loader />
            </div>
            <div className={styles.itemContent}>
              <h5 className={styles.contentHeading}>Мигрень</h5>
              <p className={styles.contentParagraph}>
                Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика sdfsdfsdfsdfsdfsfsdf
              </p>
            </div>
            <a href='/' className={classNames('btn', styles.itemDetail)}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' className={styles.detailImg} />
            </a>
          </div>
          <div className={styles.listItem}>
            <img src={migraineImage} alt='' className={styles.itemImg} />
            <div className={styles.itemContent}>
              <h5 className={styles.contentHeading}>Доказательная медицина</h5>
              <p className={styles.contentParagraph}>
                Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться dsfsdfdsfsdfsdfsd
              </p>
            </div>
            <a href='/' className={classNames('btn', styles.itemDetail)}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' className={styles.detailImg} />
            </a>
          </div>
          <div className={styles.listItem}>
            <img src={antidepressantsImage} alt='' className={styles.itemImg} />
            <div className={styles.itemContent}>
              <h5 className={styles.contentHeading}>Антидепрессанты</h5>
              <p className={styles.contentParagraph}>
                Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив sdfsdfsdfsdfsdfsdfsd
              </p>
            </div>
            <a href='/' className={classNames('btn', styles.itemDetail)}>
              <span>Подробнее</span>
              <img src={arrow} alt='подробнее' className={styles.detailImg} />
            </a>
          </div>
        </div>
        <button className={classNames('btn btn-primary', styles.articlesBtn)}>Все статьи</button>
      </div>
    </div>
  );
}

export default Articles;
