
import { FaArrowRight } from "react-icons/fa6";
import {motion,useScroll,useTransform} from 'framer-motion'
import { useRef } from "react";
export const Hero = () => {

  const heroRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset:["start end","end start"]
  });

  const translateY= useTransform(scrollYProgress,
    [0,1],
    [150,-150]
  );

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="px-4 md:px-8">
        <div className="md:flex md:justify-between">
          <div className="md:w-[478px] lg:w-1/2">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 md:w-[478px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores incidunt, iure deleniti facilis consequuntur veritatis sit sequi corrupti accusamus voluptatem cumque, modi maxime.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                Learn more
                <span><FaArrowRight className="w-4 h-4" /></span>
              </button>
            </div>
          </div>
          <div className="mt-24 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
             animate={{
              translateY:[-30,30]
             }}
             transition={{
              repeat:Infinity,
              repeatType:'mirror',
              duration:3,
              ease:'easeInOut'
             }}
            src="/cog.png" alt="cog-image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" />
            <motion.img
             style={{translateY:translateY}}
            src="/cylinder.png" alt="cylinder" className="hidden h-[220px] w-[220px]  md:block -top-8 -left-32 md:absolute" />
            <motion.img 
              style={{ translateY: translateY ,rotate:30}}
            src="/noodle.png" alt="noodle" className="hidden lg:block absolute h-[220px] w-[220px] top-[524px] left-[448px]" />
          
          </div>
        </div>
      </div>
    </section>
  );
};
