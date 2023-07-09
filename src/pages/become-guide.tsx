import {FC, useEffect} from "react";
import Slider from "../components/sliders/slider";
import starComplete from "../assets/img/starComplete.svg";
import questionStar from "../assets/img/questionStar.svg";
import {certificate} from "../utils/data";
import lightStar from "../assets/img/lightStar.svg";
import certificateMountain from "../assets/img/certificateMountain.png";

const BecomeGuide: FC = () => {

  return (
    <>
      <div className="main-banner-wrapper p-relative ai-center">
        <div className="certificate-top-star">
          <img src={starComplete} alt="top-star" />
        </div>
        <div className="certificate-bottom-star">
          <img src={starComplete} alt="top-star" />
        </div>
        <div className="container">
          <h1 className="main-banner-title light fw-strong title ">
            BECOME A GUIDE
          </h1>
        </div>
      </div>
      <div className="horizontal-border"></div>
      <div className="bright-wrapper">
        <div className="container">
          <div className="vertical-large-spacing">
            <div className="p-relative w-100">
              <div className="question-star">
                <img src={questionStar} alt="question-star" />
              </div>
              <h1 className="question-title title light fw-bold">Why become a guide ?</h1>
            </div> 
          </div>
          {certificate.map((el, index) => (
            <div className="image-text-layout vertical-small-spacing" key={el.id}>
              {index % 2 === 0 ? ( // Check if the ID is even
                <>
                  <div className="text-layout-col">
                    <div className="d-flex ai-center jc-center h-100">
                      <div className="text-right-spacing">
                        <p className="layout-text text light fw-light">{el.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className="image-layout-col">
                    <img src={el.image} alt={el.image} />
                  </div>
                </>
              ) : (
                <>
                  <div className="image-layout-col">
                    <img src={el.image} alt={el.image} />
                  </div>
                  <div className="text-layout-col">
                    <div className="d-flex ai-center jc-center h-100">
                      <div className="text-left-spacing">
                        <p className="layout-text text light fw-light">{el.text}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="vertical-large-spacing">
            <div className="certificate-text-container">
              <div className="certificate-border-overlay">
                <div className="certificate-text-content bg-light">
                  <div className="certificate-text-bottom-star p-absolute">
                    <img src={lightStar} alt="certificate-star" />
                  </div>
                  <div className="certificate-text-top-star p-absolute">
                    <img src={lightStar} alt="certificate-star" />
                  </div>
                  <h4 className="adventure-certificate-title dark title fw-strong">Adventure Tourism School</h4>
                  <p className="adventure-certificate-text dark text fw-middle">
                    Welcome to the Adventure Tourism School, where we ignite the spirit of adventure and nurture the next generation of skilled mountain guides. Our school is a haven for those who seek to immerse themselves in the awe-inspiring beauty of mountains and the thrill of outdoor exploration.
                    At our school, we go beyond just teaching the fundamentals of mountain guiding. Our experienced instructors, with their vast knowledge and real-world expertise, will take you on a transformative journey. They will guide you through the intricacies of mountain environments, impart essential safety protocols, teach advanced navigation techniques, and instill effective leadership skills.
                    Through a combination of classroom learning, hands-on training, and immersive field experiences, you will develop a deep understanding of the mountains and acquire the practical skills needed to navigate challenging terrains. You will learn how to assess risks, plan and execute expeditions, and ensure the safety and enjoyment of your fellow adventurers.
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="horizontal-border"></div>
      <div className="dark-wrapper">
        <div className="container">
          <div className="vertical-large-spacing p-relative">
            <div className="certificate-title-star p-absolute">
              <img src={lightStar} alt="certificate-courses-star" />
            </div>
            <h1 className="certificate-title title light fw-strong">
              DIPLOMA & Certificate Courses
            </h1>
            <p className="certificate-text light fw-middle">
              The programs are delivered by internationally accredited experts are authorized and recognized by the State. Diploma courses (Level IV, 12-36 months) are financed by the Ministry of Education, while the short-term certificate courses (Level III-IV, up to 12 months) are co-financed by the Skills Agency and international partner organizations. Since 2021 our Mountain Guide Program alumni & GMGA members have been awarded IFMGA membership, which gives them the opportunity to continue professional development and lead activities in the 25 member countries. Acquiring UIMLA membership for the Trekking Guide Program is a work in progress. Find the list of programs below:
            </p>
          </div>
          <div className="certificate-banner-img">
            <img src={certificateMountain} alt="certificate-mountain-img" />
          </div>
          <Slider sliderName={'coursesSlider'}/>
        </div>
      </div>
     </>
  )
}

export default BecomeGuide;