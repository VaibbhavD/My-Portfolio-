import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="min-h-fit " id="project">
      <div className="md:container px-5 py-5">
        <div>
          <h3 data-aos="fade-down">{Projects.title}</h3>
          <h6 data-aos="fade-down">{Projects.subtitle}</h6>
        </div>
        <div className="grid md:grid-cols-4 items-center md:flex-row flex-col gap-5 p-5 w-full">
          {Projects.project_content.map((content, i) => (
            <div class="md:full md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                class="w-full md:min-h-56"
                src={content.image}
                alt="Sunset in the mountains"
                loading="lazy"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{content.title}</div>
                <p class="text-gray-700 text-base">{content.description}</p>
              </div>
              <div class="px-6 pb-2 flex justify-around font-bold">
                <a href={content.git} target="_blank">
                  GitHub
                </a>
                <a href={content.link} target="_blank">
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
