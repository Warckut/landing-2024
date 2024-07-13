import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import 'swiper/css';
import { useState } from 'react';

function Slider() {
  const [swiper, setSwiper] = useState();

  function handlePrevious() {
    swiper?.slidePrev();
  }

  function handleNext() {
    swiper?.slideNext();
  }

  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={setSwiper}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          820: {
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: false,
          },
        }}>
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.logo}>
              <div className={styles.logoZommer} />
              <p className={`${styles.logoText} heading-4`}>Zoomerr</p>
            </div>
            <p className={`${styles.text} body-l`}>
              <a
                className={styles.link}
                target='_blank'
                rel='noreferrer'
                href='https://medspecial.ru/wiki/%D0%98%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/'>
                Исследование
              </a>{' '}
              гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня
              интеллекта у молодых взрослых людей.
            </p>
            <div className={styles.author}>
              <div className={styles.authorImageSkeleton} />
              <p className={`${styles.authorText} heading-4`}>Петров Петр</p>
              <p className={`${styles.authorText} body-l`}>Невролог</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.logo}>
              <div className={styles.logoArtVenue} />
              <p className={`${styles.logoText} heading-4`}>ArtVenue</p>
            </div>
            <div className={`${styles.text} body-l`}>
              Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание,
              одышку и чувство стеснения в груди.
            </div>
            <div className={styles.author}>
              <div className={styles.authorImageSkeleton} />
              <p className={`${styles.authorText} heading-4`}>Кириллов Кирилл</p>
              <p className={`${styles.authorText} body-l`}>Пульмонолог</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.logo}>
              <div className={styles.logoZommer} />
              <p className={`${styles.logoText} heading-4`}>Lorem</p>
            </div>
            <p className={`${styles.text} body-l`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia eveniet cupiditate repellat
              doloribus voluptatibus inventore officia non voluptatum repellendus sapiente error.
            </p>
            <div className={styles.author}>
              <div className={styles.authorImageSkeleton} />
              <p className={`${styles.authorText} heading-4`}>Lorem ipsum</p>
              <p className={`${styles.authorText} body-l`}>dolor</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <div className={styles.logo}>
              <div className={styles.logoArtVenue} />
              <p className={`${styles.logoText} heading-4`}>Ipsum</p>
            </div>
            <div className={`${styles.text} body-l`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia eveniet cupiditate repellat
              doloribus voluptatibus inventore officia non voluptatum repellendus sapiente error.
            </div>
            <div className={styles.author}>
              <div className={styles.authorImageSkeleton} />
              <p className={`${styles.authorText} heading-4`}>Lorem ipsum</p>
              <p className={`${styles.authorText} body-l`}>dolor</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        className={`${styles.sliderButton} ${styles.sliderButtonNext}`}
        type='button'
        aria-label='next slide button'
        onClick={handleNext}
      />
      <button
        className={`${styles.sliderButton} ${styles.sliderButtonPrev}`}
        type='button'
        aria-label='previous slide button'
        onClick={handlePrevious}
      />
    </div>
  );
}

export default Slider;
