import classNames from 'classnames';
import styles from './Main.module.css';
import image from '../../assets/img/block-1-img-1.png';

function Main() {
  return (
    <div id='main' className={styles.main}>
      <div className={'container'}>
        <div className={styles.main__item}>
          <h1>ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</h1>
          <p>
            Мы еще очень молоды, но достаточно амбициозны и планируем каждого случайного гостя нашего сайта превратить в
            его постоянного пользователя.
          </p>
          <div className={styles.main__btns}>
            <button className={classNames('btn', 'btn-primary')}>Войти как врач</button>
            <button className={classNames('btn', 'btn-outline')}>Подробнее</button>
          </div>
        </div>
        <div className={styles.main__item}>
          <img src={image} alt='изображение' />
        </div>
      </div>
    </div>
  );
}

export default Main;
