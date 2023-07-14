import { FC, useRef, useEffect, useState } from "react";
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.png";
import blog3 from "../assets/img/blog3.png";

const Gallery: FC = () => {
  const galleryRef = useRef<any>(null);
  const [allowInteraction, setAllowInteraction] = useState(false);

  
  return (
    <div className="Gallery">
      <LightGallery
        //ref={galleryRef}
        plugins={[lgZoom]}
        speed={500}
        startClass="custom-start-class"
      >
        <a href={blog1} className="custom-start-class">
          <img src={blog1} alt="Image 1" loading="lazy" />
        </a>
        <a href={blog2} className="custom-start-class">
          <img src={blog2} alt="Image 2" loading="lazy" />
        </a>
        <a href={blog3} className="custom-start-class">
          <img src={blog3} alt="Image 3" loading="lazy" />
        </a>
      </LightGallery>
    </div>
  );
}

export default Gallery;