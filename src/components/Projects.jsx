import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper";

// import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="min-h-fit " id="project">
      <div className="md:container px-5 py-5">
        <div>
          <h3 data-aos="fade-down">{Projects.title}</h3>
          <h6 data-aos="fade-down">{Projects.subtitle}</h6>
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5 p-5 w-full">
          {Projects.project_content.map((content, i) => (
            // <div>
            //   <img src={content.image} alt="..." />
            //   <div className="flex flex-col gap-1 mt-2">
            //     <h5 className="font-bold font-Poppins">{content.title}</h5>
            //     <button className="font-bold text-gray self-end">
            //       READ MORE
            //     </button>
            //   </div>
            // </div>
            <div class="md:w-1/4 rounded-lg overflow-hidden shadow-lg">
              <img
                class="w-full"
                src={content.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{content.title}</div>
                <p class="text-gray-700 text-base">{content.description}</p>
              </div>
              <div class="px-6 pb-2 flex justify-around font-bold">
                <a href={content.git}>GitHub</a>
                <a href={content.link}>Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
