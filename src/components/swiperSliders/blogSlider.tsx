import { FC } from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { blogMediaSlides } from '../../utils/data';
import "swiper/css/navigation";
import transparentArrowSvg from '../../assets/img/transparentArrow.svg';


SwiperCore.use([Navigation]);

const BlogSlider: FC = () => {
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
      speed={600}
      className="swiper blogSwiper"
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
      {blogMediaSlides.map((blogMediaSlide) => (
        <SwiperSlide key={blogMediaSlide.id}>
					<div className="image-text-layout">
						<div className="text-layout-col">
							<div className="d-flex ai-center jc-center h-100">
								<div className='text-content-spacing'>
									<h2 className="layout-title title" data-swiper-parallax="-2000">
										{blogMediaSlide.title}
									</h2>
									<p className="layout-text text" data-swiper-parallax="-2000">
										{blogMediaSlide.text}
									</p>
								</div>
							</div>
						</div>
						<div className="image-layout-col">
							<img src={blogMediaSlide.image} alt="mediaBlog-slide-img" />
						</div>
					</div>
        </SwiperSlide>
      ))}
      <div ref={prevRef} className="swiper-button-prev" onClick={handlePrevClick}> 
        <img src={transparentArrowSvg} style={{ transform: "scaleX(-1)" }} alt="prev" />
      </div> 
      <div ref={nextRef} className="swiper-button-next" onClick={handleNextClick}> 
        <img src={transparentArrowSvg}  alt="Next"/>
      </div> 
    </Swiper>
  );
};

export default BlogSlider;