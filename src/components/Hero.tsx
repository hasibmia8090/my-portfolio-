import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  BarChart2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambience Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-slate-700/80 shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-300">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Grow Your Business with{' '}
              <span className="text-gradient-electric">Smart Digital Marketing.</span>
            </h1>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              I help ambitious businesses turn ad spend into profitable revenue through data-backed Meta campaigns, high-intent Google Ads, targeted SEO, and high-converting marketing funnels. No guesswork—only measurable growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-electric-600 hover:bg-blue-600 active:scale-95 shadow-glow-md hover:shadow-glow-lg transition-all duration-200"
              >
                <span>Let’s Work Together</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-navy-900/80 hover:bg-navy-850 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <span>View My Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Credibility Mini-badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Data-First Attribution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Zero Vanity Metrics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Tailored Full-Funnel Plan</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dashboard Graphic + Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Card */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-slate-900/80 shadow-2xl">
                <div className="rounded-[22px] bg-navy-900/90 backdrop-blur-xl p-5 sm:p-6 border border-slate-700/50 space-y-5">
                  
                  {/* Profile Header Block */}
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                    <div className="relative">
                      {/* Stylized Profile Avatar Placeholder */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-electric-600 via-blue-700 to-cyan-400 p-[2px] shadow-glow-sm">
                        <div className="w-full h-full rounded-[14px] bg-navy-950 flex items-center justify-center overflow-hidden">
                          {/* Professional Stylized Initial / Placeholder Graphic */}
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-cyan-300">
                              HM
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-navy-900 flex items-center justify-center" title="Verified Available">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-white tracking-tight">
                          {PERSONAL_INFO.name}
                        </h2>
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-electric-500/10 text-electric-300 border border-electric-500/30">
                          PRO
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">
                        {PERSONAL_INFO.title}
                      </p>
                      <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {PERSONAL_INFO.brandName}
                      </p>
                    </div>
                  </div>

                  {/* Visual Digital Marketing Dashboard Mockup */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                      <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5 text-slate-300">
                        <BarChart2 className="w-3.5 h-3.5 text-electric-400" />
                        Campaign Performance Radar
                      </span>
                      <span className="text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        Live Tracking
                      </span>
                    </div>

                    {/* Metric 1: ROAS */}
                    <div className="p-3.5 rounded-xl bg-navy-950/80 border border-slate-800/90 hover:border-slate-700 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-electric-500/15 text-electric-400">
                            <Target className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Paid Ad Efficiency</div>
                            <div className="text-[10px] text-slate-400">Meta & Google Blended ROAS</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-black text-white">4.2x</span>
                          <span className="block text-[10px] font-bold text-emerald-400">+140% vs Baseline</span>
                        </div>
                      </div>
                      {/* Mini Bar Graph */}
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-electric-500 to-cyan-400 h-1.5 rounded-full w-[82%]" />
                      </div>
                    </div>

                    {/* Metric 2: Acquisition Cost */}
                    <div className="p-3.5 rounded-xl bg-navy-950/80 border border-slate-800/90 hover:border-slate-700 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Cost Per Acquisition (CPA)</div>
                            <div className="text-[10px] text-slate-400">High-intent funnel optimization</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-black text-emerald-400">-38%</span>
                          <span className="block text-[10px] text-slate-400">Avg. Savings</span>
                        </div>
                      </div>
                      {/* Mini Bar Graph */}
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-1.5 rounded-full w-[65%]" />
                      </div>
                    </div>

                    {/* Active Channels Chips */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-navy-800/90 text-slate-300 border border-slate-700/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Meta Ads Manager
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-navy-800/90 text-slate-300 border border-slate-700/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Google Ads (PMax)
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-navy-800/90 text-slate-300 border border-slate-700/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        GA4 Telemetry
                      </span>
                    </div>

                  </div>

                </div>
              </div>

              {/* Floating Decorative Badges */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-navy-900/95 border border-slate-700 shadow-xl backdrop-blur-md animate-float-slow">
                <div className="p-2 rounded-lg bg-electric-500/20 text-electric-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full-Funnel Testing</div>
                  <div className="text-[10px] text-slate-400">Continuous Conversion Optimization</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Impact Numbers Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-navy-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Data-Driven Approach</div>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-electric-400 tracking-tight">3x – 5x</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Target Campaign ROAS</div>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Full-Funnel</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Paid Ads + Organic SEO</div>
          </div>
          <div className="p-4 rounded-xl bg-navy-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">Zero</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Hidden Ad Waste</div>
          </div>
        </div>

      </div>
    </section>
  );
};
