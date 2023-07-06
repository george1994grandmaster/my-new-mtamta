import { FC, useRef } from 'react';
import HomeBannerSlider from './swiperSliders/home-slider';
import BlogSlider from './swiperSliders/blog-slider';
import StorySlider from './swiperSliders/story-slider';
import CoursesSlider from './swiperSliders/courses-slider';
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
    case 'coursesSlider':
      return (
        <CoursesSlider handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
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