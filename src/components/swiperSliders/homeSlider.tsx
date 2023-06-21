import { FC } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { homeSliderBannerimages } from '../../utils/data';
import "swiper/css/navigation";
import bannerArrowSvg from '../../assets/img/bannerArrow.svg';


SwiperCore.use([EffectFade, Navigation]);

const HomeBannerSlider:FC = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Swiper
      effect="fade"
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current
      }}
      className="swiper"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        if (swiper.navigation) {
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }}
      loop
      modules={[Navigation]}
    >
      {homeSliderBannerimages.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img src={banner.src} alt={`Slide ${banner.id}`} />
        </SwiperSlide>
      ))}
      <div ref={prevRef} className="swiper-button-prev" onClick={handlePrevClick}> 
        <img src={bannerArrowSvg} style={{ transform: "scaleX(-1)" }} alt="prev"  />
      </div> 
      <div ref={nextRef} className="swiper-button-next" onClick={handleNextClick}> 
        <img src={bannerArrowSvg}  alt="Next"  />
      </div> 
    </Swiper>
  );
};

export default HomeBannerSlider;