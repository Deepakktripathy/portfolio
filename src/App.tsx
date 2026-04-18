/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal,
  X,
  Twitter,
  Globe,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Play,
  Github,
  Mail,
  Zap,
  Coffee,
  Code2
} from "lucide-react";
import myPhoto from "../utils/img.jpg";

// --- Terminal Resume Data ---
const RESUME_TEXT = `
guest@deeps-portfolio:~$ ./fetch_resume.sh

[ MACHINE LEARNING ENGINEER @ QUANTIPHI ]
[ Aug 2024 - Present | Bangalore ]

> Owned an end-to-end ML evaluation pipeline in Kubeflow
  (unified model conversion, deployment & evaluation).
> Automated artifact handoff & server cleanup
  => Saved ~45 mins of manual effort per run.
> Built Kubeflow pipelines for OWL-ViT
  (TFRecord generation -> training -> DynamoDB metadata).
> Productionized ML workflows with GPU-aware scheduling.
> Engineered badminton posture analysis CV solution
  (MediaPipe, YOLOv8, DeepSORT) bridging review time by 80%.
> Achieved 94% accuracy in rule-based posture stroke engine.
> Led camera drift detection via adaptive homography
  => Reduced manual correction by 50%.

-----------------------------------------
[ ML ENGINEER INTERN @ QUANTIPHI ]
[ Feb 2024 - Jul 2024 | Bangalore ]

> Developed GenAI tool with Azure OpenAI for CSV visualizations.
> Optimized query pipeline (Latency dropped from 60s -> 15s).
> YOLOv8 + CLIP for stand/sit classification in ride-safety.

-----------------------------------------
[ EDUCATION ]
B.Tech CSE @ SRM Institute of Science and Technology
2020 - 2024 | CGPA: 9.15/10

guest@deeps-portfolio:~$ _
`;

// --- Components ---

