import AboutCard from "./AboutCard";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-between w-full p-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold  text-[#244D4D]">About Us</h2>
          <p className="text-[#5F5F64] font-OpenSans mt-2">
            At Besnik Consultancy, we take pride in our values <br /> – service,
            integrity, and excellence.
          </p>
        </div>

        <button className="px-6 py-3 text-[#5F5F64] bg-[#F4F6F6]  rounded-md button-boxshadow">
          Learn more
        </button>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 mt-10 space-y-10">
          <div className="flex space-x-2">
            <AboutCard
              number={1}
              title="Who We Are"
              desc="You get a 2-week free trial to kick the Smarty tries. We want you to."
            />

            <AboutCard
              number={2}
              title="What Do We Do"
              desc="You get a 2-week free trial to kick the Smarty tries. We want you to."
            />
          </div>

          <div className="flex space-x-2">
            <AboutCard
              number={3}
              title="How Do We Help"
              desc="You get a 2-week free trial to kick the Smarty tries. We want you to."
            />

            <AboutCard
              number={4}
              title="Create success story"
              desc="You get a 2-week free trial to kick the Smarty tries. We want you to."
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mt-10">
            <div className="mt-5">
              <Image
                width={250}
                height={150}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4078_bborbt.png"
                alt=""
              />
            </div>

            <div className="mt-5">
              <Image
                width={250}
                height={270}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4076_fww2gh.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col ml-5">
            <div className="mt-5">
              <Image
                width={250}
                height={270}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4075_vuvtdm.png"
                alt=""
              />
            </div>
            <div className="mt-5">
              <Image
                width={250}
                height={150}
                src="https://res.cloudinary.com/didkcszrq/image/upload/v1638431334/Rectangle_4077_pgs58b.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
