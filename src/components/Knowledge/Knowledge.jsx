import Dashboard from '../Dashboard';
import styles from './Knowledge.module.css';
import smileIcon from '../../assets/svg/smile.svg';
import docsIcon from '../../assets/svg/docs.svg';
import peopleIcon from '../../assets/svg/people.svg';
import pizzaIcon from '../../assets/svg/pizza.svg';

function Knowledge() {
  return (
    <section id='knowledge'>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={`${styles.knowledgeCaption} caption`}>ЗНАНИЯ</p>
            <h2 className={styles.knowledgeTitle}>
              Информацию по отдельным заболеваниям ориентированную на пациентов можно найти в соответствующем разделе
              сайта, статьи разделены на категории.
            </h2>
          </div>
          <div className={styles.nav}>
            <a href='#' className={`${styles.link} ${styles.linkVariantContained}`}>
              Для врачей
            </a>
            <a href='#' className={`${styles.link} ${styles.linkVariantOutlined}`}>
              Для пациентов
            </a>
          </div>
          <div className={styles.stats}>
            <Dashboard />
            <div className={styles.content}>
              <div className={styles.statsCard}>
                <div className={styles.cardIcon}>
                  <img src={smileIcon} alt='smile icon' />
                </div>
                <div className={styles.cardText}>
                  <p className={`${styles.cardTitle} heading-4`}>250+</p>
                  <p className={styles.cardCaption}>Научных статей</p>
                </div>
              </div>
              <div className={styles.statsCard}>
                <div className={styles.cardIcon}>
                  <img src={docsIcon} alt='docs icon' />
                </div>
                <div className={styles.cardText}>
                  <p className={`${styles.cardTitle} heading-4`}>600+</p>
                  <p className={styles.cardCaption}>Просмотров за статью</p>
                </div>
              </div>
              <div className={styles.statsCard}>
                <div className={styles.cardIcon}>
                  <img src={pizzaIcon} alt='pizza icon' />
                </div>
                <div className={styles.cardText}>
                  <p className={`${styles.cardTitle} heading-4`}>1.8K+</p>
                  <p className={styles.cardCaption}>Посетителей в день</p>
                </div>
              </div>
              <div className={styles.statsCard}>
                <div className={styles.cardIcon}>
                  <img src={peopleIcon} alt='people icon' />
                </div>
                <div className={styles.cardText}>
                  <p className={`${styles.cardTitle} heading-4`}>11K+</p>
                  <p className={styles.cardCaption}>Посетителей в неделю</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