const DraggableSticker = ({ 
  children, 
  className, 
  initialPosition 
}: { 
  children: React.ReactNode; 
  className: string; 
  initialPosition: { x: number, y: number } 
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
      whileHover={{ scale: 1.1, rotate: (Math.random() - 0.5) * 20 }}
      whileDrag={{ scale: 1.2, zIndex: 50, rotate: 0 }}
      initial={{ x: initialPosition.x, y: initialPosition.y, opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: Math.random() * 0.5 }}
      className={`absolute cursor-grab active:cursor-grabbing font-mono text-sm md:text-base font-bold shadow-[4px_4px_0px_#000] border-2 border-black z-10 select-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Marquee string
  const techStack = Array(10).fill("YOLOv8 • KUBEFLOW • PYTORCH • CV • MLOPS • LLMs • AZURE OPENAI • ");

  return (
    <div ref={containerRef} className="min-h-screen bg-dark text-white relative flex flex-col font-display selection:bg-neon selection:text-black pb-20">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <div className="font-bold text-2xl tracking-tighter shadow-black">DEEP.</div>
          <div className="hidden md:flex gap-6 font-mono text-sm">
            <a href="https://x.com/deepakkttwt" target="_blank" className="hover:text-neon transition-colors">/twitter</a>
            <a href="https://deeps07.hashnode.dev/" target="_blank" className="hover:text-neon transition-colors">/blog</a>
            <button onClick={() => setShowTerminal(true)} className="hover:text-neon transition-colors">/resume.sh</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 overflow-hidden">
        
        {/* The Draggable Stickers (Interactive fun elements) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="relative w-full h-full max-w-6xl mx-auto pointer-events-auto">
             <DraggableSticker className="bg-neon text-black px-4 py-2 rotate-[-6deg]" initialPosition={{ x: -200, y: -150 }}>
               10k+ Strokes 🏸
             </DraggableSticker>
             <DraggableSticker className="bg-white text-black px-6 py-3 rounded-full rotate-[4deg]" initialPosition={{ x: 300, y: -200 }}>
               MLOps Go Brrr ⚙️
             </DraggableSticker>
             <DraggableSticker className="bg-purple-500 text-white px-4 py-2 rotate-[-12deg]" initialPosition={{ x: -300, y: 150 }}>
               OWL-ViT 🦉
             </DraggableSticker>
             <DraggableSticker className="bg-blue-500 text-white px-5 py-2 clip-path-polygon rotate-[8deg]" initialPosition={{ x: 250, y: 100 }}>
               Accuracy: 94% 🎯
             </DraggableSticker>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image Placeholder */}
            <div className="flex justify-center mb-8">
              <div className="relative group cursor-pointer">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-neon p-1 overflow-hidden bg-black shadow-[8px_8px_0px_#D4FF00] transition-all duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[4px] group-hover:shadow-[2px_2px_0px_#D4FF00]">
                  {/* TODO: Replace this src with your actual photo URL or imported image */}
                  <img 
                    src={myPhoto} 
                    alt="Deep - Profile Placeholder" 
                    className="w-full h-full object-cover rounded-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Instruction Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap border-2 border-black z-20 group-hover:bg-neon transition-colors">
                </div>
              </div>
            </div>

            <div className="font-mono text-neon mb-6">{"<Machine Learning Engineer />"}</div>
            <h1 className="text-7xl md:text-[8rem] font-bold leading-[0.85] tracking-tighter uppercase mb-8">
              I teach <br />
              <span className="text-transparent border-text" style={{ WebkitTextStroke: "2px white" }}>sand to </span> 
              <br className="md:hidden" />
              think.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mt-8">
              Based in Bangalore. Currently making computers watch badminton and automating the un-automatable at <span className="text-white font-medium">Quantiphi</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 font-mono text-sm">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTerminal(true)}
                className="bg-neon text-black px-8 py-4 font-bold border-2 border-black flex items-center gap-3 shadow-[4px_4px_0px_#fff] hover:shadow-[1px_1px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full sm:w-auto justify-center"
              >
                <Terminal size={18} /> ./view_resume.sh
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#writing"
                className="bg-card text-white px-8 py-4 font-bold border-2 border-white/20 flex items-center gap-3 hover:bg-white hover:text-black hover:border-white transition-all w-full sm:w-auto justify-center"
              >
                <Globe size={18} /> Read My Mind
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-neon text-black py-4 overflow-hidden border-y-2 border-white/10 my-10 font-mono text-xl font-bold flex items-center select-none">
        <div className="animate-marquee whitespace-nowrap">
          {techStack.join("")}
        </div>
        <div className="animate-marquee whitespace-nowrap" aria-hidden="true">
          {techStack.join("")}
        </div>
      </div>

      {/* Social / Editorial Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6 w-full">
          
          {/* Twitter Card */}
          <motion.a 
            href="https://x.com/deepakkttwt" 
            target="_blank"
            whileHover={{ scale: 0.98 }}
            className="group block bg-[#1DA1F2] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-[-20%] right-[-10%] opacity-20 transform group-hover:rotate-12 transition-transform duration-700">
               <Twitter size={400} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div>
                  <div className="w-16 h-16 bg-white text-[#1DA1F2] rounded-full flex items-center justify-center mb-8 shadow-xl">
                     <Twitter size={32} />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">I rant & <br/>share learnings.</h2>
               </div>
               <div className="flex items-center gap-4 text-xl font-bold border-2 border-white/30 rounded-full py-4 px-6 self-start backdrop-blur-sm group-hover:bg-white group-hover:text-[#1DA1F2] transition-colors">
                 Follow @deepakkttwt <ArrowRight size={24} />
               </div>
            </div>
          </motion.a>

          {/* Hashnode Blog Card */}
          <div id="writing" className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-card border border-white/10 rounded-[3rem] p-10 md:p-12 flex-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="font-mono text-neon mb-4 flex items-center gap-2">
                   <Globe size={16} /> hashnode.dev
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Deep dives into MLOps, LLMs, and Vision.</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                  When I solve a frustrating infrastructure bug or scale an OWL-ViT pipeline, I document it so you don't have to suffer.
                </p>
                <a 
                  href="https://deeps07.hashnode.dev/"
                  target="_blank"
                  className="font-mono bg-white text-black px-6 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-neon transition-colors"
                >
                  Read the Blog <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            {/* Quick Contact Banners */}
            <div className="grid grid-cols-2 gap-6 h-40">
              <a href="mailto:deepak_tripathy@rocketmail.com" className="bg-card border border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:border-neon hover:text-neon transition-colors group">
                 <Mail size={32} className="group-hover:scale-110 transition-transform" />
                 <span className="font-mono text-sm font-bold uppercase tracking-widest">Email</span>
              </a>
              <a href="https://github.com/Deepakktripathy" target="_blank" className="bg-white text-black rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-neon transition-colors group">
                 <Github size={32} className="group-hover:scale-110 transition-transform" />
                 <span className="font-mono text-sm font-bold uppercase tracking-widest">GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Terminal Overlay (The Actual Resume) */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#0a0a0a] border border-[#333] rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden shadow-neon/10"
            >
              {/* Terminal Header */}
              <div className="bg-[#111] px-4 py-3 flex items-center justify-between border-b border-[#333] select-none">
                <div className="flex gap-2">
                  <button onClick={() => setShowTerminal(false)} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-xs text-gray-500">bash — deep@portfolio: ~/experience</div>
                <div className="w-10"></div> {/* Spacer for balance */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 overflow-y-auto terminal-scroll font-mono text-sm md:text-base text-gray-300 whitespace-pre-wrap leading-relaxed h-full relative">
                <div className="text-neon mb-4">
                  $ chmod +x view_resume.sh && ./view_resume.sh
                </div>
                {RESUME_TEXT}
                
                {/* Blinking cursor */}
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="inline-block w-2.5 h-4 md:h-5 bg-neon ml-1 align-middle"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-20 text-center font-mono text-xs text-gray-500 py-10">
         <p>© {new Date().getFullYear()} Deep | Cooked up in Bangalore</p>
         <p className="mt-2">No generic resume templates were harmed.</p>
      </footer>
    </div>
  );
}

