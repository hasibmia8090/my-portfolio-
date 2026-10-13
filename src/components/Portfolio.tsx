import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  ShieldCheck
} from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'paid-ads' | 'seo' | 'content'>('all');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeTab === 'all') return true;
    return proj.category === activeTab;
  });

  const tabs = [
    { id: 'all', label: 'All Campaigns' },
    { id: 'paid-ads', label: 'Paid Advertising (Meta & Google)' },
    { id: 'seo', label: 'Search Engine Optimization (SEO)' },
    { id: 'content', label: 'Content & Social Growth' },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            Case Studies & Proof of Concept
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-electric">Marketing Campaigns</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real strategic frameworks designed to solve conversion bottlenecks, lower acquisition costs, and maximize campaign return on investment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-electric-600 text-white shadow-glow-sm'
                  : 'bg-navy-900/90 text-slate-300 hover:text-white hover:bg-navy-850 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-navy-900/80 border border-slate-800 overflow-hidden hover:border-electric-500/40 hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Overlay Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-950/90 text-electric-400 border border-slate-700/80 backdrop-blur-md">
                      {project.niche}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-navy-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Highlight KPI in image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                    {project.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx} className="px-3 py-1.5 rounded-xl bg-navy-900/95 border border-slate-700/80 backdrop-blur-md">
                        <span className="text-[10px] text-slate-400 block font-medium">{res.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-white">{res.value}</span>
                          <span className="text-[10px] font-bold text-emerald-400">{res.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Objective */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Marketing Objective:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.objective}
                    </p>
                  </div>

                  {/* Strategy & Execution Summary */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Strategy & Execution:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.strategy}
                    </p>
                  </div>

                  {/* Tools Strip */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-navy-950 text-slate-400 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-navy-800 hover:bg-electric-600 border border-slate-700 hover:border-transparent transition-all duration-200"
                >
                  <span>View Case Study Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Clear Professional Transparency Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-navy-900/60 border border-slate-800 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
          <ShieldCheck className="w-5 h-5 text-electric-400 shrink-0" />
          <p className="text-xs text-slate-400 text-left sm:text-center leading-relaxed">
            <strong className="text-slate-200">Ethical Integrity Disclaimer:</strong> The case studies displayed above illustrate our structured campaign workflows, targeting methodologies, and historical benchmark performance. Client-identifiable proprietary data is kept confidential under NDA.
          </p>
        </div>

      </div>
    </section>
  );
};
