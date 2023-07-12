import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, SwiperOptions, EffectCreative, Parallax } from 'swiper';
import 'swiper/swiper-bundle.min.css';
//import NavigationLink from '../../link';
import { courseSlides } from '../../../utils/data';
import "swiper/css/navigation";
import lightStar from '../../../assets/img/lightStar.svg';
import Form from "../../forms/form";
import { VectorLeft, VectorRight } from "../../../assets/svg-format-components"


SwiperCore.use([Navigation]);

interface BlogSliderProps {
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const CoursesSlider: FC<BlogSliderProps> = ({ handlePrevClick, handleNextClick }) => {
  const swiperOptions: SwiperOptions = {
    simulateTouch: false
  };
  return (
    <>
      {courseSlides.map((el, index) => (
        <Swiper key={index}
          effect={'creative'}
          parallax={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [180, 0, 0],
            },
            next: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [-180, 0, 0],
            },
          }}
          speed={400}
          grabCursor
          className="swiper certificate-swiper"
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Navigation, EffectCreative, Parallax]}
          {...swiperOptions}
          initialSlide={index % 2 === 0 ? 0 : 1}
        >
          {index % 2 === 0 ? (
            <div>
              <SwiperSlide>
                <div className="image-text-layout">
                  <div className="image-layout-col">
                    <img src={el.image} alt="mediaBlog-slide-img" />
                  </div>
                  <div className="text-layout-col bg-light">
                    <div className="d-flex ai-center jc-center h-100">
                      <div className='text-content-spacing'>
                        <h2 className="layout-title dark title fw-bold">
                          {el.title}
                        </h2>
                        <p className="layout-text dark text fw-middle">
                          {el.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="register-form-wrapper overall-form-wrapper">
                  <div className="info-border-form">
                    <div className="register-form-content bg-light">
                      <div className="left-middle-star p-absolute">
                        <img src={lightStar} alt="star-img"/>
                      </div>
                      <div className="right-bottom-star p-absolute">
                        <img src={lightStar} alt="star-img"/>
                      </div>
                      <div className="right-top-star p-absolute">
                        <img src={lightStar} alt="star-img"/>
                      </div>
                      <h3 className="register-form-title dark">Register & Apply</h3>
                      <Form formType="registerForm" /> 
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            ) : (
            <div>
              <SwiperSlide>
                <div className="register-form-wrapper overall-form-wrapper">
                  <div className="info-border-form">
                    <div className="register-form-content bg-light">
                      <div className="left-middle-star p-absolute">
                        <img src={lightStar} alt="star-img"/>
                      </div>
                      <div className="right-bottom-star p-absolute">
                        <img src={lightStar} alt="star-img"/>
                      </div>
                      <div className="right-top-star p-absolute">
                        <img src={lightStar} alt="star-img"/>
                      </div>
                      <h3 className="register-form-title dark">Register & Apply</h3>
                      <Form formType="registerForm" /> 
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image-text-layout">
                  <div className="text-layout-col bg-bright">
                    <div className="d-flex ai-center jc-center h-100">
                      <div className='text-content-spacing'>
                        <h2 className="layout-title light title fw-bold">
                          {el.title}
                        </h2>
                        <p className="layout-text light text fw-middle">
                          {el.text}
                        </p>
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
          <div className="swiper-button-next" onClick={handleNextClick}>
            {index % 2 === 0 ? (
              <>
                <p>Go To Register</p>
                <VectorLeft/>
              </>
              ) : (
              <>
                <p>Back To Info</p>
                <VectorLeft/>
              </>
              )}  
          </div>
          <div  className="swiper-button-prev" onClick={handlePrevClick}>
            {index % 2 === 0 ? (
              <>
               <p>Back To Info</p>
                <VectorRight/>
              </>
              ) : (
              <>
                <p>Go To Register</p>
                <VectorRight/>
              </>
            )}  
          </div>
        </Swiper>
      ))}
    </>
  );
};

export default CoursesSlider;