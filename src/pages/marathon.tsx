import {FC, useEffect, useState} from "react";
import mountainLogo from "../assets/img/mountainLogo.png";
import {marathonTitles} from "../utils/data";
import guidePromo from "../assets/img/guidePromo.png";

const Marathon: FC = () => {
  
  return (
    <>
      <div className="marathon-banner-wrapper">
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
          <div className="container">
            <div className="vertical-middle-spacing">
              <div className="text-image-layout">
                <div className="image-layout-col">
                  <img src={guidePromo} alt="guide-promo-img"/>
                </div>
                <div className="text-layout-col guide-promo-text-content">
                  <h2 className="title guide-promo-title">2023 Mountain Guide Adventures</h2>
                  <p className="guide-promo-text text">
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
      </div>
    </>
  );
};

export default Marathon;