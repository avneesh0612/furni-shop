import Header from "./Header";
import Image from "next/image";
import { ArrowDownIcon, ArrowDownSideIcon, ArrowUpIcon } from "./icons";

const HeroHome = () => {
  return (
    <div className="relative flex flex-col w-full h-screen">
      <Header />
      <div className="flex items-center w-full mx-10">
        <div className="z-20 flex items-center justify-center  flex-col -mr-44 w-[40vw] py-40 bg-white/40 backdrop-blur-3xl">
          <div className="w-9/12">
            <h2 className="text-6xl font-bold text-[#244D4D]">
              We Help You Make Modern Interior
            </h2>
            <p className="mt-10">
              We will help you to make an elegant and luxurious interior
              designed by professional interior designer.
            </p>
          </div>
        </div>
        <div className="relative z-10 w-[991px] h-[700px]">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/didkcszrq/image/upload/v1638275638/Mask_Group_p1hclc.png"
          />
        </div>
        <div className="absolute z-20 flex items-center justify-center w-32 h-32 -bottom-4 bg-white/40 backdrop-blur-3xl right-20">
          <ArrowDownIcon className="w-8 h-16 text-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
