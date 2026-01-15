import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChatButton } from './components/ChatButton';
import { RAGChatInterface } from './components/RAGChatInterface';
import { projectsData } from './data/projects';
import { skillsData } from './data/skills';
import { certificationsData } from './data/certifications';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projectsData} />
      <SkillsSection skills={skillsData} />
      <CertificationsSection certifications={certificationsData} />
      <ContactSection />
      <Footer />
      
      <ChatButton onClick={() => setIsChatOpen(true)} />
      <RAGChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;