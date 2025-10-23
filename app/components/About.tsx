import { useT } from "../internalization/providers";
import GradientText from "../animations/GradientText";
import ScrollFloat from "../animations/ScrollFloat";
import ScrollReveal from "../animations/ScrollReveal";

export default function About() {
  const t = useT();
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto text-center max-w-5xl my-20 sm:my-24 md:my-32">
        {/* ====== Title ====== */}
        <GradientText colors={["#007AFF", "#80BDFF", "#007AFF", "#80BDFF", "#007AFF"]} animationSpeed={10} showBorder={false} className="text-sm sm:text-base md:text-lg">
          <b>{t("about.badge")}</b>
        </GradientText>

        <ScrollFloat
          textClassName="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}>
          {t("about.title")}
        </ScrollFloat>

        {/* ====== Description ====== */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={10}
          textClassName="font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose text-gray-300 py-6 sm:py-8 md:py-10">
          {t("about.description")}
        </ScrollReveal>
      </div>
    </section>
  );
}
