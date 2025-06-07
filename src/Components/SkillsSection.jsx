import React, {useState} from 'react'


const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Frontend",
  },
  {
    name: "React",
    level: 85,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frontend",
  },
  {
    name: "Node.js",
    level: 80,
    category: "Backend",
  },
  {
    name: "Express.js",
    level: 75,
    category: "Backend",
  },
  {
    name: "MongoDB",
    level: 70,
    category: "Backend",
  },
  {
    name: "Git/GitHub",
    level: 80,
    category: "tools",
  },
  {
    name: "Figma",
    level: 75,
    category: "tools",
  },
  {
    name: "VSCode",
    level: 80,
    category: "tools",
  },
];

const categories=["all", "Frontend", "Backend", "tools"]

const SkillsSection = () => {
   const [activeCategory, setActiveCategory] = useState("all");

   const filteredSkills = skills.filter(
     (skill) => activeCategory === "all" || skill.category === activeCategory
   );

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2.5 mb-4 overflow-hidden">
                <div
                  className="bg-primary h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1 ">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <p className="text-gray-600">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection
