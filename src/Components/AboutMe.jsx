import React from 'react'
import {Code, User, Briefcase} from 'lucide-react'


const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web developer{" "}
            </h3>
            <p className="text-muted-foreground">
              With over 2 years of hands-on experience in web development, I
              have built and maintained responsive, user-centric websites using
              technologies like HTML, CSS, JavaScript, and modern frameworks.
              I've collaborated on various projects, ensuring clean code,
              performance optimization, and seamless UI/UX across devices.
            </p>
            <p className="text-muted-foreground">
              I’m a continuous learner with a strong enthusiasm for exploring
              new tools and trends in the web ecosystem. Whether it’s diving
              into advanced JavaScript, learning backend integrations, or
              mastering design systems, I’m always eager to grow and push the
              boundaries of what I can create.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"></Code>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and user-friendly websites using HTML,
                    CSS, JavaScript, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"></User>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and engaging user interfaces with a
                    focus on user experience and accessibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Contribution</h4>
                  <p className="text-muted-foreground">
                    Collaborating on various projects, ensuring clean code,
                    performance optimization, and seamless UI/UX across devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe
