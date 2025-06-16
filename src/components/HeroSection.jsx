import React from 'react'
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className=" container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, I am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">
              Simar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Singh Kochar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a web developer with a strong interest in creating
            clean, responsive, and user-focused websites. I love exploring new
            technologies, frameworks, and design principles to improve both the
            performance and aesthetics of my projects. With every line of code,
            I aim to deliver better experiences, and I approach learning with
            genuine enthusiasm—constantly leveling up my skills to stay ahead in
            the ever-evolving world of web development.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
}

export default HeroSection
