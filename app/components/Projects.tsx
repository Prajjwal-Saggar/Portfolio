"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    name: "MobiFin",
    description: "Cross-platform finance tracker for Android & iOS with expense tracking, budget management, and analytics dashboards.",
    stack: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Prajjwal-Saggar",
    demo: "#",
  },
  {
    name: "MediFlow",
    description: "Distributed healthcare workflow backend managing patient records, appointment scheduling, and AI-powered workflow recommendations.",
    stack: ["Java", "Spring Boot", "Spring AI", "Redis", "Docker", "MySQL"],
    github: "https://github.com/Prajjwal-Saggar",
    demo: "#",
  },
  {
    name: "Project Name",
    description: "Short description of the project goes here. Replace this with your actual project info later.",
    stack: ["Tech 1", "Tech 2", "Tech 3"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-4xl md:text-5xl font-bold mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Folder size={32} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <FiGithub size={20} />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
