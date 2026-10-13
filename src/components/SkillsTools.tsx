import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const SkillsTools: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            Technical Stack & Stack Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Marketing Stack & <span className="text-gradient-electric">Analytics Tools</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I leverage industry-standard platforms to build data-backed campaigns, eliminate tracking errors, and optimize client growth.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-navy-850/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="pb-4 mb-6 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-electric-400" />
                    {category.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Tools in Category */}
                <div className="space-y-4">
                  {category.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className={`p-4 rounded-2xl border transition-all duration-200 ${
                        tool.highlight
                          ? 'bg-navy-900/90 border-electric-500/30 hover:border-electric-500/60 shadow-sm'
                          : 'bg-navy-900/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          {tool.name}
                        </h4>
                        {tool.highlight && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-electric-500/15 text-electric-300 border border-electric-500/30">
                            Core
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                        {tool.role}
                      </p>

                      {/* Feature Tags (No Arbitrary Percentages) */}
                      <div className="flex flex-wrap gap-1.5">
                        {tool.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-navy-950/80 text-slate-300 border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Regularly updated workflow
                </span>
                <span>Active 2026 stack</span>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Skill Philosophy Note */}
        <div className="mt-12 p-4 rounded-2xl bg-navy-950/60 border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-slate-200 font-semibold">Note on Transparency:</span> Rather than using subjective percentage bars (like "95% Meta Ads"), I measure proficiency by campaign outcomes, tracking accuracy, and clean documentation.
          </p>
        </div>

      </div>
    </section>
  );
};
