import { PROJECTS } from "../../constants/index";
import { AiOutlineExport } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const Projects = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="py-8 border-b border-neutral-800 gap-3 flex flex-wrap justify-between"
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 text-2xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((technology, index) => (
                  <span
                    className="rounded bg-neutral-800 px-2 py-1 text-md font-medium text-purple-500"
                    key={index}
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  className="underline hover:no-underline flex gap-1 items-center"
                  target="_blank"
                  href={project.liveDemo.href}
                >
                  {project.liveDemo.title}
                  <AiOutlineExport size={25} />
                </a>
                <a
                  className="underline hover:no-underline flex gap-1 items-center"
                  target="_blank"
                  href={project.repo.href}
                >
                  {project.repo.title}
                  <VscGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
