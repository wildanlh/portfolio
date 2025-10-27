'use client';

import { useT } from '../internalization/providers';
import GradientText from '../animations/GradientText';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Education from './Education';

export default function About() {
  const t = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex  flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 bg-[#060010]"
    >
      {/* === MAIN CONTENT === */}
      <div
        ref={ref}
        className="relative z-10 container mx-auto text-center max-w-5xl my-20 sm:my-24 md:my-32"
      >
        {/* ====== Title Badge ====== */}
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-base md:text-lg"
        >
          <b>{t('about.badge')}</b>
        </GradientText>

        {/* ====== Title Animation ====== */}
        <motion.h2
          initial={{ opacity: 0, y: 60, rotateX: -30, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
              : { opacity: 0 }
          }
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-white relative z-10"
          style={{
            textShadow:
              '0px 0px 30px rgba(0, 170, 255, 0.4), 0px 0px 60px rgba(0, 170, 255, 0.15)',
          }}
        >
          {t('about.title')}
        </motion.h2>

        {/* ====== Blue Glow Behind Title ====== */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 w-[60%] h-[120%] bg-blue-500/20 blur-[120px] rounded-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />

        {/* ====== Description ====== */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose text-gray-300 py-6 sm:py-8 md:py-10"
        >
          {t('about.description')}
        </motion.p>
      </div>

      <Education />
    </section>
  );
}
