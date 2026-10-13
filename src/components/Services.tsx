import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { 
  Share2, 
  Target, 
  Search, 
  TrendingUp, 
  FileText, 
  Sparkles, 
  Mail, 
  BarChart3,
  Check,
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return Share2;
      case 'Target': return Target;
      case 'Search': return Search;
      case 'TrendingUp': return TrendingUp;
      case 'FileText': return FileText;
      case 'Sparkles': return Sparkles;
      case 'Mail': return Mail;
      case 'BarChart3': return BarChart3;
      default: return Target;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            Tailored Growth Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-electric">Digital Marketing Services</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every service is engineered around one core goal: driving real business impact, higher conversion efficiency, and measurable ROI for your company.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="relative rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-electric-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-glow-sm group hover:-translate-y-1"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-electric-600 to-cyan-500 text-[10px] font-bold text-white shadow-sm uppercase tracking-wider">
                    High Demand
                  </div>
                )}

                <div className="space-y-4">
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-electric-500/15 text-electric-400 flex items-center justify-center group-hover:bg-electric-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-electric-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Business Value Highlight Box */}
                  <div className="p-3 rounded-xl bg-navy-950/70 border border-slate-800/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Business Value:
                    </span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {service.businessValue}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-electric-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-navy-850 hover:bg-electric-600 hover:text-white border border-slate-700 hover:border-transparent transition-all duration-200"
                  >
                    <span>Get Started with {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Strategy Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Not sure which marketing channel fits your business stage?
            </h4>
            <p className="text-sm text-slate-300">
              I provide an initial audit to analyze your market, review current ad spend, and recommend the best strategy.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Full Marketing Strategy & Audit')}
            className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-electric-600 hover:bg-blue-600 shadow-glow-sm transition-all whitespace-nowrap"
          >
            Request Free Strategy Audit
          </button>
        </div>

      </div>
    </section>
  );
};
