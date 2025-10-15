'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Particles from './backgrounds/particles';
import GradientText from './animations/GradientText';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-[#060010] overflow-hidden">
      {/* Background Particles */}
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

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[8rem] sm:text-[10rem] font-extrabold text-white select-none drop-shadow-[0_0_10px_rgba(0,122,255,0.5)]"
      >
        404
      </motion.h1>

      <GradientText
        colors={['#007AFF', '#80BDFF', '#007AFF']}
        animationSpeed={8}
        className="text-3xl sm:text-4xl font-bold mb-4"
      >
        Page Not Found
      </GradientText>

      <p className="text-gray-400 text-base sm:text-lg max-w-lg px-6">
        Looks like you’re lost in space. The page you’re looking for doesn’t
        exist or has been moved.
      </p>

      {/* Back Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
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

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
