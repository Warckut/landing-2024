import Slider from '../Slider';
import styles from './Reviews.module.css';

function Reviews() {
  return (
    <section id='reviews' className={styles.reviews} aria-label='reviews section'>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
