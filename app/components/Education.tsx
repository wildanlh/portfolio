import { educations } from '@/constant/constant';
import GradientText from '../animations/GradientText';
import ScrollFloat from '../animations/ScrollFloat';
import ShinyText from '../animations/ShinyText';

export default function Education() {
  return (
    <section
      id="education"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 my-20 md:my-24"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-14">
        {/* ===== Left Content ===== */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <GradientText
            colors={['#007AFF', '#80BDFF', '#007AFF', '#80BDFF', '#007AFF']}
            animationSpeed={10}
            showBorder={false}
            className="text-sm sm:text-base md:text-lg"
          >
            Some of my
          </GradientText>

          <ScrollFloat
            textClassName="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Education
          </ScrollFloat>

          <ShinyText
            text="Achievements and certifications that I have obtained so far."
            disabled={false}
            speed={3}
            className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6"
          />
        </div>

        {/* ===== Right Content (Education List) ===== */}
        <div className="w-full md:w-1/2 space-y-4">
          {educations.map((edu, idx) => (
            <div
              className="collapse bg-[#111827]/50 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 hover:bg-[#1f2937]/60"
              key={idx}
            >
              <input type="radio" name="education-accordion" />
              <div className="collapse-title flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 py-4">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-lg sm:text-xl">
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
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
