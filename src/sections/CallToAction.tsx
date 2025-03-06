import { FaArrowRight } from "react-icons/fa6";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";

export const CallToAction = () => {

  const sectionref= useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionref,
    offset:["start end","end start"]
  });

  const translateY = useTransform(scrollYProgress,
    [0,1],
    [200,-200]
  )
  return (
    <section ref={sectionref} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today </h2>
        <p className="section-desc mt-5">Celebrate the joy of accomplishment with an app design to track your
          progress and motivate your efforts.
        </p>

        <motion.img 
          style={{translateY}}
        src="/star.png" alt="Star Image" className="w-[360px] absolute -left-[350px] -top-[137px]"/>
        <motion.img 
          style={{ translateY }}
        src="/spring.png" alt="Spring Image" className="w-[360px] absolute -right-[331px] -top-[19px]"/>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">Learn more <span><span><FaArrowRight className="w-4 h-4" /></span></span> </button>
        </div>
      </div>
    </section>
  );
};
