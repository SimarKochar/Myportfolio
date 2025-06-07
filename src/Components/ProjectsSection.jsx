import React from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Book Store",
    description: "A simple book store application built with React, Firebase and MongoDB.",
    image: "/projects/Project1.png",
    tags: ["React", "TailwindCSS", "JavaScript", "MongoDB", "Firebase"],
    link: "https://book-store-frontend-sigma-beige.vercel.app/",
    githubUrl: "https://github.com/SimarKochar/bookstore-mern.git",
  },
  {
    id: 2,
    title: "Home Scope",
    description: "A house hunting application built with React",
    image: "/projects/Project2.png",
    tags: ["React", "JavaScript"],
    link: "https://homescope-v4.vercel.app/",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my web development projects, where I've applied modern
        technologies to create intuitive and responsive websites. From
        full-stack applications to simple, functional interfaces, each project
        showcases my ability to turn ideas into interactive, user-centered
        solutions. Take a look at how I’ve built seamless and engaging web
        experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-center mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex - justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}></ExternalLink>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}></Github>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://github.com/SimarKochar"
          target="_blank"
          rel="noopener noreferrer"
          className="cosmic-button w-fit flex item-center mx-auto gap-1 "
        >
          Check My GitHub <ArrowRight size={25}></ArrowRight>
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection
