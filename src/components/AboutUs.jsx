import { content } from "../Content";

const AboutUs = () => {
  const { Hireme } = content;

  return (
    <section className=" pb-5" id="AboutUs">
      <div className="md:container px-5 py-4">
        <h3 className="title" data-aos="fade-down">
          {Hireme.title}
        </h3>
        <h6 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h6>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary 
           p-6 shadow-sm rounded-xl  sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
