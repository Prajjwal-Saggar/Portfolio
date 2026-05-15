"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, Code2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block">
            <span className="bg-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              Available for new opportunities
            </span>
          </div>
          
          <h1 className="font-technor text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hey, I'm <br />
            <span className="text-gradient">Prajjwal Saggar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Full Stack Developer &middot; Java Engineer &middot; Building scalable systems and seamless experiences
          </p>
          
          <p className="text-gray-400 text-lg border-l-2 border-blue-500 pl-4 py-1">
            VIT Chennai &middot; B.Tech CSE &middot; 400+ DSA problems solved
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              View My Work
            </a>
            <a href="/assets/cv/ResumePrajjwalSaggar-April-2026.pdf" target="_blank" rel="noopener noreferrer" className="glass-card font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-6 items-center">
            <a href="https://github.com/Prajjwal-Saggar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/prajjwal-saggar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:prajjwalsaggar1@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://codolio.com/profile/prajjwal-saggar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Codolio">
              <Code2 size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] flex justify-center items-center perspective-[1000px]"
        >
          {/* Subtle glowing orb behind the illustration */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px]"
          />

          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotateX: [0, 6, 0],
              rotateY: [0, -8, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full h-full max-w-[500px] transform-style-preserve-3d"
          >
            <Image
              src="/assets/illustrations/herosection3DimageIllustration.png"
              alt="3D Illustration"
              fill
              className="object-contain"
              style={{
                // Blends the dark background of the image with the website background
                mixBlendMode: "lighten",
                // Fades out the bottom so it doesn't have a hard cut-off
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
              priority
            />
          </motion.div>
          
          {/* Floor shadow to enhance 3D floating effect */}
          <motion.div 
            animate={{ 
              scale: [1, 0.8, 1],
              opacity: [0.4, 0.1, 0.4]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[250px] h-[20px] bg-black/60 blur-xl rounded-[100%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
