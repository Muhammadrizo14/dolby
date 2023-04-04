import Link from '../../common/Links/Links';
import style from './style.module.scss'
import arrowLeft from '../../assets/img/SlideLeft.png'
import arrowRight from '../../assets/img/SlideRight.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import RecentCard from './RecentCard/RecentCard';


import f from '../../assets/img/Recent Card/1.png'
import s from '../../assets/img/Recent Card/2.png'
import t from '../../assets/img/Recent Card/3.png'

function Recent() {
  return (
    <div className={`${style.recent} container`}>
      <div className={style.recent__header}>
        <h1 className={style.recent__header__title}>Recent Activity</h1>
        <div className={style.recent__header__options}>
          <Link suptitle='Browse More' />
          <div className={style.recent__header__options__arrows}>
            <img src={arrowLeft} className="recent-card-prev" alt="" />
            <img src={arrowRight} className="recent-card-next" alt="" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={31}
        className="mySwiper"
        navigation={{
          nextEl: ".recent-card-next",
          prevEl: ".recent-card-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          300: {
            slidesPerView: 0,
          },
          926: {
            slidesPerView: 2,
          },
          1408: {
            slidesPerView: 3,
          }
        }}
      >
        <SwiperSlide>
          <RecentCard image={f} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <RecentCard image={s} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <RecentCard image={t} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <RecentCard image={f} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <RecentCard image={s} price={1123} />
        </SwiperSlide>
        <SwiperSlide>
          <RecentCard image={t} price={1123} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Recent;