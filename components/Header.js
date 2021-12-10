import Image from "next/image";
import { useEffect, useState } from "react";
import { MoreIcon, SearchIcon } from "./icons";

const Header = () => {
  const [animateHeader, setAnimatedHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 50) {
        setAnimatedHeader(true);
      } else setAnimatedHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`fixed ${
        animateHeader
          ? "bg-white/30 backdrop-blur-xl shadow-xl duration-100"
          : ""
      } top-0 z-50 flex items-center justify-between w-full px-32 py-5`}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-32 h-32"
        width={133}
        height={37}
        objectFit="contain"
      />
      <div className="flex w-3/5 justify-evenly">
        <a
          href="#home"
          className="text-lg font-medium cursor-pointer hover:underline font-Montserrat"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg font-medium cursor-pointer hover:underline font-Montserrat"
        >
          About
        </a>
        <a
          href="#features"
          className="text-lg font-medium cursor-pointer hover:underline font-Montserrat"
        >
          Features
        </a>
        <a
          href="#contact"
          className="text-lg font-medium cursor-pointer hover:underline font-Montserrat"
        >
          Contact
        </a>
      </div>
      <div className="flex">
        <SearchIcon className="w-5 h-5 mr-4" />
        <MoreIcon className="w-5 h-5 ml-4" />
      </div>
    </nav>
  );
};

export default Header;
