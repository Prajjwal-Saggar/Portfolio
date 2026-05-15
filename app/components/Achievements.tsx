"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal } from "lucide-react";

const achievements = [
  {
    title: "1st Place",
    event: "Algo Connect Hackathon",
    location: "VIT Chennai",
    icon: <Trophy className="text-yellow-400" size={32} />,
    color: "from-yellow-400/20 to-yellow-600/5",
    border: "border-yellow-400/30",
  },
  {
    title: "3rd Place",
    event: "Innovate X Impact Hackathon",
    location: "",
    icon: <Medal className="text-orange-400" size={32} />,
    color: "from-orange-400/20 to-orange-600/5",
    border: "border-orange-400/30",
  },
  {
    title: "3rd Place",
    event: "CodeZilla Hackathon",
    location: "VIT Chennai",
    icon: <Medal className="text-orange-400" size={32} />,
    color: "from-orange-400/20 to-orange-600/5",
    border: "border-orange-400/30",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`glass-card p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden border ${achievement.border} hover:-translate-y-2 transition-transform duration-300`}
              >
                {/* Subtle gradient background based on medal color */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-50`}></div>
                
                <div className="relative z-10">
                  <div className="mb-4 p-4 bg-[#0a0a0a]/50 rounded-full inline-block backdrop-blur-md shadow-lg">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-200 mb-1">
                    {achievement.event}
                  </p>
                  {achievement.location && (
                    <p className="text-sm text-gray-400">
                      {achievement.location}
                    </p>
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
