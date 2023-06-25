import {FC, useRef, useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mountain from "../../assets/img/mountain.png";

gsap.registerPlugin(ScrollTrigger);

 const StoryTitle: FC = () => {

	const storyBannerRef = useRef<HTMLDivElement>(null);
  const storyTitleContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		
		const storyBanner = storyBannerRef.current;
    const storyTitleContent = storyTitleContentRef.current;
	
		gsap.fromTo(storyTitleContent, { y: "100vh" }, { y: 0, duration: 1.5, scrollTrigger: {
			trigger: storyBanner, 
			start: 'top bottom', 
			end: 'bottom top', 
		}});
  }, []);

	return (
		<div className="story-banner-wrapper" ref={storyBannerRef}>
      <div className="story-banner-content">
        <img src={mountain} alt="story-banner"/>
      </div>
      <div className="story-banner-title-content" ref={storyTitleContentRef}>
        <h1 className="story-banner-title title">OUR STORY</h1>
      </div>
    </div>
	)
}

export default StoryTitle;

	





