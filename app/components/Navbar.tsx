'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import GlassSurface from '../animations/GlassSurface';
import AnimatedContent from '../animations/AnimatedContent';
import { FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { id: 'about', title: 'About', icon: <FaUser /> },
  { id: 'projects', title: 'Projects', icon: <FaFolderOpen /> },
  { id: 'contact', title: 'Contact', icon: <FaEnvelope /> },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState('about');
  const width = useTransform(scrollY, [0, 200], ['100%', '60%']);

  const sectionIds = ['about', 'projects', 'contact'];
  const sectionRefs = useRef<Record<string, IntersectionObserver>>({});

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const section = document.getElementById(id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
      sectionRefs.current[id] = observer;
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('about');
  };

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="hidden md:flex fixed w-full top-0 z-40">
        <div className="container mx-auto flex items-center justify-center py-8 text-white font-bold">
          <motion.div
            style={{
              width,
              borderRadius: 999,
              height: 50,
            }}
            className="flex justify-center"
          >
            <GlassSurface
              width={'100%'}
              height={50}
              borderRadius={50}
              backgroundOpacity={0.8}
              className="flex items-center justify-between px-6"
            >
              {/* Logo */}
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <Image
                  src="/logo.svg"
                  alt="WEEL logomark"
                  width={74}
                  height={74}
                  className="cursor-pointer"
                  onClick={scrollToTop}
                />
              </AnimatedContent>

              {/* Links */}
              <div className="flex items-center gap-x-10 font-medium">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="cursor-pointer font-bold group bg-transparent border-none outline-none"
                  >
                    <motion.div
                      initial={{ y: -30 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      className="relative overflow-hidden"
                    >
                      <p
                        className={`duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                          activeSection === link.id
                            ? 'text-blue-400'
                            : 'text-white group-hover:-translate-y-7'
                        }`}
                      >
                        {link.title}
                      </p>
                      <p
                        className={`absolute top-7 left-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                          activeSection === link.id
                            ? 'text-blue-400'
                            : 'text-white group-hover:top-0'
                        }`}
                      >
                        {link.title}
                      </p>
                    </motion.div>
                  </button>
                ))}
              </div>
            </GlassSurface>
          </motion.div>
        </div>
      </nav>

      {/* ===== MOBILE NAVBAR (BOTTOM MENU) ===== */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden"
      >
        <GlassSurface
          width={'100%'}
          height={60}
          borderRadius={50}
          backgroundOpacity={0.9}
          className="flex justify-around items-center text-white font-semibold px-5"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`flex flex-col items-center justify-center transition-all ${
                activeSection === link.id
                  ? 'text-blue-400 scale-110'
                  : 'text-white opacity-70 hover:opacity-100'
              }`}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-lg"
              >
                {link.icon}
              </motion.div>
              <span className="text-[10px] mt-1">{link.title}</span>
            </button>
          ))}
        </GlassSurface>
      </motion.nav>
    </>
  );
}
