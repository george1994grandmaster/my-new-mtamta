import { FC } from "react";
import mountain from "../../assets/img/mountain.png";
import NavigationLink from '../link';

const BlogBanner: FC = () => {
  return (
    <div className="blog-center-wrapper">
      <div className="vertical-middle-spacing">
        <div className="grid-small-container">
          <div className="item item1">
            <img src={mountain} alt="img" />
          </div>
          <div className="item item2">
            <div className="h-100 d-flex jc-center fd-column">
              <h5 className="blog-layout-title title light fw-bold">
                Essential Gear for Mountain Hiking Adventures
              </h5>
              <p className="blog-layout-text text light fw-middle">
                Discover the must-have gear for your mountain hikes. From sturdy boots to reliable navigation tools, we've got you covered. Gear up and make the most of your outdoor adventures
              </p>
              <div>
                <NavigationLink url="" text="see more" 
                bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
              </div>
            </div>
          </div>
          <div className="item item3">
            <img src={mountain} alt="img" />
          </div>
        </div>
      </div>
      <div className="vertical-middle-spacing">
        <div className="grid-large-container">
          <div className="item item1">
            <div className="h-100 d-flex jc-center fd-column">
              <h5 className="blog-layout-title title light fw-bold">Photography Tips for Stunning Mountain Landscapes</h5>
              <p className="blog-layout-text text light fw-middle">
                Capture breathtaking mountain landscapes with our photography tips. Learn about composition, lighting, and essential equipment to elevate your mountain photography skills
              </p>
              <div>
                <NavigationLink url="" text="see more" 
                bgColor="transparent" color="#fff" border="1px solid #fff" hoveredBackground="#fff" hoveredColor="#F05E47"/>
              </div>
            </div>
          </div>
          <div className="item item2">
            <img src={mountain} alt="img" />
          </div>
          <div className="item item3">
            <img src={mountain} alt="img" />
          </div>
        </div>
      </div>
      <div className="vertical-middle-spacing">
        <div className="text-image-layout">
          <div className="image-blog-layout-col">
            <img src={mountain} alt="blog-img"/>
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