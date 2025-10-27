import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GradientText from '../animations/GradientText';
import ShinyText from '../animations/ShinyText';
import { useT } from '../internalization/providers';

interface EducationItem {
  title: string;
  subtitle: string;
  year: string;
  details: string[];
}

export default function Education() {
  const t = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educations = t('education.list') as unknown as EducationItem[];

  return (
    <section
      id="education"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 my-20 md:my-24 bg-[#060010]"
    >
      {/* === Glow Background === */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-500/10 blur-[120px] rounded-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      />

      <div
        ref={ref}
        className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-14 relative z-10"
      >
        {/* ===== LEFT SECTION ===== */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <GradientText
            colors={['#007AFF', '#80BDFF', '#007AFF']}
            animationSpeed={10}
            showBorder={false}
            className="text-sm sm:text-base md:text-lg"
          >
            <b>{t('education.badge')}</b>
          </GradientText>

          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              textShadow:
                '0px 0px 30px rgba(0, 170, 255, 0.4), 0px 0px 60px rgba(0, 170, 255, 0.15)',
            }}
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-white drop-shadow-[0_0_10px_rgba(0,150,255,0.3)]"
          >
            {t('education.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <ShinyText
              text={t('education.description')}
              disabled={false}
              speed={3}
              className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6"
            />
          </motion.div>
        </div>

        {/* ===== RIGHT SECTION - ACCORDION LIST ===== */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          className="w-full md:w-1/2 space-y-4"
        >
          {educations.map((edu: EducationItem, idx: number) => (
            <motion.div
              key={idx}
              className="collapse bg-[#111827]/50 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 hover:bg-[#1f2937]/60"
              whileHover={{ scale: 1.02 }}
            >
              <input type="radio" name="education-accordion" />
              <div className="collapse-title flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-lg sm:text-xl text-white">
                    {edu.title}
                  </span>
                  <span className="font-light text-sm sm:text-base text-gray-400">
                    {edu.subtitle}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {edu.year}
                </div>
              </div>

              <div className="collapse-content text-left text-sm sm:text-base text-gray-300">
                <ul className="list-disc list-inside space-y-1">
                  {edu.details.map((detail: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
