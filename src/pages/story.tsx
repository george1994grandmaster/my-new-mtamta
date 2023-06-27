import {FC} from "react";
import Slider from "../components/slider";
import StoryTitle from "../components/scrollTriggerAnimation/storyTitle";
import MissionPartners from "../components/scrollTriggerAnimation/missionPartners";

const Story:FC = () => {
  return (
    <>
      <StoryTitle/>
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
      <MissionPartners/>
      <div className="dark-wrapper">
        <Slider sliderName={'StorySlider'}/>
      </div>
    </>
  );
};

export default Story;