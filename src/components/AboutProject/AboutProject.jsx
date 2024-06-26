import styles from './AboutProject.module.css';
import image1 from '../../assets/svg/Frame1.svg';
import image2 from '../../assets/svg/Frame2.svg';
import image3 from '../../assets/svg/Frame3.svg';
import arrow from '../../assets/svg/arrow-right.svg';

function AboutProject() {
  return (
    <div id="about" className={styles.about}>
      <div className={'container'}>
        <div className={styles.about__main}>
          <h2>О проекте</h2>
          <p>
            Наш проект создан группой врачей для популяризации современных медицинских знаний их доступности для всех,
            кто в этом заинтересован.
          </p>
        </div>
        <div className={styles.about__advgs}>
          <div className={styles.about__advg}>
            <img src={image1} alt='Консультация' />
            <h5>Консультация</h5>
            <p>На нашем форуме вы найдете ответы на вопросы</p>
            <a className={'btn'} href='/'>
              <span>Узнать больше</span>
              <img src={arrow} alt='перейти' />
            </a>
          </div>
          <div className={styles.about__advg}>
            <img src={image2} alt='Тесты' />
            <h5>Тесты</h5>
            <p>Вы можете пройти тесты на нашем сайте</p>
            <a className={'btn'} href='/'>
              <span>Узнать больше</span>
              <img src={arrow} alt='перейти' />
            </a>
          </div>
          <div className={styles.about__advg}>
            <img src={image3} alt='Поиск клиники' />
            <h5>Поиск клиники</h5>
            <p>Мы поможем найти Вам ближайшую поликлинику</p>
            <a className={'btn'} href='/'>
              <span>Узнать больше</span>
              <img src={arrow} alt='перейти' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
