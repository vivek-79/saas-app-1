
import { FaArrowRight } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-[12px] bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <FaArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="py-5">
        <div className="px-4">
         <div className="flex items-center justify-between">
            <img src="/logosaas.png" alt="logo" className="w-10 h-10" />
            <BsList className="text-black h-5 w-5 md:hidden" />
         
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
          </nav>
         </div>
        </div>
      </div>
    </header>
  );
};