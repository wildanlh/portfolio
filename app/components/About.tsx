import GradientText from '../animations/GradientText';
import ScrollFloat from '../animations/ScrollFloat';
import ScrollReveal from '../animations/ScrollReveal';

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="container mx-auto text-center max-w-5xl my-20 sm:my-24 md:my-32">
        {/* ====== Title ====== */}
        <GradientText
          colors={['#007AFF', '#80BDFF', '#007AFF', '#80BDFF', '#007AFF']}
          animationSpeed={10}
          showBorder={false}
          className="text-sm sm:text-base md:text-lg"
        >
          <b>A Little Story</b>
        </GradientText>

        <ScrollFloat
          textClassName="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          About Me
        </ScrollFloat>

        {/* ====== Description ====== */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={10}
          textClassName="font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose text-gray-300 py-6 sm:py-8 md:py-10"
        >
          I am a Website Developer with 1 year of experience, holding a degree
          in Informatics Engineering from Universitas Teknologi Bandung, and a
          distinction graduate in Cloud Computing from Bangkit Academy 2023
          Batch 2. Currently, I am working in Tokyo, Japan, as a company
          employee, where I am learning and adapting to the Japanese work
          environment while improving my Japanese communication skills. I am
          open to collaboration or job opportunities where I can apply
          everything I have learned so far or a new field to learn new things,
          as gaining diverse experiences excites me. My ultimate goal is to
          build and advance my career in the IT field in Japan.
        </ScrollReveal>
      </div>
    </section>
  );
}
