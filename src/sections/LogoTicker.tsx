import {motion} from 'framer-motion'

export const LogoTicker = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-white">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div 
        animate={{
          translateX:"-50%"
        }}
        transition={{
          duration:15,
          repeat:Infinity,
          ease:'linear'
        }}
        className="flex gap-[56px] flex-none pr-14">
          <img src="/logo-acme.png" alt="logo-acme" className="logo-ticker-img" />
          <img src="/logo-quantum.png" alt="logo-quantum" className="logo-ticker-img" />
          <img src="/logo-echo.png" alt="logo-echo" className="logo-ticker-img" />
          <img src="/logo-celestial.png" alt="logo-celestial" className="logo-ticker-img" />
          <img src="/logo-pulse.png" alt="logo-pulse" className="logo-ticker-img" />
          <img src="/logo-apex.png" alt="logo-apex" className="logo-ticker-img" />
          
          {/* 2nd set for animtion */}
          <img src="/logo-acme.png" alt="logo-acme" className="logo-ticker-img" />
          <img src="/logo-quantum.png" alt="logo-quantum" className="logo-ticker-img" />
          <img src="/logo-echo.png" alt="logo-echo" className="logo-ticker-img" />
          <img src="/logo-celestial.png" alt="logo-celestial" className="logo-ticker-img" />
          <img src="/logo-pulse.png" alt="logo-pulse" className="logo-ticker-img" />
          <img src="/logo-apex.png" alt="logo-apex" className="logo-ticker-img" />
        </motion.div>
      </div>
    </div>
  );
};
