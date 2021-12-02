import Image from "next/image";

const Deal = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <Image src={icon} width={32} height={35} alt="deal" />
      <h4 className="text-xl font-gray-700bold text- font-OpenSans ">
        {title}
      </h4>
      <p className="text-gray-700 font-OpenSans max-w-[200px]">{description}</p>
    </div>
  );
};

export default Deal;
