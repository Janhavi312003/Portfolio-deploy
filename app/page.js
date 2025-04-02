import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/hero-section/about";
// import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
   <>
    <HeroSection />
    <AboutSection />
    {/* <Experience /> */}
    <Skills />
    <Education />
    <ContactSection />
   </>
  );
}
