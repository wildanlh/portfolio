import GradientText from '../animations/GradientText';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { reccomendation } from '@/constant/constant';
import ShinyText from '../animations/ShinyText';
import { useT } from '../internalization/providers';

export default function Recommendations() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reccomendation.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="recommendations"
      ref={ref}
      className="w-full mx-auto container flex flex-col md:flex-row justify-center gap-10 md:gap-16 my-20 md:my-24 overflow-x-hidden"
    >
      {/* ===== Left Section ===== */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-base md:text-lg"
        >
          <b>{t('recommendation.badge')}</b>
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
          {t('recommendation.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0 }
          }
          transition={{ duration: 1, delay: 0.6 }}
        >
          <ShinyText
            text={t('recommendation.description')}
            disabled={false}
            speed={3}
            className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6"
          />
        </motion.div>
      </div>

      {/* ===== Right Section (Testimonials) ===== */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 150 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="w-full md:w-2/3 flex flex-col items-center relative z-10"
      >
        <div className="relative w-full flex justify-center overflow-visible">
          <motion.div
            key={index}
            className="relative w-full md:w-[90%] lg:w-[80%] min-h-[20rem] sm:min-h-[22rem] lg:min-h-[24rem]
                         border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(0,150,255,0.1)]
                         p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md bg-white/5
                         transition-all duration-500"
            initial={{ opacity: 0, x: 150, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -150, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileHover={{
              boxShadow: '0 0 25px rgba(0,150,255,0.3)',
            }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) {
                setIndex((prev) => (prev + 1) % reccomendation.length);
              } else if (info.offset.x > 50) {
                setIndex((prev) =>
                  prev === 0 ? reccomendation.length - 1 : prev - 1
                );
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col text-left"
            >
              <h3 className="font-bold text-xl sm:text-2xl">
                {reccomendation[index].name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                {reccomendation[index].role}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 text-sm sm:text-base text-gray-200 flex-1 leading-relaxed break-words"
            >
              “{reccomendation[index].text}”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-sm text-gray-500 mt-4"
            >
              {reccomendation[index].year}
            </motion.div>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex mt-6 gap-2 justify-center"
        >
          {reccomendation.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? 'bg-blue-500 scale-110' : 'bg-gray-400/50'
              }`}
            />
          ))}
        </motion.div>

        {/* LinkedIn Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-center"
        >
          <a
            href="https://www.linkedin.com/in/wildanlh/recommendations"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm sm:text-base"
          >
            {t('recommendation.button')} →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
