"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LanguageSwitcher from "../internalization/language-switcher";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <LanguageSwitcher /> */}
      <About />
      <Education />
      <Projects />
      <Recommendations />
      <Contact />
      <Footer />
    </>
  );
}
