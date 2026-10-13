import React from 'react';
import type { Project } from '../data/portfolioData';
import { X, Target, ArrowRight, ShieldAlert } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onConsult: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onConsult }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-navy-900 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Block */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-electric-500/20 text-electric-400 border border-electric-500/30">
              {project.niche}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {project.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Hero Preview Image & Metrics Strip */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 sm:gap-4">
            {project.results.map((res, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-navy-900/90 backdrop-blur-md border border-slate-700/80 text-center">
                <span className="block text-xs text-slate-400 font-medium truncate">{res.label}</span>
                <span className="block text-lg sm:text-xl font-black text-electric-400">{res.value}</span>
                <span className="block text-[10px] text-emerald-400 font-bold">{res.trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: Objective & Challenge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-navy-850/70 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-electric-400 flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Primary Objective
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.objective}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-navy-850/70 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              Core Challenge
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>

        {/* Section 2: Strategy & Execution Protocol */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Strategy & Execution Steps
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.strategy}
          </p>

          <div className="space-y-2 pt-2">
            {project.executionSteps.map((step, sIdx) => (
              <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-electric-600/30 text-electric-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {sIdx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Tools & Infrastructure Used */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Platforms & Telemetry Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-navy-800 text-slate-300 border border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Want to implement a similar strategy for your company?
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-navy-800 hover:bg-navy-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(project.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-blue-600 shadow-glow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Discuss My Campaign</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
