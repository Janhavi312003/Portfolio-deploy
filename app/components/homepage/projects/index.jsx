import { projects } from "@/utils/data/projects";
import Image from "next/image";

function Projects() {
  return (
    <div id="projects" className='relative z-50 border-t my-12 border-[#25213b]'>
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className='absolute top-0 -z-10'
      />

      <div className='flex justify-center -translate-y-[1px]'>
         <div className='w-3/4'>
            <div className='h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full' />
          </div>
      </div>

      <div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest'>
        [ PROJECTS ]
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative border border-[#25213b] rounded-2xl p-6 bg-[#18182a] hover:border-pink-500 transition-all shadow-lg"
          >
            <div className="flex items-center mb-3">
              <span className="mr-2 text-pink-500 text-2xl">💻</span>
              <h3 className="text-xl font-bold text-pink-500">{project.name}</h3>
            </div>

            <div className="relative w-full h-40 rounded overflow-hidden mb-4 bg-[#202033] flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
          </div>

            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#282846] text-pink-400 rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-5">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-medium"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
