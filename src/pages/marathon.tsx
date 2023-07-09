import {FC} from "react";
import mountainLogo from "../assets/img/mountainLogo.png";
import {marathonTitles} from "../utils/data";
import guideAdvantures from "../assets/img/guideAdvantures.png";
import darkPattern from "../assets/img/darkPattern2.svg";
import lightStar from "../assets/img/lightStar.svg";
import starComplete from "../assets/img/starComplete.svg";
import Form from "../components/forms/form";
import AccordionComponent from "../components/accordion";
import Cards from "../components/cards";

const Marathon: FC = () => {
  
  return (
    <>
      <div className="main-banner-wrapper ai-center p-fixed l-0">
        <div className="container">
          <div className="marathon-banner-content">
            <div className="marathon-logo-content">
              <div className="marathon-banner-img">
                <img src={mountainLogo} alt="mountain-logo"/>
              </div>
              <h3 className="logo-below-title title light fw-strong">GUIDE MARATHON</h3>
            </div>
            <div className="marathon-title-parallax">
              <div className="d-flex jc-between fd-column h-100">
                {marathonTitles.map((el, index) => (
                  <h3 key={index} className="parallax-title fw-strong light title">{el.title}</h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-wrapper">
        <div className="dark-wrapper">
          <div className="vertical-middle-spacing">
            <div className="container">
              <div className="text-image-layout">
                <div className="image-layout-col">
                  <img src={guideAdvantures} alt="guide-img"/>
                </div>
                <div className="text-layout-col text-left-spacing">
                  <h2 className="layout-title light title">2023 Mountain Guide Adventures</h2>
                  <p className="layout-text light fw-middle text">
                    A guide marathon is an exhilarating outdoor event that brings together
                    seasoned guides and enthusiastic adventurers for an immersive experience
                    in nature. Participants embark on a physically demanding journey, following
                    the lead of experienced guides who provide expertise, ensure safety,
                    and create a supportive environment for challenging hikes or climbs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="advanture-text-content">
            <h1 className="advanture-title dark fw-bold title">Join The Adventure</h1>
            <p className="advanture-text dark fw-middle text">
              Joining an adventure opens up a world of thrilling experiences, personal growth,
              and connections. It's an opportunity to break free from routine, challenge yourself,
              and create lasting memories. Whether you're exploring new landscapes, pushing your
              limits, or bonding with fellow adventurers, embarking on an adventure brings
              excitement and fulfillment to your life. Not only does it provide a break from
              the monotony of daily life, but it also allows you to discover hidden strengths
              and capabilities you never knew existed. It offers a chance to disconnect from 
              technology, immerse yourself in nature, and
              reconnect with your true self, fostering a sense of inner peace and rejuvenation.
            </p>
          </div>
          <div className="main-form-spacing">
            <div className="register-form-wrapper overall-form-wrapper">
              <div className="bright-border-overlay">
                <div className="dark-border-overlay">
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
            </div>
          </div>
        </div>
        <AccordionComponent/>
        <div className="dark-wrapper p-relative">
          <div className="marathon-dark-pattern">
            <img src={darkPattern} alt="darkPattern" />
          </div>
          <div className="container">
            <div className="team-title-content">
              <div className="team-star">
                <img src={starComplete} alt="tems-star" />
              </div>
              <h1 className="team-title title bright fw-strong">
                ACTUAL NEWS
              </h1>
            </div>
            <Cards/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marathon;