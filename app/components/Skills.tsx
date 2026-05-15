"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", image: "/assets/logos/Java.png" },
      { name: "JavaScript", image: null },
      { name: "TypeScript", image: null },
      { name: "Python", image: null },
      { name: "C++", image: "/assets/logos/cpp.png" },
      { name: "SQL", image: null },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", image: "/assets/logos/React_logo_wordmark.png" },
      { name: "Next.js", image: null },
      { name: "React Native", image: null },
      { name: "HTML5", image: null },
      { name: "CSS3", image: null },
      { name: "Tailwind CSS", image: "/assets/logos/Tailwind CSS.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", image: "/assets/logos/Spring_Logo.png" },
      { name: "Node.js", image: null },
      { name: "Express.js", image: null },
      { name: "REST APIs", image: null },
      { name: "Microservices", image: null },
      { name: "Keycloak", image: null },
      { name: "Redis", image: "/assets/logos/Redis_Logo.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", image: null },
      { name: "PostgreSQL", image: "/assets/logos/PostgresSQL.png" },
      { name: "MongoDB", image: "/assets/logos/MongoDB.png" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", image: "/assets/logos/Docker.png" },
      { name: "Git", image: "/assets/logos/Git.png" },
      { name: "AWS", image: null },
      { name: "Spring AI", image: null },
      { name: "NPM", image: "/assets/logos/NPM.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-4xl md:text-5xl font-bold mb-16 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="flex flex-col gap-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-400 mb-6 border-b border-white/10 pb-2 inline-block">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:border-blue-500/50 transition-colors group cursor-default"
                    >
                      {skill.image ? (
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="object-contain group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all"
                          />
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />
                      )}
                      <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
