import ButtonAnimation from '../animations/ButtonAnimation';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 my-20 md:my-24"
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Card Wrapper */}
        <div className="w-full max-w-4xl border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl py-12 sm:py-16 px-6 sm:px-10 flex flex-col items-center text-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
            Let's create your next <br className="hidden sm:block" /> big idea.
          </h1>

          <ButtonAnimation href="mailto:wildanluqmanul@gmail.com">
            Contact Me
          </ButtonAnimation>

          <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-md">
            Available for collaboration, freelance, or full-time opportunities.
            Let’s make something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}
