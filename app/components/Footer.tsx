import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm font-medium">
          Designed & Built by Prajjwal Saggar &copy; {new Date().getFullYear()}
        </p>
        
        <div className="flex gap-6">
          <a href="https://github.com/Prajjwal-Saggar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/prajjwal-saggar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href="https://codolio.com/profile/prajjwal-saggar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Codolio">
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
