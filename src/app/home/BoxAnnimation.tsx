import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import lottie, { AnimationItem } from 'lottie-web';

const BoxAnnimation: React.FC = () => {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Load Lottie Animation
    animationInstance.current = lottie.loadAnimation({
      container: lottieContainer.current!,
      renderer: 'svg',
      loop: false, 
      autoplay: false, 
      animationData: require('../../public/lottie/JB2G_Lottie.json'),
    });

    const anim = animationInstance.current;

    // GSAP Animation
    const tl = gsap.timeline({
      repeat: -1, 
      onUpdate: () => {
        if (anim) {
          const progress = tl.progress(); 
          anim.goToAndStop(progress * anim.totalFrames, true); 
        }
      },
    });

    tl.to({}, { duration: 2 });

    return () => {
      tl.kill(); // Clean up GSAP timeline
      anim?.destroy(); // Clean up Lottie instance
    };
  }, []);

  return <div ref={lottieContainer} style={{ width: '100%', height: 346 }} />;
};

export default BoxAnnimation;
