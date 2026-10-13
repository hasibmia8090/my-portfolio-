import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onOpenContact: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenContact }) => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            Client Feedback & Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Experiences & <span className="text-gradient-electric">Results</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            What collaborating partners say about our campaign execution, communication transparency, and revenue impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl bg-navy-900/80 border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Top Row: Stars and Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-electric-500/50 transition-colors" />
                </div>

                {/* Feedback Body */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>

                {/* Highlighted Outcome Badge */}
                <div className="inline-block px-3 py-1 rounded-lg bg-navy-950 border border-electric-500/30 text-xs font-bold text-electric-400">
                  {testimonial.metric}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {testimonial.avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {testimonial.clientName}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {testimonial.role}, <span className="text-slate-300">{testimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Clear placeholder label tag */}
              {testimonial.isPlaceholder && (
                <div className="absolute -top-2.5 right-6 px-2 py-0.5 rounded bg-navy-950 text-[10px] font-semibold text-slate-400 border border-slate-800">
                  Sample Feedback Template
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Editorial Transparency Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-navy-850/50 border border-slate-800 text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white">Ready to be our next featured success story?</strong> Every new client campaign is documented with benchmark performance metrics and periodic review check-ins.
          </p>
          <button
            onClick={onOpenContact}
            className="text-xs font-bold text-electric-400 hover:text-white underline underline-offset-4 transition-colors"
          >
            Start your growth partnership today &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
