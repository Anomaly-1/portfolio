'use client';
import React from 'react';
import HomeIconButton from '@/components/HomeIconButton';
import { Github, Mail, ExternalLink } from 'lucide-react';
import { DotBackground } from '@/components/dotbackground';

export default function AboutPage() {
  return (
    <DotBackground>
      <div className="relative w-full min-h-screen px-6 py-16">
        <HomeIconButton className="fixed top-8 left-8 z-50" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-lg">
              Arjun Hariharan
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              Software developer passionate about building efficient applications and exploring AI.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-20">
            <a 
              href="https://github.com/Anomaly-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-light">GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            {/* <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-light">LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a> */}
            <a 
              href="mailto:cognitivetech52@gmail.com" 
              className="group flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-light">Email</span>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 text-center drop-shadow-md">Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-neutral-800/50 hover:border-yellow-400/30">
                <h3 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">Frontend</h3>
                <div className="space-y-2">
                  <div className="text-white font-light">React</div>
                  <div className="text-white font-light">TypeScript</div>
                  <div className="text-white font-light">Next.js</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-neutral-800/50 hover:border-yellow-400/30">
                <h3 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">Backend</h3>
                <div className="space-y-2">
                  <div className="text-white font-light">Python</div>
                  <div className="text-white font-light">Node.js</div>
                  <div className="text-white font-light">PostgreSQL</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-neutral-800/50 hover:border-yellow-400/30">
                <h3 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">Mobile</h3>
                <div className="space-y-2">
                  <div className="text-white font-light">Expo</div>
                  <div className="text-white font-light">React Native</div>
                  <div className="text-white font-light">Swift</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-neutral-800/50 hover:border-yellow-400/30">
                <h3 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">AI/ML</h3>
                <div className="space-y-2">
                  <div className="text-white font-light">TensorFlow</div>
                  <div className="text-white font-light">PyTorch</div>
                  <div className="text-white font-light">Scikit-learn</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-neutral-800/50 hover:border-yellow-400/30">
                <h3 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">IoT</h3>
                <div className="space-y-2">
                  <div className="text-white font-light">C++</div>
                  <div className="text-white font-light">Arduino</div>
                  <div className="text-white font-light">Raspberry Pi</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-neutral-800/50 hover:border-yellow-400/30">
                <h3 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">Tools</h3>
                <div className="space-y-2">
                  <div className="text-white font-light">Git</div>
                  <div className="text-white font-light">Docker</div>
                  <div className="text-white font-light">AWS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="text-center">
            <h2 className="text-2xl font-light text-white mb-8 drop-shadow-md">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {['Full-Stack Development', 'Machine Learning', 'API Design', 'Database Design', 'Cloud Computing', 'DevOps', 'Problem Solving', 'Team Collaboration'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-neutral-800/60 border border-neutral-600 rounded-full text-neutral-200 text-sm font-light hover:border-yellow-400/50 hover:text-yellow-400 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-neutral-700 text-center">
            <p className="text-neutral-400 text-sm font-light">
              © 2025 Arjun Hariharan. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </DotBackground>
  );
}
