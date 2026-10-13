import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';
import { LinkedInIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-600 to-electric-400 p-[1px]">
                <div className="w-full h-full bg-navy-950 rounded-[11px] flex items-center justify-center font-bold text-electric-400">
                  H
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">
                  {PERSONAL_INFO.brandName}
                </span>
                <span className="text-xs text-slate-400">
                  {PERSONAL_INFO.name} • {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping businesses drive measurable revenue through high-converting Meta Ads, Google Ads, SEO, and full-funnel digital marketing strategies.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-400 hover:text-electric-400 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-electric-400 transition-colors">About Hasib</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Services</a></li>
              <li><a href="#skills" className="hover:text-electric-400 transition-colors">Skills & Stack</a></li>
              <li><a href="#portfolio" className="hover:text-electric-400 transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-electric-400 transition-colors">Work Process</a></li>
              <li><a href="#faqs" className="hover:text-electric-400 transition-colors">Client FAQs</a></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Meta Ads (FB & IG)</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Google Ads & PMax</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Organic Search (SEO)</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Social Content Strategy</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">GA4 Event Telemetry</a></li>
              <li><a href="#services" className="hover:text-electric-400 transition-colors">Email Automation</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-200 font-semibold">{PERSONAL_INFO.email}</p>
              <p>WhatsApp: {PERSONAL_INFO.phone}</p>
              <p>Based in {PERSONAL_INFO.location}</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Q2/Q3 Projects
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.brandName}. All rights reserved. Built with precision for {PERSONAL_INFO.name}.
          </div>

          <div className="flex items-center gap-6">
            <a href="https://hasibmia.com" className="hover:text-electric-400 transition-colors">
              {PERSONAL_INFO.portfolioUrl.replace('https://', '')}
            </a>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-850 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
