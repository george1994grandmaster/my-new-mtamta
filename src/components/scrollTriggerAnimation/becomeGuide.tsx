import { FC, useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import becomeTrigger from "../../assets/img/becomeTrigger.png";
import guideTrigger from "../../assets/img/guideTrigger.png";

gsap.registerPlugin(ScrollTrigger);

 const BecomeGuideBanner: FC = () => {

	const becomeGuideBannerRef = useRef<HTMLDivElement>(null);
  const becomeGuideLeftRef = useRef<HTMLDivElement>(null);
  const becomeGuideRightRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const becomeGuideBanner = becomeGuideBannerRef.current;
		const becomeGuideLeft = becomeGuideLeftRef.current;
		const becomeGuideRight = becomeGuideRightRef.current;
	
		gsap.fromTo(becomeGuideLeft, { x: "-100%" }, { x: 0, duration: 1.5, scrollTrigger: {
			trigger: becomeGuideBanner, 
			start: 'top bottom', 
			end: 'bottom top', 
		}});
	
		gsap.fromTo(becomeGuideRight, { x: "100%" }, { x: 0, duration: 1.5, scrollTrigger: {
			trigger: becomeGuideBanner,
			start: 'top bottom',
			end: 'bottom top',
		}});
	}, []);

	return (
		<div className="become-guide-banner" ref={becomeGuideBannerRef}>
			<div className="become-guide-left" style={{ transform: 'translateY(4px)' }}>
				<div className="become-trigger" ref={becomeGuideLeftRef}>
					<img src={becomeTrigger} alt="become-trigger"/>
				</div>
			</div>
			<div className="become-guide-right">
				<div className="become-trigger" ref={becomeGuideRightRef}>
					<img src={guideTrigger} alt="become-trigger"/>
				</div>
			</div>
		</div>
	)
}

export default BecomeGuideBanner;