import { FC, useRef } from "react";
import { Link } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import { galleryItems } from "../utils/data";
import { VectorRight } from "../assets/svg-format-components";

const Gallery: FC = () => {

  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollUp = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
 
  return (
    <div className="dark-wrapper">
      <div className="container">
        <div className="gallery" ref={galleryRef}>
          <LightGallery
            plugins={[lgZoom]}
            speed={500}
          >
            <>
              {galleryItems.map((el, index) => (
                <Link to={el.image} key={index} className="gallery-item">
                  <img src={el.image} alt="gallery-img" />
                </Link>
              ))}
            </>
          </LightGallery>
        </div>
        <button onClick={scrollUp} className="gallery-scroll-btn">
          <span className="title fw-bold light">scroll up</span>
          <div className="galery-scroll-icon">
            <VectorRight/>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Gallery;