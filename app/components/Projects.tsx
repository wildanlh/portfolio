'use client';

import Image from 'next/image';
import GradientText from '../animations/GradientText';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useT } from '../internalization/providers';

// ✅ Type definition
interface ProjectItem {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
  color: string;
}

// ✅ Project Card component (supaya bisa pakai hooks per item)
function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 90%', 'end 50%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 1], [20, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y: translateY }}
      whileHover={{
        scale: 1.03,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.4 },
      }}
      className={`relative w-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out 
        group-hover:opacity-50 hover:!opacity-100 ${
          project.id % 2 !== 0 ? '' : 'md:translate-y-20'
        }`}
    >
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        {/* === Project Card Container === */}
        <motion.div
          className={`${project.color} relative p-10 md:p-16 rounded-2xl overflow-hidden 
                       flex items-center justify-center shadow-xl backdrop-blur-sm`}
          whileHover={{ scale: 1.02 }}
        >
          {/* Shine Effect */}
          <motion.div
            className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r 
                       from-transparent via-white/25 to-transparent opacity-0"
            animate={{
              left: ['-75%', '125%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.2,
              ease: 'easeInOut',
            }}
          />

          {/* Parallax Image */}
          <motion.div style={{ y: imageY }}>
            <Image
              src={project.image}
              alt={project.title}
              width={1080}
              height={1080}
              className="rounded-2xl shadow-2xl transform transition-transform 
                         duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* === Text Info === */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col mt-4 text-left"
        >
          <span className="font-bold text-lg sm:text-xl text-white">
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
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ✅ Main Projects section
export default function Projects() {
  const t = useT();
  const listProject = t('project.list') as unknown as ProjectItem[];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full min-h-screen flex flex-col justify-center items-center 
                 px-4 sm:px-6 md:px-10 lg:px-20 my-20 md:my-24 overflow-hidden"
    >
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* ===== Title ===== */}
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-base md:text-lg"
        >
          <b>{t('project.badge')}</b>
        </GradientText>

        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            textShadow:
              '0px 0px 30px rgba(0, 170, 255, 0.4), 0px 0px 60px rgba(0, 170, 255, 0.15)',
          }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-white"
        >
          {t('project.title')}
        </motion.h2>

        {/* ===== Grid Projects ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mt-12 group w-full">
          {listProject.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
