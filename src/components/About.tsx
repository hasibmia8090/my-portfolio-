import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Target, 
  CheckCircle, 
  BarChart, 
  Zap, 
  ShieldCheck
} from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: Target,
      title: "Audience & Intent Precision",
      desc: "Marketing without clear targeting is just expensive noise. I analyze buyer psychology, search habits, and behavioral triggers to place your message exactly where decisions happen.",
    },
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      desc: "Every creative angle, ad headline, and budget allocation is governed by performance data, GA4 conversions, and CPA targets—never vague personal intuition.",
    },
    {
      icon: Zap,
      title: "Full-Funnel Alignment",
      desc: "A great ad fails if the landing page doesn't convert. I look at the whole customer journey: first impression, landing page friction, follow-up emails, and retargeting.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Attribution",
      desc: "You always know where every single marketing dollar went. Clean, honest reporting without inflated numbers or misleading vanity metrics.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-900/50">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            About Hasib Mia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Strategic Partner for <span className="text-gradient-electric">Measurable Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a digital marketing specialist dedicated to helping businesses establish strong market visibility, acquire qualified buyers, and scale sustainably.
          </p>
        </div>

        {/* Core Profile Narrative & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-navy-850/70 border border-slate-800 shadow-xl space-y-6">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Marketing Grounded in Business Economics
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                In today's competitive digital space, simply boosting posts or running basic traffic ads does not build a sustainable business. Effective digital marketing requires understanding unit economics—knowing your target Cost Per Acquisition (CPA), Customer Lifetime Value (LTV), and conversion bottlenecks.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Through <strong className="text-white font-semibold">{PERSONAL_INFO.brandName}</strong>, I focus on building cohesive acquisition systems. By connecting direct-response advertising (Meta Ads & Google Ads) with organic search authority (SEO) and conversion-focused content, I help businesses bridge the gap between ad spend and actual profit.
              </p>

              {/* Guiding Principles Checklist */}
              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm">Commitment to Measurable Results:</span>
                    <span className="text-slate-300 text-sm ml-1">Focusing on pipeline revenue, lead quality, and ROAS rather than superficial impressions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm">Adaptive & Agile Execution:</span>
                    <span className="text-slate-300 text-sm ml-1">Fast creative refreshes, proactive bid management, and continuous optimization based on algorithm updates.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm">Ethical Marketing Practices:</span>
                    <span className="text-slate-300 text-sm ml-1">No black-hat tactics, misleading ad hooks, or falsified campaign metrics. Genuine business growth built to last.</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact CTA Banner */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Location & Operations</div>
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <span>{PERSONAL_INFO.location}</span>
                    <span className="text-xs text-slate-500">• Worldwide Remote Collaboration</span>
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-electric-600 hover:bg-blue-600 shadow-glow-sm transition-all"
                >
                  Schedule a Consultation
                </button>
              </div>

            </div>
          </div>

          {/* Right 4 Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-navy-850/50 border border-slate-800 hover:border-electric-500/40 hover:bg-navy-850/80 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-electric-500/10 text-electric-400 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white group-hover:text-electric-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
