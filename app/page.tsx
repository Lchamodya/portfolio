'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Mail, ArrowDown, Code2, Palette, Cpu, ChevronRight, X } from 'lucide-react';

const NAV_LINKS = ['Work', 'About', 'UI/UX', 'Contact'];

const SKILLS = [
  { category: 'Design', items: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems', 'Wireframing'] },
  { category: 'Development', items: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Python', 'C#'] },
  { category: 'Tools', items: ['Git & GitHub', 'Firebase', 'IoT Systems', 'Raspberry Pi', 'MySQL', 'Agile'] },
];

const DEV_PROJECTS = [
  {
    id: 1,
    title: 'Pharmic',
    subtitle: "Bachelor's Final Year Project",
    description: 'A comprehensive pharmacy management web application built as a final year project at the University of Plymouth. Features intuitive UI design with full CRUD operations for managing pharmaceutical inventory and prescriptions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    year: '2023',
    university: 'University of Plymouth',
    degree: 'BSc Software Engineering',
    link: 'https://github.com/Lchamodya/pharmic',
    accent: '#7CB518',
    type: 'Academic',
  },
  {
    id: 2,
    title: 'Air Quality Monitoring IoT',
    subtitle: "Master's Research Project",
    description: 'An IoT-based indoor air quality monitoring system built using Raspberry Pi Pico W and BME680 sensor. Measures temperature, humidity, pressure, and gas resistance to calculate real-time AQI. Syncs data to Firebase cloud and hosts a local HTTP server for remote monitoring.',
    tech: ['Python', 'Raspberry Pi Pico W', 'BME680', 'Firebase', 'HTML', 'IoT'],
    year: '2026',
    university: 'University of Vaasa',
    degree: 'MSc Computing Sciences',
    link: 'https://github.com/Bio-Tingi/Air-Quality-Monitoring-IoT',
    accent: '#4A90D9',
    type: 'Research',
  },
];

const UI_PROJECTS = [
  {
    id: 1,
    title: 'Next-Gen Consulting',
    category: 'UI/UX Design',
    description: 'Complete UI/UX design for a modern consulting firm, featuring professional aesthetics, intuitive navigation, and engaging user experience for service-based business.',
    tools: ['Figma', 'UI Design', 'Prototyping'],
    link: 'https://www.behance.net/gallery/230878133/Next-Gen-Consulting-UIUX-Design',
    company: 'Pixel Designs',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/924a57230878133.687f2be41758d.jpg',
  },
  {
    id: 2,
    title: 'Ceylotec Website',
    category: 'Website Design',
    description: 'Modern tech company website design with clean layouts, responsive components, and professional branding. Focused on showcasing services and building client trust.',
    tools: ['Figma', 'Web Design', 'Branding'],
    link: 'https://www.behance.net/gallery/216641181/Ceylotec-Website-Design',
    company: 'Pixel Designs',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4ab189216641181.6783b50ca7576.jpg',
  },
  {
    id: 3,
    title: 'Rooster Commerce',
    category: 'E-Commerce Design',
    description: 'E-commerce website design featuring user-friendly shopping experience, product showcases, and streamlined checkout flows. Optimized for conversions and engagement.',
    tools: ['Figma', 'E-Commerce', 'UX Design'],
    link: 'https://www.behance.net/gallery/216640353/Rooster-Commerce-Website-Design',
    company: 'Pixel Designs',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ea6089216640353.6783b150c1be3.jpg',
  },
  {
    id: 4,
    title: 'Ceylon Eco Spices',
    category: 'E-Commerce Website',
    description: 'Premium spice e-commerce platform with intuitive product catalog, bulk ordering system, and responsive design. Achieved 98% page speed score with enhanced user experience.',
    tools: ['Web Design', 'E-Commerce', 'UX'],
    link: 'https://codezela.com/portfolio/ceylon-eco/',
    company: 'Codezela',
    image: '/codezela/ceylon_eco_spices.jpeg',
  },
  {
    id: 5,
    title: 'Ceylumin',
    category: 'E-Commerce Website',
    description: 'Luxury Ceylon cinnamon brand website featuring product showcases, customer testimonials, and seamless shopping experience. Premium e-commerce solution for artisan products.',
    tools: ['WordPress', 'E-Commerce', 'Branding'],
    link: 'https://ceylumin.com',
    company: 'ddigital',
    image: '/codezela/ceylumin.png',
  },
  {
    id: 6,
    title: 'Rumikmart',
    category: 'Mobile App Design',
    description: 'Mobile e-commerce application with intuitive shopping flows, secure checkout, and engaging user interface. Complete app design and development for Android platform.',
    tools: ['Mobile Design', 'UX', 'App Development'],
    link: 'https://play.google.com/store/apps/details?id=com.codezela.rumikmart&hl=en',
    company: 'ddigital',
    image: '/codezela/rumik_mart1.webp',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden">
      <div
        className="fixed pointer-events-none z-50 w-80 h-80 rounded-full opacity-[0.25] blur-2xl transition-all duration-500"
        style={{ background: 'radial-gradient(circle, #4A90D9, transparent)', left: cursorPos.x - 160, top: cursorPos.y - 160 }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="font-mono text-sm tracking-widest text-[#1A1A1A]/60 uppercase">
            Lochini · Chamodya
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-10">
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                className="text-sm font-medium tracking-wide text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors relative group">
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4A90D9] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </motion.div>
          <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <div className="space-y-1.5"><div className="w-6 h-px bg-current" /><div className="w-4 h-px bg-current" /></div>}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#F5F0E8] flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} className="text-3xl font-light">{link}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <motion.section ref={heroRef} style={{ opacity: heroOpacity, y: heroY }}
        className="min-h-screen flex flex-col justify-end px-8 pb-20 max-w-7xl mx-auto pt-32">
        <div className="relative">
          <div className="absolute -top-16 -left-4 text-[200px] font-black text-[#1A1A1A]/[0.03] leading-none select-none pointer-events-none">LC</div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#4A90D9]" />
            <span className="font-mono text-xs tracking-widest text-[#4A90D9] uppercase">Portfolio · 2025</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }}
            className="text-[clamp(48px,8vw,120px)] font-black leading-[0.95] tracking-tight mb-8">
            Lochini<br /><span className="text-[#4A90D9]">Chamodya</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-6 items-start justify-between">
            <div className="max-w-xl">
              <p className="text-lg text-[#1A1A1A]/60 font-light leading-relaxed">
                UI/UX Designer & Software Engineer from Sri Lanka,<br />
                currently pursuing MSc in Computing Sciences at<br />
                <span className="text-[#1A1A1A] font-medium">University of Vaasa, Finland.</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 font-mono text-xs tracking-widest text-[#1A1A1A]/40 uppercase">
              <span>Sri Lanka → Finland</span>
              <span>BSc Software Eng.</span>
              <span>UI/UX · Dev · IoT</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-12 flex gap-4">
            <button onClick={() => scrollTo('work')}
              className="group flex items-center gap-2 bg-[#1A1A1A] text-[#F5F0E8] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#4A90D9] transition-colors duration-300">
              View Work <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://github.com/Lchamodya" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#1A1A1A]/20 px-6 py-3 text-sm font-medium tracking-wide hover:border-[#1A1A1A] transition-colors duration-300">
              <Github size={14} /> GitHub
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-2 text-[#1A1A1A]/30">
            <span className="font-mono text-xs tracking-widest">scroll</span>
            <ArrowDown size={14} className="animate-bounce" />
          </motion.div>
        </div>
      </motion.section>

      {/* WORK */}
      <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
        <SectionHeader number="01" title="Development Projects" />
        <div className="mt-16 space-y-6">
          {DEV_PROJECTS.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 bg-[#1A1A1A] text-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" title="About" light />
          <div className="mt-16 grid md:grid-cols-2 gap-16">
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7 }} className="text-lg text-[#F5F0E8]/70 font-light leading-relaxed mb-6">
                I am Lochini Chamodya, a 24-year-old Sri Lankan designer and developer currently studying
                at the University of Vaasa in Finland. My work bridges the gap between thoughtful design
                and technical implementation.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }} className="text-lg text-[#F5F0E8]/70 font-light leading-relaxed">
                With a background in UI/UX design and software engineering, I create digital experiences
                that are both beautiful and functional. Passionate about sustainable systems, IoT, and human-centered design.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }} className="mt-10 space-y-4">
                <EducationItem degree="MSc Computing Sciences" major="Sustainable & Autonomous Systems" school="University of Vaasa, Finland" year="2025 – Present" flag="🇫🇮" />
                <EducationItem degree="BSc Software Engineering" major="2nd Class Honours (Upper Division)" school="University of Plymouth, UK" year="2020 – 2023" flag="🇬🇧" />
                <EducationItem degree="UI/UX Designer" major="Project-Based Engagement" school="Codezela Technologies, Sri Lanka" year="Mar 2023" flag="🇱🇰" />
              </motion.div>
            </div>
            <div className="space-y-8">
              {SKILLS.map((group, i) => (
                <motion.div key={group.category} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <div className="flex items-center gap-3 mb-3">
                    {i === 0 && <Palette size={14} className="text-[#4A90D9]" />}
                    {i === 1 && <Code2 size={14} className="text-[#4A90D9]" />}
                    {i === 2 && <Cpu size={14} className="text-[#4A90D9]" />}
                    <span className="font-mono text-xs tracking-widest text-[#F5F0E8]/40 uppercase">{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="border border-[#F5F0E8]/10 px-3 py-1.5 text-sm text-[#F5F0E8]/70 hover:border-[#4A90D9]/50 hover:text-[#F5F0E8] transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX */}
      <section id="ui/ux" className="py-32 px-8 max-w-7xl mx-auto">
        <SectionHeader number="03" title="UI/UX Projects" />
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-4 text-[#1A1A1A]/50 text-sm font-mono tracking-wide max-w-2xl">
          Professional UI/UX projects created at{' '}
          <a href="https://codezela.com" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline font-medium">
            Codezela Technologies
          </a>
          {' '}(+ sub-brand{' '}
          <a href="https://ddigital.lk" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline font-medium">
            ddigital
          </a>
          ) and{' '}
          <a href="https://www.behance.net/pixeldesign_lk" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline font-medium">
            Pixel Designs
          </a>
        </motion.p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {UI_PROJECTS.map((project, i) => (
            <motion.a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-[#1A1A1A]/10 hover:border-[#4A90D9]/30 transition-all duration-300 hover:shadow-lg block overflow-hidden">
              <div className="h-56 relative overflow-hidden bg-[#1A1A1A]/[0.04]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-[#4A90D9]" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs tracking-widest text-[#4A90D9]/70 uppercase">{project.category}</span>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/30 border border-[#1A1A1A]/10 px-2 py-0.5 rounded">
                    {project.company}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold group-hover:text-[#4A90D9] transition-colors">{project.title}</h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/50 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs text-[#1A1A1A]/40 font-mono">#{tool.toLowerCase().replace(' ', '')}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 border border-[#4A90D9]/20 p-8 bg-[#4A90D9]/[0.03]">
          <div className="flex items-start gap-4">
            <Palette size={20} className="text-[#4A90D9] mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold mb-2">UI/UX Design Experience</h4>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                Worked as a UI/UX Designer at <span className="text-[#1A1A1A] font-medium">Codezela Technologies (Pvt) Ltd</span> and collaborated with{' '}
                <span className="text-[#1A1A1A] font-medium">Pixel Designs</span>, designing intuitive interfaces for web and mobile applications. 
                Specializing in user research, prototyping, and creating engaging digital experiences through UX strategies and developer collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-8 border-t border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="04" title="Contact" />
          <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="text-3xl font-black leading-tight mb-6">
                Let us create<br /><span className="text-[#4A90D9]">something together.</span>
              </h3>
              <p className="text-[#1A1A1A]/60 font-light leading-relaxed max-w-sm">
                Open to design collaborations, freelance projects, and opportunities.
                Based in Vaasa, Finland — working globally.
              </p>
              <div className="mt-10 space-y-4">
                <a href="https://github.com/Lchamodya" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-sm font-medium hover:text-[#4A90D9] transition-colors">
                  <div className="w-10 h-10 border border-[#1A1A1A]/10 flex items-center justify-center group-hover:border-[#4A90D9]/30 transition-colors">
                    <Github size={16} />
                  </div>
                  github.com/Lchamodya
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-center gap-4 text-sm text-[#1A1A1A]/50">
                  <div className="w-10 h-10 border border-[#1A1A1A]/10 flex items-center justify-center"><Mail size={16} /></div>
                  Available via GitHub
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:block">
              <div className="space-y-4 pl-4">
                {['UI/UX Design', 'Web Development', 'IoT & Systems', 'Open to Collaborate'].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#4A90D9] rounded-full" />
                    <span className="text-sm font-medium text-[#1A1A1A]/60">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1A1A1A]/10 px-8 py-8 max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-mono text-xs text-[#1A1A1A]/30 tracking-widest uppercase">Lochini Chamodya © 2026</span>
        <span className="font-mono text-xs text-[#1A1A1A]/30 tracking-widest uppercase">Vaasa, Finland 🇫🇮</span>
      </footer>
    </div>
  );
}

function SectionHeader({ number, title, light = false }: { number: string; title: string; light?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6 }} className="flex items-baseline gap-5">
      <span className={`font-mono text-xs tracking-widest ${light ? 'text-[#F5F0E8]/30' : 'text-[#1A1A1A]/25'}`}>{number}</span>
      <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${light ? 'text-[#F5F0E8]' : 'text-[#1A1A1A]'}`}>{title}</h2>
    </motion.div>
  );
}

function EducationItem({ degree, major, school, year, flag }: { degree: string; major: string; school: string; year: string; flag: string }) {
  return (
    <div className="border border-[#F5F0E8]/10 p-5 hover:border-[#4A90D9]/20 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{flag}</span>
            <span className="font-bold text-sm">{degree}</span>
          </div>
          <p className="text-xs text-[#4A90D9]/80 mb-0.5">{major}</p>
          <p className="text-xs text-[#F5F0E8]/40">{school}</p>
        </div>
        <span className="font-mono text-xs text-[#F5F0E8]/30 whitespace-nowrap">{year}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof DEV_PROJECTS[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/25 transition-all duration-300 overflow-hidden">
      <div className="p-8 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs tracking-widest uppercase px-2 py-0.5 text-white rounded"
                style={{ background: project.accent }}>{project.type}</span>
              <span className="font-mono text-xs text-[#1A1A1A]/40">{project.year}</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-1">{project.title}</h3>
            <p className="text-sm text-[#1A1A1A]/50 mb-4">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-[#1A1A1A]/50 bg-[#1A1A1A]/[0.05] px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 border border-[#1A1A1A]/10 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-[#F5F0E8] transition-all duration-200">
              <Github size={14} />
            </a>
            <div className={`w-10 h-10 border border-[#1A1A1A]/10 flex items-center justify-center transition-all duration-300 ${expanded ? 'bg-[#1A1A1A] text-[#F5F0E8]' : ''}`}>
              <ChevronRight size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
            <div className="px-8 pb-8 border-t border-[#1A1A1A]/10 pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">{project.description}</p>
                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-xs text-[#1A1A1A]/40 uppercase tracking-widest">University</span>
                    <p className="mt-1 text-sm font-medium">{project.university}</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#1A1A1A]/40 uppercase tracking-widest">Programme</span>
                    <p className="mt-1 text-sm font-medium">{project.degree}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4A90D9] hover:underline mt-2">
                    View on GitHub <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
