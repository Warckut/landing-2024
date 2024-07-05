import classNames from 'classnames';
import styles from './AboutProject.module.css';
import pillsImage from '../../assets/svg/pills.svg';
import padImage from '../../assets/svg/pad.svg';
import caseImage from '../../assets/svg/case.svg';
import arrow from '../../assets/svg/arrow-right.svg';

function AboutProject() {
  return (
    <div id='about' className={styles.about}>
      <div className='container'>
        <div className={styles.aboutMain}>
          <h2 className={styles.mainHeading}>О проекте</h2>
          <p className={styles.mainParagraph}>
            Наш проект создан группой врачей для популяризации современных медицинских знаний их доступности для всех,
            кто в этом заинтересован.
          </p>
        </div>
        <div className={styles.aboutList}>
          <div className={styles.listItem}>
            <div>
              <img className={styles.itemImg} src={pillsImage} alt='Консультация' />
              <h5 className={styles.itemHeading}>Консультация</h5>
              <p className={styles.itemParagraph}>На нашем форуме вы найдете ответы на вопросы</p>
            </div>
            <a className={classNames('btn', styles.itemHref)} href='/'>
              <span>Узнать больше</span>
              <img className={styles.hrefImg} src={arrow} alt='перейти' />
            </a>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.itemImg} src={padImage} alt='Тесты' />
              <h5 className={styles.itemHeading}>Тесты</h5>
              <p className={styles.itemParagraph}>Вы можете пройти тесты на нашем сайте</p>
            </div>
            <a className={classNames('btn', styles.itemHref)} href='/'>
              <span>Узнать больше</span>
              <img className={styles.hrefImg} src={arrow} alt='перейти' />
            </a>
          </div>
          <div className={styles.listItem}>
            <div>
              <img className={styles.itemImg} src={caseImage} alt='Поиск клиники' />
              <h5 className={styles.itemHeading}>Поиск клиники</h5>
              <p className={styles.itemParagraph}>Мы поможем найти Вам ближайшую поликлинику</p>
            </div>
            <a className={classNames('btn', styles.itemHref)} href='/'>
              <span>Узнать больше</span>
              <img className={styles.hrefImg} src={arrow} alt='перейти' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
