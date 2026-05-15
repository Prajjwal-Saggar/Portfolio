"use client";

import { motion } from "framer-motion";
import { FileBadge, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Oracle AI Foundation Associate",
    issuer: "Oracle",
    link: "/assets/certificates/oracleFoundationAssociateAI.pdf",
  },
  {
    name: "Daira EdTech Internship Certificate",
    issuer: "Daira EdTech",
    link: "/assets/certificates/DairaIntershipCertificate.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-technor text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl flex items-start gap-6 hover:bg-white/10 transition-colors group"
              >
                <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 group-hover:scale-110 group-hover:text-violet-400 transition-all">
                  <FileBadge size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 font-medium mb-6">
                    Issued by {cert.issuer}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-white/5 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg transition-colors border border-white/10 group-hover:border-blue-500/50"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
