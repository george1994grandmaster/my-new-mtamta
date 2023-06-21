
import { Link } from 'react-router-dom';
import Slider from "../components/slider";
import guidePromo from "../assets/img/guidePromo.png";
import darkPattern from "../assets/img/darkPattern.svg";
import starComplete from "../assets/img/starComplete.svg";
import blogMedia from "../assets/img/blogMedia.svg";
import brightPattern from "../assets/img/brightPattern.svg";
import {CompleteTextNavigate} from "../assets/svgFormatComponents";
import {mainBecomeBlocks} from "../utils/data";
import {logos} from "../utils/data";

const Home = () => {
  return (
    <>
      <div className="home-banner-slider">
        <Slider sliderName={'bannerSlider'}/>
      </div>
      <div className="dark-wrapper">
        <div className="container">
          <div className="guide-promo-content">
            <h1 className="guide-promo-main-title title">
              Expert Mountain Guides for Unforgettable Adventures
            </h1>
            <div className="text-image-layout">
              <div className="image-layout-col">
                <img src={guidePromo} alt="guide-promo-img"/>
              </div>
              <div className="text-layout-col guide-promo-text-content">
                <h2 className="title guide-promo-title">2023 Mountain Guide Adventures</h2>
                <p className="guide-promo-text text">
                  Sure! Here's a shorter version of the guide-info-content for your home page:
                  "2023 Mountain Guide Adventures: Unleash the thrill of the mountains with our expert guides!
                  Embark on an epic mountain journey in 2023. Our experienced guides will lead you through awe-inspiring landscapes, from the majestic Himalayas to the rugged Andes and the enchanting European Alps.
                  With safety as our top priority, our guides ensure a secure and unforgettable experience. Discover the rich cultural heritage, wildlife, and breathtaking views as you conquer the heights.
                  Join us in 2023 and make your mountain dreams come true. Contact us today to start planning your extraordinary adventure!"
                </p>
              </div>
            </div>
          </div>
          <div className="become-guide-wrapper">
            {mainBecomeBlocks.map((block, index) => (
              <div className="image-text-layout" key={block.id}>
                {index % 2 === 0 ? ( // Check if the ID is even
                  <>
                    <div className="text-layout-col bg-light">
                      <div className="d-flex ai-center jc-center h-100">
                        <div className="text-content-spacing">
                          <h1 className="layout-title title dark fw-strong">{block.title}</h1>
                          <p className="layout-text text dark fw-middle">{block.text}</p>
                        </div>
                      </div>
                    </div>
                    <div className="image-layout-col">
                      <img src={block.image} alt={block.title} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image-layout-col">
                      <img src={block.image} alt={block.title} />
                    </div>
                    <div className="text-layout-col bg-bright">
                      <div className="d-flex ai-center jc-center h-100">
                        <div className="text-content-spacing">
                          <h1 className="layout-title title light fw-strong">{block.title}</h1>
                          <p className="layout-text text light fw-middle">{block.text}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="complete-text-navigate">
              <Link to='/becomeGuide' >
                <CompleteTextNavigate/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="darkPattern">
        <img src={darkPattern} alt="darkPattern"/>
      </div>
      <div className="partners-wrapper">
        <div className="contaner">
          <div className="partners-content">
            <h3 className="partners-title title">OUR PARTNERS</h3>
            <div className="partners-logo-content">
              {logos.map((logo, index) => (
                <div key={index} className="partnersLogo">
                  <img src={logo.image} alt="partners-logo" />
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="brightPattern">
        <img src={brightPattern} alt="brightPattern"/>
      </div>
      <div className="bright-wrapper" style={{paddingTop: "30px"}}>
        <div className="horizonatal-border"></div>
        <div className="left-vertical-border border-cut"></div>
        <div className="right-vertical-border border-cut"></div>
        <div className="container">
          <div className='blog-media-banner-content'>
            <div className="blog-media-banner">
              <img src={blogMedia} alt="blog-media"/>
            </div>
            <div className="homeStarImg">
              <img src={starComplete} alt="homeStarImg"/>
            </div>
          </div>
          <div className="horizonatal-border"></div>
          <Slider sliderName={'blogSlider'}/>
        </div>
      </div>
    </>
  );
};

export default Home;
    