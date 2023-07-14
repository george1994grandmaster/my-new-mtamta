import { FC, useRef, useEffect } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import NavigationLink from '../link';
import blog1 from "../../assets/img/blog1.png";
import blog2 from "../../assets/img/blog2.png";
import blog3 from "../../assets/img/blog3.png";
import blog4 from "../../assets/img/blog4.png";
import blog5 from "../../assets/img/blog5.png";

gsap.registerPlugin(ScrollTrigger);

const BlogBanner: FC = () => {

  const blogWrapperRef = useRef<HTMLDivElement>(null);
  const itemVerticalRef = useRef<HTMLDivElement>(null);
  const blogHorizontalRef = useRef<HTMLHeadingElement>(null);
  const blogVerticalRef = useRef<HTMLHeadingElement>(null);

  
  useEffect(() => {
		
		const blogWrapper = blogWrapperRef.current;
    const itemVertical = itemVerticalRef.current;
    const blogHorizontal = blogHorizontalRef.current;
    const blogVertical = blogVerticalRef.current;
	
		gsap.fromTo(blogHorizontal, { x: "-100%" }, { x: 0, duration: 1.5, scrollTrigger: {
			trigger: blogWrapper, 
			start: 'top bottom', 
			end: 'bottom top', 
		}});

    gsap.fromTo(blogVertical, { y: "100vh" }, { y: 0, duration: 1.5, scrollTrigger: {
			trigger: itemVertical, 
			start: 'top bottom', 
			end: 'bottom top', 
		}});
  }, []);

  return (
    <div className="blog-center-wrapper" ref={blogWrapperRef}>
      <div className="initialize-vertical-title" ref={itemVerticalRef}></div>
      <h1 className="blog-vertical-title dark fw-strong title" ref={blogVerticalRef}>BLOG & MEDIA</h1>
      <div className="vertical-middle-spacing">
        <h1 className="blog-horizontal-title dark title fw-strong" ref={blogHorizontalRef}>BLOG & MEDIA</h1>
        <div className="grid-small-container">
          <div className="item item1">
            <img src={blog1} alt="blog-img" />
          </div>
          <div className="item item2">
            <div className="h-100 d-flex jc-center fd-column">
              <h5 className="blog-layout-title title light fw-bold">
                Essential Mountain Hiking Gear
              </h5>
              <p className="blog-layout-text text light fw-middle">
                Explore the essential gear you need for your mountain hikes. From sturdy boots to reliable navigation tools, we've got you covered. Gear up and conquer the trails with confidence
              </p>
              <div>
                <NavigationLink url="" text="see more" 
                bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
              </div>
            </div>
          </div>
          <div className="item item3">
            <img src={blog2} alt="blog-img" />
          </div>
        </div>
      </div>
      <div className="vertical-middle-spacing">
        <div className="grid-large-container">
          <div className="item item1">
            <div className="h-100 d-flex jc-center fd-column">
              <h5 className="blog-layout-title title light fw-bold">Photography Tips for Stunning Mountain Landscapes</h5>
              <p className="blog-layout-text text light fw-middle">
                Capture stunning mountain landscapes with our photography tips. Learn about composition, lighting, and techniques to elevate your mountain photography skills. Unleash your creativity and showcase the beauty of the mountains
              </p>
              <div>
                <NavigationLink url="" text="see more" 
                bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
              </div>
            </div>
          </div>
          <div className="item item2">
            <img src={blog3} alt="blog-img" />
          </div>
          <div className="item item3">
            <img src={blog4} alt="blog-img" />
          </div>
        </div>
      </div>
      <div className="vertical-middle-spacing">
        <div className="text-image-layout">
          <div className="image-blog-layout-col">
            <img src={blog5} alt="blog-img"/>
          </div>
          <div className="text-blog-layout-col guide-promo-text-content">
            <h2 className="title blog-layout-title light">The Power of Nature: Finding Serenity in the Mountains</h2>
            <p className="blog-layout-text light fw-light text">
              Experience the transformative power of nature as we delve into the serene beauty of the mountains. From tranquil hiking trails to breathtaking vistas, discover how the mountains can provide a sense of peace and rejuvenation. Join us on a journey of serenity and exploration.
            </p>
            <div>
              <NavigationLink url="" text="see more" 
              bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogBanner;