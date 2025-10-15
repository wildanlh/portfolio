import Image from 'next/image';
import FadeContent from '../animations/FadeContent';
import GradientText from '../animations/GradientText';
import ShinyText from '../animations/ShinyText';
import SplitText from '../animations/SplitText';
import Particles from '../backgrounds/particles';
import Skills from './Skills';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* ===== Particles Background ===== */}
        <Particles
          className="w-full h-screen bg-fixed"
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        {/* ===== Logo di Tengah Atas ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-10 left-1/2 -translate-x-1/2 z-10 block md:hidden"
        >
          <Image
            src="/logo.svg"
            alt="WEEL logomark"
            width={80}
            height={80}
            className="mx-auto"
          />
        </motion.div>

        {/* ===== Main Text ===== */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-8 text-center">
          {/* Nama */}
          <SplitText
            tag="h1"
            text="Wildan Luqmanul Hakim"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center"
            delay={100}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Role */}
          <GradientText
            colors={['#007AFF', '#80BDFF', '#007AFF', '#80BDFF', '#007AFF']}
            animationSpeed={10}
            showBorder={false}
            className="text-lg sm:text-2xl md:text-3xl mt-3"
          >
            Software Engineer
          </GradientText>

          {/* Deskripsi */}
          <ShinyText
            text="Passionate with creative, attractive and responsive design."
            disabled={false}
            speed={3}
            className="text-xs sm:text-sm md:text-base mt-2 px-4 sm:px-8"
          />
        </div>

        {/* ===== Skills Section ===== */}
        <div className="absolute inset-x-0 bottom-4 md:bottom-6 text-center container mx-auto w-[90%] sm:w-3/4 md:w-1/2">
          <Skills />
        </div>
      </div>
    </FadeContent>
  );
}
