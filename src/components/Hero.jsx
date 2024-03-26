import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section>
      <div className="min-h-screen relative ">
        <div className="absolute h-full top-0 right-0 bottom-0 md:w-4/12 w-8/12 bg-primaryLinear ">
          <h1 className="rotate-90 absolute p-10 mb-5 top-[40%] right-[-15] text-[#EAF2FA]">
            {hero.firstName}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>
        <div>
          <h2>{hero.title}</h2>
          <br />
          <div>
            <button>{hero.btnText}</button>
          </div>
          <div>
            {hero.hero_content.map((content, i) => (
              <div key={i}>
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
