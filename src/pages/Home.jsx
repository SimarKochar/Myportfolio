import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-bg text-foreground overflow-x-hidden">
      {/* Theme */}
      <ThemeToggle />
      {/* Background */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* main content */}

      <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
        <Contact></Contact>
      </main>
    </div>
  );
};

export default Home;
