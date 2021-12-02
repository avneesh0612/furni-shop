import Image from "next/image";

const Companies = () => {
  const companies = [
    "Microsoft",
    "Entrepreneur",
    "Fortune",
    "Business-web",
    "Mashable",
  ];

  return (
    <div className="w-full flex flex-col justify-between items-center py-10 mt-20  bg-[#F4F6F6]">
      <h2 className="text-[#031725] text-xl font-medium">
        TRUSTED BY OVER 1K+ COMPANIES
      </h2>
      <div className="flex items-center justify-between w-9/12 mt-10">
        {companies.map((company) => (
          <Image
            key={company}
            src={`/logos/${company}.svg`}
            width={116}
            height={25}
            objectFit="contain"
            alt={company}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
