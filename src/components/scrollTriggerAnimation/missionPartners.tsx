import { FC, useRef, useEffect } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { overlayText } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const MissionPartners: FC = () => {
  const blocksOverlayRef = useRef<HTMLDivElement>(null);
  const partnersTitleRef = useRef<HTMLDivElement>(null);
  const textContentsRefs = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    const blocksOverlay = blocksOverlayRef.current;
    const partnersTitle = partnersTitleRef.current;

    ScrollTrigger.create({
      trigger: blocksOverlay,
      start: 'top bottom',
      end: 'bottom top',
      animation: gsap.fromTo(partnersTitle, { x: "-100%" }, { x: 0, duration: 2 }),
    });

    textContentsRefs.current.forEach((ref, index) => {
      if (ref) {
        ScrollTrigger.create({
          trigger: `.block-overlay-${index}`, // Use a class selector specific to each div
          start: 'top bottom',
          end: 'bottom top',
          animation: gsap.fromTo(
            ref,
            { y: "100%", opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.5 } 
          ),
        });
      }
    });
  }, []);

  return (
    <div className="blocks-background-overlay" ref={blocksOverlayRef}>
      <div className="title-scroll" ref={partnersTitleRef}>
        <h1 className="mission-partners-title title">MISSION-PARTNERS</h1>
      </div>
      {overlayText.map((block, index) => (
        <div key={index} className={`block-overlay ${block.optionClass} block-overlay-${index}`}>
          <div className="mission-text-content" ref={(el) => {
            textContentsRefs.current[index] = el!;
          }}>
            <h3 className="mission-title title fw-strong">{block.title}</h3>
            <p className="mission-text text fw-bold">
              {block.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionPartners;