import Image from "next/image";
import { MoreIcon, SearchIcon } from "./icons";

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full px-32 py-5">
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-32 h-32"
        width={133}
        height={37}
        objectFit="contain"
      />
      <div className="flex w-3/5 justify-evenly">
        <a className="text-lg font-medium cursor-pointer hover:underline font-Montserrat">
          Home
        </a>
        <a className="text-lg font-medium cursor-pointer hover:underline font-Montserrat">
          About
        </a>
        <a className="text-lg font-medium cursor-pointer hover:underline font-Montserrat">
          Features
        </a>
        <a className="text-lg font-medium cursor-pointer hover:underline font-Montserrat">
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
