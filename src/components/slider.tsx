import React, { FC, useRef } from 'react';
import HomeBannerSlider from './swiperSliders/homeSlider';
import BlogSlider from './swiperSliders/blogSlider';
import StorySlider from './swiperSliders/blogSlider';
import SwiperCore from 'swiper';

interface SliderProps {
  sliderName: string;
}

const Slider: FC<SliderProps> = ({ sliderName }) => {
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

  switch (sliderName) {
    case 'bannerSlider':
      return (
        <HomeBannerSlider handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
      );
    case 'blogSlider':
      return (
        <BlogSlider handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
      );
    case 'StorySlider':
      return (
        <StorySlider handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
      );
    default:
      return (
        <div className="slider-default">
          ssdsdsdsd
        </div>
      );
  }
};

export default Slider;