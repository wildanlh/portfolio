import Image from 'next/image';
import GradientText from '../animations/GradientText';
import ScrollFloat from '../animations/ScrollFloat';
import { listProject } from '@/constant/constant';
import Link from 'next/link';

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 my-20 md:my-24"
    >
      <div className="container mx-auto text-center">
        {/* ===== Title ===== */}
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-base md:text-lg"
        >
          <b>My result of</b>
        </GradientText>

        <ScrollFloat
          textClassName="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Projects
        </ScrollFloat>

        {/* ===== Grid Projects ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mt-10 group">
          {listProject.map((project) => (
            <div
              key={project.id}
              className={`w-full flex flex-col cursor-pointer transition duration-300 ease-in-out 
              group-hover:opacity-50 hover:!opacity-100 ${
                project.id % 2 !== 0 ? '' : 'md:translate-y-20'
              }`}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Project Image */}
                <div
                  className={`${project.color} p-10 md:p-16 rounded-2xl overflow-hidden flex items-center justify-center`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1080}
                    height={1080}
                    className="rounded-2xl shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 w-full h-auto object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col mt-4 text-left">
                  <span className="font-bold text-lg sm:text-xl">
                    {project.title}
                  </span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-light text-sm sm:text-base text-gray-400">
                      {project.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
