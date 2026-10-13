import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SkillsTools } from './components/SkillsTools';
import { Portfolio } from './components/Portfolio';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { RoiCalculator } from './components/RoiCalculator';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>();
  const [prefilledBudget, setPrefilledBudget] = useState<string | undefined>();

  const scrollToContact = (service?: string, budget?: string) => {
    if (service) setPrefilledService(service);
    if (budget) setPrefilledBudget(budget);
    
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanWithBudget = (budget: number, roas: number) => {
    const formatted = `$${budget.toLocaleString()} / month (Target ROAS: ${roas.toFixed(1)}x)`;
    scrollToContact('Full Marketing Strategy & Audit', formatted);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-electric-500 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenContact={() => scrollToContact()} />

        {/* About Section */}
        <About onOpenContact={() => scrollToContact()} />

        {/* Services Section */}
        <Services onSelectService={(serviceTitle) => scrollToContact(serviceTitle)} />

        {/* Skills & Tools Section */}
        <SkillsTools />

        {/* Case Studies / Portfolio Section */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5-Step Work Process Section */}
        <WorkProcess />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onPlanWithBudget={handlePlanWithBudget} />

        {/* Testimonials Section */}
        <Testimonials onOpenContact={() => scrollToContact()} />

        {/* Client FAQs Section */}
        <FaqSection />

        {/* Contact Section */}
        <Contact 
          prefilledService={prefilledService} 
          prefilledBudget={prefilledBudget} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsult={(projectTitle) => {
          setSelectedProject(null);
          scrollToContact(`Campaign strategy based on "${projectTitle}"`);
        }}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={PERSONAL_INFO.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-200"
          title="Direct WhatsApp Chat with Hasib Mia"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold hidden sm:inline-block tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}

export default App;
