import  { FC } from 'react';
import HomeBannerSlider from './swiperSliders/homeSlider';
import BlogSlider from './swiperSliders/blogSlider';

interface SliderProps {
  sliderName: string;
}

const Slider: FC<SliderProps> = ({ sliderName }) => {
  switch (sliderName) {
    case 'bannerSlider':
      return (
        <HomeBannerSlider/>
      );
      case 'blogSlider':
        return (
          <BlogSlider/>
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