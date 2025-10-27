'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { useRef } from 'react';
import Particles from './backgrounds/particles';
import GradientText from './animations/GradientText';

export default function NotFound() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center h-screen text-center bg-[#060010] overflow-hidden"
    >
      {/* === Background Particles === */}
      <Particles
        className="absolute inset-0"
        particleColors={['#ffffff', '#007AFF', '#80BDFF']}
        particleCount={120}
        particleSpread={15}
        speed={0.15}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* === 404 Text === */}
      <motion.h1
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 100, scale: 0.9 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[7rem] sm:text-[9rem] md:text-[10rem] font-extrabold text-white select-none
                   drop-shadow-[0_0_25px_rgba(0,150,255,0.4)]
                   [text-shadow:0_0_30px_rgba(0,170,255,0.4),0_0_60px_rgba(0,170,255,0.15)]"
      >
        404
      </motion.h1>

      {/* === Title === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={8}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Page Not Found
        </GradientText>
      </motion.div>

      {/* === Description === */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.6 }}
        className="text-gray-400 text-base sm:text-lg max-w-lg px-6 leading-relaxed"
      >
        Looks like you’re lost in space. The page you’re looking for doesn’t
        exist or has been moved.
      </motion.p>

      {/* === Back Button === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 25px rgba(0,150,255,0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full 
                     text-white font-semibold hover:bg-white hover:text-[#060010] 
                     transition-all duration-300 ease-in-out"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </motion.div>

      {/* === Subtle Top Glow Only (no bottom blur) === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-[#007AFF10] via-transparent to-transparent pointer-events-none"
      />
    </div>
  );
}
