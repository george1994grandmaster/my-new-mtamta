import {FC} from "react";
import Slider from "../components/sliders/slider";
import StoryTitle from "../components/scroll-trigger-animation/storyTitle";
import MissionPartners from "../components/scroll-trigger-animation/missionPartners";

const Story:FC = () => {
  return (
    <>
      <StoryTitle/>
      <div className="vertical-large-spacing">
        <div className="container">
          <p className="story-info text fw-bold">
            At Guide Mountain, our story begins with a shared passion for the great outdoors.
            We believe that nature has a way of captivating hearts, igniting a sense of wonder,
            and providing experiences that shape us in profound ways. It was this belief that 
            led us to embark on a mission to inspire and guide fellow adventurers on their quest
            for unforgettable experiences in the mountains.
            Founded by a group of avid mountaineers, outdoor enthusiasts, and travel aficionados,
            Guide Mountain was born out of a deep desire to share our knowledge, expertise, and love
            for the mountains with the world. We wanted to create a platform that not only offers 
            peaks, breathtaking trails, and hidden gems of the world's mountain ranges.
          </p>
        </div>
      </div>
      <MissionPartners/>
      <div className="dark-wrapper">
        <div className="vertical-large-spacing">
          <h3 className="story-slider-title light fw-bold title">Peaks Conquered: Journey to Repeat Successes</h3>
          <Slider sliderName={'StorySlider'}/>
        </div>
      </div>
    </>
  );
};

export default Story;