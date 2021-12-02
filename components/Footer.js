import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full flex flex-col p-20 bg-[#244D4D]">
      <div className="flex justify-between items-center mx-auto border-b-[1px] pb-20 border-white/10">
        <h3 className="w-[56%] text-5xl font-medium text-white font-OpenSans">
          Start your business today for $0+ state fees.
        </h3>
        <div className="flex items-center space-x-3">
          <button className="bg-[#FCFBFF] text-[#244D4D] font-medium font-Inter px-8 py-2 rounded-full">
            Get Started
          </button>
          <button className="bg-[#3A5F5F] text-white font-medium font-Inter px-8 py-2 rounded-full">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="flex justify-between w-full pr-10 mt-20 ml-2">
        <div className="flex flex-col items-start">
          <Image
            src="/logo-white.svg"
            alt="logo"
            className="w-32 h-32"
            width={133}
            height={37}
            objectFit="contain"
          />
          <p className="text-white text-OpenSans max-w-[250px] mt-5">
            Optix seamlessly connects your members with the community,
            resources.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-3">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Entity types
          </h4>
          <p className="text-[#EEEEEE] font-Inter">Knowledge base</p>
          <p className="text-[#EEEEEE] font-Inter">Security</p>
          <p className="text-[#EEEEEE] font-Inter">Privacy Policy</p>
          <p className="text-[#EEEEEE] font-Inter">Partners</p>
          <p className="text-[#EEEEEE] font-Inter">About us</p>
          <p className="text-[#EEEEEE] font-Inter">FAQs</p>
        </div>

        <div className="flex flex-col items-start space-y-3">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Services
          </h4>
          <p className="text-[#EEEEEE] font-Inter">Contact Us</p>
          <p className="text-[#EEEEEE] font-Inter">Press</p>
          <p className="text-[#EEEEEE] font-Inter">Payroll</p>
          <p className="text-[#EEEEEE] font-Inter">Library</p>
          <p className="text-[#EEEEEE] font-Inter">Blog</p>
          <p className="text-[#EEEEEE] font-Inter">Help Center</p>
        </div>

        <div className="flex flex-col items-start space-y-3">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Resources
          </h4>
          <p className="text-[#EEEEEE] font-Inter">Pricing</p>
          <p className="text-[#EEEEEE] font-Inter">FAQs</p>
          <p className="text-[#EEEEEE] font-Inter">Contact Support</p>
          <p className="text-[#EEEEEE] font-Inter">Privacy Policy</p>
          <p className="text-[#EEEEEE] font-Inter">Terms</p>
        </div>

        <div className="flex flex-col items-start space-y-3">
          <h4 className="text-lg font-semibold text-white text-OpenSans">
            Support
          </h4>
          <p className="text-[#EEEEEE] font-Inter">Contact</p>
          <p className="text-[#EEEEEE] font-Inter">Affiliates</p>
          <p className="text-[#EEEEEE] font-Inter">Sitemap</p>
          <p className="text-[#EEEEEE] font-Inter">Cancellation Policy</p>
          <p className="text-[#EEEEEE] font-Inter">Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
