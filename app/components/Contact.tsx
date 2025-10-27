import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ButtonAnimation from '../animations/ButtonAnimation';
import { useT } from '../internalization/providers';

export default function Contact() {
  const t = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 my-20 md:my-24"
    >
      <div className="container mx-auto flex flex-col justify-center items-center relative z-10">
        {/* ====== Contact Card Wrapper ====== */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 80, scale: 0.9 }
          }
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-4xl border border-white/10 bg-white/5 backdrop-blur-md 
                     rounded-2xl shadow-[0_0_40px_rgba(0,150,255,0.15)] 
                     py-12 sm:py-16 px-6 sm:px-10 flex flex-col items-center text-center"
        >
          {/* ====== Title ====== */}
          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: 40, rotateX: -10 }
            }
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       leading-tight text-white mb-8 drop-shadow-[0_0_20px_rgba(0,150,255,0.25)]"
          >
            {t('contact.title')}
          </motion.h1>

          {/* ====== Button ====== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ButtonAnimation href="mailto:wildanluqmanul@gmail.com">
              {t('contact.button')}
            </ButtonAnimation>
          </motion.div>

          {/* ====== Description ====== */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0 }
            }
            transition={{ duration: 1.1, delay: 0.8 }}
            className="mt-6 text-sm sm:text-base text-gray-400 max-w-md leading-relaxed"
          >
            {t('contact.description')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
