"use client";

import { motion } from "framer-motion";
import { Code, GraduationCap, Briefcase, Trophy } from "lucide-react";

export default function About() {
  const stats = [
    { label: "DSA Problems", value: "400+", icon: <Code className="text-blue-400" /> },
    { label: "CGPA", value: "8.59", icon: <GraduationCap className="text-violet-400" /> },
    { label: "Internships/Roles", value: "3", icon: <Briefcase className="text-blue-400" /> },
    { label: "Hackathon Wins", value: "3", icon: <Trophy className="text-violet-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-4xl md:text-5xl font-bold mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                I'm a Full Stack Developer and Java Engineer currently pursuing my B.Tech in Computer Science at VIT Chennai. I specialise in building end-to-end web and cross-platform mobile applications using React.js, Next.js, React Native, Node.js, and Spring Boot.
              </p>
              <p>
                I care deeply about clean code, system design, and creating high-performance user experiences. When I'm not coding, I'm usually solving algorithmic challenges or exploring new technologies to add to my stack.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
                >
                  <div className="mb-3 p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
