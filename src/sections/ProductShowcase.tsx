
import { motion ,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';
export const ProductShowcase = () => {

  const sectionRef= useRef(null)
  const{scrollYProgress} =useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  });

  const translateY = useTransform(scrollYProgress,
    [0,1],
    [200,-200]
  );
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-desc mt-5">Lorem ipsum dolor sit amet consectetur  earum iusto dolorum vel, quidem hic error maxime. Nulla.</p>
        </div>
        <div className="relative">
          <img src="/product-image.png" alt="Product Image" className="mt-10 " />
          <motion.img 
          style={{translateY}}
          src="/pyramid.png" alt="pyramid image" className="hidden md:block absolute -right-36 -top-32 h-[262px] w-[262px]" />
          <motion.img 
            style={{ translateY }}
          src="/tube.png" alt="tube image" className="hidden md:block absolute bottom-24 -left-36 h-[248px] w-[248px]" />
        </div>
      </div>
    </section>
  );
};
