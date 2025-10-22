import Image from 'next/image';
import GradientText from '../animations/GradientText';
import ScrollFloat from '../animations/ScrollFloat';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reccomendation } from '@/constant/constant';
import ShinyText from '../animations/ShinyText';

export default function Recommendations() {
  const [index, setIndex] = useState(0);

  // Auto-slide setiap 6 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reccomendation.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="recommendations"
      className="w-full mx-auto container flex flex-col md:flex-row justify-center gap-10 md:gap-16 my-20 md:my-24 overflow-x-hidden"
    >
      {/* ===== Left Section ===== */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-base md:text-lg"
        >
          <b>Recommendation</b>
        </GradientText>

        <ScrollFloat
          textClassName="font-bold text-3xl sm:text-4xl md:text-5xl mt-2"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          What others say
        </ScrollFloat>

        <ShinyText
          text="I've mentored with some amazing people over the years, here is what they have to say about me."
          disabled={false}
          speed={3}
          className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6"
        />
      </div>

      {/* ===== Right Section (Testimonials) ===== */}
      <div className="w-full md:w-2/3 flex flex-col items-center">
        {/* Card */}
        <div className="relative w-full flex justify-center overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="relative w-full md:w-[90%] lg:w-[80%] min-h-[20rem] sm:min-h-[22rem] lg:min-h-[24rem] border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md bg-white/5"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
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
              <div className="flex flex-col text-left">
                <h3 className="font-bold text-xl sm:text-2xl">
                  {reccomendation[index].name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {reccomendation[index].role}
                </p>
              </div>

              <p className="mt-4 text-sm sm:text-base text-gray-200 flex-1 leading-relaxed break-words">
                “{reccomendation[index].text}”
              </p>

              <div className="text-xs sm:text-sm text-gray-500 mt-4">
                {reccomendation[index].year}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex mt-6 gap-2 justify-center">
          {reccomendation.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index ? 'bg-blue-500 scale-110' : 'bg-gray-400/50'
              }`}
            />
          ))}
        </div>

        {/* LinkedIn Link */}
        <div className="mt-6 text-center">
          <a
            href="https://www.linkedin.com/in/wildanlh/recommendations"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm sm:text-base"
          >
            View more on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
