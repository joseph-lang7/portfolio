import { useState } from "react";
import Logo from "/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleColorChange = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleColorChange);
  return (
    <nav
      className={`${
        isScrolled ? "bg-black bg-opacity-55" : "bg-transparent"
      } mb-20 flex items-center justify-between py-3 w-full sticky inset-0 transition-all duration-500`}
    >
      <div className="container mx-auto px-9 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img className="w-[80px]" src={Logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            className="hover:text-neutral-500 transition-colors duration-500"
            target="_blank"
            href="https://www.linkedin.com/in/jlang67/"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            className="hover:text-neutral-500 transition-colors duration-500"
            target="_blank"
            href="https://github.com/joseph-lang7"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
