// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10 ">
          <h1 className="rotate-90 absolute lg:top-[35%] top-[20%] lg:right-[-15%] right-[-30%] text-[#EAF2FA] ">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6">
          <h3 className="font-bold">{hero.title}</h3>
          <br />
          <div className="flex justify-end">
            {/* <button className="btn">{hero.btnText}</button> */}
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                className={`flex items-center w-80 gap-5 px-1
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[30rem] h-80 ">
          <img
            src={hero.image}
            alt="..."
            className="h-full object-cover rounded-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
