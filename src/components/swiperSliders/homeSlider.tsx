import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { homeSliderBannerimages } from '../../utils/data';
import "swiper/css/navigation";
import bannerArrowSvg from '../../assets/img/bannerArrow.svg';

SwiperCore.use([EffectFade, Navigation]);

interface HomeBannerSliderProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const HomeBannerSlider: FC<HomeBannerSliderProps> = ({ handlePrevClick, handleNextClick }) => {
  return (
    <Swiper
      effect="fade"
      className="swiper home-swiper"
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      loop
      modules={[Navigation]}
    >
      {homeSliderBannerimages.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img src={banner.image} alt={`Slide ${banner.id}`} />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev" onClick={handlePrevClick}>
        <img src={bannerArrowSvg} style={{ transform: "scaleX(-1)" }} alt="prev" />
      </div>
      <div className="swiper-button-next" onClick={handleNextClick}>
        <img src={bannerArrowSvg} alt="Next" />
      </div>
    </Swiper>
  );
};

export default HomeBannerSlider;