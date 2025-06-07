import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground"; 
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";
import Contact from "../Components/Contact";

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
