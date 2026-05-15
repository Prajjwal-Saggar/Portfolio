"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Backend Engineer",
    company: "Taiyari24",
    duration: "Jan 2026 – April 2026",
    location: "Remote",
    description: "Refactored backend with Spring Boot, implemented RBAC, optimised DB queries for high-concurrency production traffic.",
    certificate: null,
  },
  {
    role: "Full Stack Developer",
    company: "Daira EdTech",
    duration: "Nov 2025 – Feb 2026",
    location: "Remote",
    description: "Built scalable web apps with React.js, Node.js, Spring Boot. Developed microservices for auth and content delivery; integrated Keycloak.",
    certificate: "/assets/certificates/DairaIntershipCertificate.pdf",
  },
  {
    role: "Full Stack Developer Intern",
    company: "NexEV Solutions Pvt. Ltd",
    duration: "Mar 2025 – May 2025",
    location: "Chennai, India",
    description: "Built RESTful APIs, responsive React.js frontends. Worked on microservices-based IoT integration.",
    certificate: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#0a0a0a] shadow-[0_0_10px_rgba(139,92,246,0.6)]" />

                <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-violet-500/30 transition-colors group">
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-xl font-medium text-gray-300 mt-1 mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-blue-400" /> {exp.company}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} /> {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} /> {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/5"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
