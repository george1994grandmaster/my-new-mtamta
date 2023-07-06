import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import NavigationLink from '../../link';
import { blogMediaSlides } from '../../../utils/data';
import "swiper/css/navigation";
import successArrow from '../../../assets/img/successArrow.svg';


SwiperCore.use([Navigation]);

interface BlogSliderProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const BlogSlider: FC<BlogSliderProps> = ({ handlePrevClick, handleNextClick }) => {
  return (
    <Swiper
      speed={600}
      grabCursor
      className="swiper blog-swiper"
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      loop
      modules={[Navigation]}
    >
      {blogMediaSlides.map((blogMediaSlide) => (
        <SwiperSlide key={blogMediaSlide.id}>
          <div className="image-text-layout">
            <div className="text-layout-col">
              <div className="d-flex ai-center jc-center h-100">
                <div className='text-content-spacing'>
                  <h2 className="layout-title light title">
                    {blogMediaSlide.title}
                  </h2>
                  <p className="layout-text light text text-bottom-space">
                    {blogMediaSlide.text}
                  </p>
                  <div className='d-flex ai-end jc-between'>
                    <NavigationLink url={`blog/view${blogMediaSlide.id}`} text="see more" 
                      bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
                    <span className='text date light'>{blogMediaSlide.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-layout-col">
              <img src={blogMediaSlide.image} alt="mediaBlog-slide-img" />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev" onClick={handlePrevClick}>
        <img src={successArrow}  alt="prev" />
      </div>
      <div className="swiper-button-next" onClick={handleNextClick}>
        <img src={successArrow} style={{ transform: "scaleX(-1)" }} alt="Next" />
      </div>
    </Swiper>
  );
};

export default BlogSlider;