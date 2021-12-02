const AboutCard = ({ number, title, desc }) => {
  return (
    <div className="flex flex-col items-start space-y-6">
      <h2 className="text-5xl font-bold font-OpenSans text-[#244D4D]">
        {number}.
      </h2>
      <h3 className="text-3xl font-bold font-OpenSans text-[#244D4D]">
        {title}.
      </h3>
      <p className="font-OpenSans text-[#64717C]">{desc}.</p>
    </div>
  );
};

export default AboutCard;
