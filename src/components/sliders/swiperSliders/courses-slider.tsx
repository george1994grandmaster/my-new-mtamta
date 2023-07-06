import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import NavigationLink from '../../link';
import { courseSlides } from '../../../utils/data';
import "swiper/css/navigation";
import successArrow from '../../../assets/img/successArrow.svg';


SwiperCore.use([Navigation]);

interface BlogSliderProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const CoursesSlider: FC<BlogSliderProps> = ({ handlePrevClick, handleNextClick }) => {
  return (
    <>
      {courseSlides.map((el, index) => (
        <div style={{marginBottom: "70px"}} key={el.id}>
          <Swiper
            speed={600}
            grabCursor
            className="swiper blog-swiper"
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
          >
            {index % 2 === 0 ? (
              <div>
                <SwiperSlide >
                  <div className="image-text-layout">
                    <div className="text-layout-col">
                      <div className="d-flex ai-center jc-center h-100">
                        <div className='text-content-spacing'>
                          <h2 className="layout-title  title">
                            {el.title}
                          </h2>
                          <p className="layout-text  text text-bottom-space">
                            {el.text}
                          </p>
                          <div className='d-flex ai-end jc-between'>
                            <NavigationLink url={`el/view${el.id}`} text="see more" 
                              bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-layout-col">
                      <img src={el.image} alt="mediaBlog-slide-img" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <form action="">
                    <div className='row'>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                  </form>
                </SwiperSlide>
              </div>
              
            ) : (
              <div>
                <SwiperSlide>
                  <form action="">
                    <div className='row'>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                  </form>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="image-text-layout">
                    <div className="text-layout-col">
                      <div className="d-flex ai-center jc-center h-100">
                        <div className='text-content-spacing'>
                          <h2 className="layout-title  title">
                            {el.title}
                          </h2>
                          <p className="layout-text  text text-bottom-space">
                            {el.text}
                          </p>
                          <div className='d-flex ai-end jc-between'>
                            <NavigationLink url={`el/view${el.id}`} text="see more" 
                              bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-layout-col">
                      <img src={el.image} alt="mediaBlog-slide-img" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            )}
            <div className="swiper-button-prev" onClick={handlePrevClick}>
              <img src={successArrow}  alt="prev"/>
            </div>
            <div className="swiper-button-next" onClick={handleNextClick}>
              <img src={successArrow} style={{ transform: "scaleX(-1)" }} />
            </div>
          </Swiper>
        </div>
      ))}
    </>
  );
};

export default CoursesSlider;