import Link from '../../common/Links/Links';
import styles from './style.module.scss'
import arrowLeft from '../../assets/img/SlideLeft.png'
import arrowRight from '../../assets/img/SlideRight.png'
import FeaturesCard from './FeaturesCard/FeaturesCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import f from '../../assets/img/Fetures Card/1.png'
import s from '../../assets/img/Fetures Card/2.png'
import t from '../../assets/img/Fetures Card/3.png'
import c from '../../assets/img/Fetures Card/4.png'



function Features() {
  return (
    <div className={`${styles.features} container`}>
      <h1 className={styles.features__title}>Features Artworks</h1>
      <div className={styles.features__options}>
        <Link suptitle='Browse More' />
        <div className={styles.features__options__arrows}>
          <img src={arrowLeft} className="image-swiper-button-prev" alt="" />
          <img src={arrowRight} className="image-swiper-button-next" alt="" />
        </div>
      </div>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        className="mySwiper"
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4.5
          }
        }}
      >
        <SwiperSlide>
          <FeaturesCard image={f} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={s} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={t} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={c} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={f} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={s} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={t} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturesCard image={c} price={1123} />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}

export default Features;