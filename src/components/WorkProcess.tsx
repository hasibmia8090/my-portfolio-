import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { 
  CheckCircle2, 
  Search, 
  Compass, 
  Rocket, 
  BarChart, 
  Repeat
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return Search;
      case 2: return Compass;
      case 3: return Rocket;
      case 4: return BarChart;
      case 5: return Repeat;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-navy-900/40">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-electric-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My 5-Step <span className="text-gradient-electric">Growth Framework</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A proven, predictable scientific methodology that eliminates wasted ad spend and scales client revenue systematically.
          </p>
        </div>

        {/* Process Timeline Steps */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {WORK_PROCESS.map((step) => {
            const Icon = getStepIcon(step.step);
            return (
              <div
                key={step.step}
                className="relative rounded-3xl bg-navy-850/60 border border-slate-800 p-6 sm:p-8 hover:border-electric-500/50 hover:bg-navy-850/90 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {/* Number Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-electric-500/15 border border-electric-500/30 text-electric-400 flex items-center justify-center font-bold text-lg group-hover:bg-electric-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      0{step.step}
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-electric-300 transition-colors flex items-center gap-2">
                        <span>{step.title}</span>
                        <Icon className="w-4 h-4 text-electric-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-xs sm:text-sm text-electric-400 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Step Timeline Indicator */}
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-950 text-slate-300 border border-slate-800 shrink-0">
                    {step.timeline}
                  </span>
                </div>

                <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-navy-950/70 rounded-2xl p-4 border border-slate-800/90 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Tangible Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
