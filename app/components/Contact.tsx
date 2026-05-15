"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, Code2, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-[100%] blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-5xl md:text-6xl font-bold mb-8">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 font-medium">
            I'm open to internships, full-time roles, and interesting collaborations.
          </p>

          <a
            href="mailto:prajjwalsaggar1@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-16"
          >
            <Mail size={24} />
            Say Hello
          </a>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3 text-gray-300 font-medium bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <Phone size={20} className="text-blue-400" />
              +91 6307636917
            </div>

            <div className="flex gap-8">
              <a href="https://github.com/Prajjwal-Saggar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                <FiGithub size={32} />
              </a>
              <a href="https://linkedin.com/in/prajjwal-saggar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all">
                <FiLinkedin size={32} />
              </a>
              <a href="https://codolio.com/profile/prajjwal-saggar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 hover:scale-110 transition-all" title="Codolio">
                <Code2 size={32} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
