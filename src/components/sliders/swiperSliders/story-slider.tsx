import { FC, useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Parallax, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { mountainSlider } from '../../../utils/data';
import successArrow from '../../../assets/img/successArrow.svg';

SwiperCore.use([ Navigation]);

interface StorySliderProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const StorySlider: FC<StorySliderProps> = ({ handlePrevClick, handleNextClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  }, []);

  return (
    <Swiper
      speed={1200}
      parallax={true}
      grabCursor
      slidesPerView={2}
      slidesPerGroup={1}
      loop
      className="swiper story-swiper"
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      modules={[Parallax, Navigation]}
      centeredSlides
      keyboard={true}
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {mountainSlider.map((el, index) => (
        <SwiperSlide key={el.id}>
          <div className={`slides-space ${index === activeIndex ? "active-slide" : ''}`}>
            <div className='story-mentioned-container'>
              <div>
                <img src={el.image} alt={`Slide ${el.id}`} />
              </div>
              <div className="story-mentioned-content" >
                <h4 className="story-mentioned-title dark title fw-bold" data-swiper-parallax="-1000">{el.title}</h4>
                <p className="story-mentioned-text dark text fw-middle" data-swiper-parallax="-2000">{el.text}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev" onClick={handlePrevClick}>
        <img src={successArrow} alt="prev" />
      </div>
      <div className="swiper-button-next" onClick={handleNextClick}>
        <img src={successArrow} alt="Next" style={{ transform: "scaleX(-1)" }} />
      </div>
    </Swiper>
  );
};

export default StorySlider;