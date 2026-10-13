import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Copy, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { LinkedInIcon, FacebookIcon } from './SocialIcons';

interface ContactProps {
  prefilledService?: string;
  prefilledBudget?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, prefilledBudget }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledService || 'Facebook & Instagram Ads',
    budget: prefilledBudget || '$1,000 – $2,500/mo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledBudget) {
      setFormData((prev) => ({ ...prev, budget: prefilledBudget }));
    }
  }, [prefilledBudget]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // WhatsApp quick text link
  const generateWhatsAppLink = () => {
    const text = `Hi Hasib, I would like to inquire about ${formData.service}. My name is ${formData.name || 'there'}, and our estimated budget is ${formData.budget}. Message: ${formData.message || 'Looking forward to connecting.'}`;
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-semibold uppercase tracking-wider border border-electric-500/20">
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to <span className="text-gradient-electric">Grow Your Business?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you want to scale existing campaigns, lower your customer acquisition cost, or build a predictable lead pipeline from scratch, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Brand Credibility */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-navy-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I review every message personally. For fast inquiries or quick campaign discussions, WhatsApp or email is best.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-navy-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-electric-400" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-semibold text-electric-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-bold text-white hover:text-electric-300 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp Direct
                  </span>
                  <span className="text-[10px] text-emerald-300 bg-emerald-900/40 px-2 py-0.5 rounded font-medium">
                    Fastest Response
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white">
                    {PERSONAL_INFO.phone}
                  </span>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Open WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Location & Timezone Details */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-navy-950/60 border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-electric-400" />
                    Location
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-[10px] text-slate-300">Global Remote</div>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/60 border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    Response Time
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    Within 2 – 4 Hours
                  </div>
                  <div className="text-[10px] text-slate-300">Mon – Sat Active</div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 block mb-2">
                  Professional Profiles:
                </span>
                <div className="flex gap-2">
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-navy-950 hover:bg-navy-800 border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-navy-950 hover:bg-navy-800 border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Guarantees Box */}
            <div className="p-4 rounded-2xl bg-navy-900/40 border border-slate-800/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Your campaign data, business metrics, and strategic communications are strictly private under standard non-disclosure confidentiality.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-navy-900/90 border border-slate-800 p-7 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.name || 'there'}</strong>. I will review your requirements and reach out within 2 to 4 business hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 text-left text-xs text-slate-400 max-w-md mx-auto space-y-1.5">
                    <div><strong className="text-slate-300">Requested Service:</strong> {formData.service}</div>
                    <div><strong className="text-slate-300">Target Budget:</strong> {formData.budget}</div>
                    <div><strong className="text-slate-300">Email:</strong> {formData.email || PERSONAL_INFO.email}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-navy-800 hover:bg-navy-700 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Book a Strategy Conversation
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell me about your business, current marketing challenges, and target KPIs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@yourbrand.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selection */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Primary Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-white outline-none transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Full Digital Marketing Audit">Full Digital Marketing Audit</option>
                        <option value="Custom Multi-Channel Retainer">Custom Multi-Channel Retainer</option>
                      </select>
                    </div>

                    {/* Monthly Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Estimated Monthly Ad Spend
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-white outline-none transition-colors"
                      >
                        <option value="Under $500/mo">Under $500 / month</option>
                        <option value="$500 – $1,500/mo">$500 – $1,500 / month</option>
                        <option value="$1,500 – $3,500/mo">$1,500 – $3,500 / month</option>
                        <option value="$3,500 – $10,000/mo">$3,500 – $10,000 / month</option>
                        <option value="$10,000+/mo">$10,000+ / month (Enterprise Scaling)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Campaign Details & Target Goals
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Briefly describe your current business model, your website URL, and the main bottleneck you're looking to solve..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white bg-electric-600 hover:bg-blue-600 active:scale-98 shadow-glow-md hover:shadow-glow-lg transition-all duration-200"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Form Backend Integration Helper Note */}
                  <div className="text-[11px] text-slate-400 text-center pt-2">
                    Tip for deployment: Connect this form seamlessly to <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-electric-400 underline">Formspree</a> or <a href="https://emailjs.com" target="_blank" rel="noreferrer" className="text-electric-400 underline">EmailJS</a> in minutes using the provided documentation.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
