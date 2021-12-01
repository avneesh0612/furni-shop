import Image from "next/image";

const Deal = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <Image src={icon} width={32} height={35} alt="deal" />
      <h4 className="text-xl text-[#3D3D3F] font-bold font-OpenSans ">
        {title}
      </h4>
      <p className="text-[#3D3D3F] font-OpenSans max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default Deal;
