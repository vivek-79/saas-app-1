import { FaInstagram, FaPinterest, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
        <img src="/logosaas.png" alt="saas Logo" className="h-10 relative" />
      </div>
      <nav className="flex flex-col gap-6 mt-6 md:flex-row justify-center">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customers</a>
        <a href="#">Updates</a>
        <a href="#">Help</a>
      </nav>

     <div className="flex justify-center gap-6 mt-6">
        <FaSquareXTwitter />
        <FaInstagram />
        <IoLogoLinkedin />
        <FaPinterest />
        <FaYoutube />
     </div>
     <p className="mt-6">&copy; 2025 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};
