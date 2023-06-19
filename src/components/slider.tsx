import  { FC } from 'react';
import HomeBannerSlider from './swiperSliders/homeSlider';

interface SliderProps {
  sliderName: string;
}

const Slider: FC<SliderProps> = ({ sliderName }) => {
  switch (sliderName) {
    case 'bannerSlider':
      return (
        <HomeBannerSlider/>
      );
    case 'slider2':
      return (
        <div className="slider2">
         dfdfddfd
        </div>
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