import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Mail, MapPin, 
  Download, ExternalLink, Code2, 
  ChevronRight, Server, Layout, Database, Send,
  Activity, Users, Brain, CheckCircle2, Loader2
} from 'lucide-react';
import { CV_DATA, EXPERIENCES, PROJECTS, SKILLS } from './constants';

const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="glass max-w-sm w-full p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-indigo-500" />
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400">
            <CheckCircle2 size={48} />
          </div>
        </div>
        <h3 className="text-2xl font-black mb-3 tracking-tighter">Message Envoyé !</h3>
        <p className="text-slate-400 mb-8 font-medium leading-relaxed">
          Merci pour votre intérêt. Vos données ont été transmises avec succès. Je reviendrai vers vous très prochainement.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-cyan-500 hover:text-white transition-all shadow-xl"
        >
          Fermer
        </button>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;
      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'Expériences', id: 'experience' },
    { name: 'Projets', id: 'projects' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-montserrat tracking-tighter cursor-pointer flex items-center gap-2 group"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-slate-950 text-xl shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-300">S</div>
          <span className="hidden sm:inline">SKANDER<span className="text-cyan-400">.</span></span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-[11px] font-black transition-all uppercase tracking-[0.2em] relative py-2 ${
                (activeSection === link.id || (link.id === 'home' && activeSection === '')) 
                ? 'text-cyan-400' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              {(activeSection === link.id || (link.id === 'home' && activeSection === '')) && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all shadow-xl shadow-indigo-600/20 text-white uppercase"
            >
              Hire Me
            </motion.button>
          </a>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-2 rounded-xl transition-all ${isOpen ? 'bg-white/10 text-cyan-400 rotate-90' : 'text-white hover:bg-white/5'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-xl font-black uppercase tracking-widest transition-all ${
                    (activeSection === link.id || (link.id === 'home' && activeSection === '')) 
                    ? 'text-cyan-400 scale-110' 
                    : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                  <button className="w-full bg-cyan-500 py-5 rounded-2xl font-black uppercase tracking-widest text-slate-950 shadow-xl shadow-cyan-500/20">
                    Contactez-moi
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-cyan-400"></span>
            <span className="glass px-4 py-1.5 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-500/20">
              Ingénieur Informatique Full-Stack
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            Skander <br />
            <span className="text-gradient">Chouk</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
            {CV_DATA.bio} Expert en écosystème <b>MERN</b>, passionné par l'intégration d'<b>IA</b> et l'optimisation des flux <b>DevOps</b>.
          </p>
          <div className="flex flex-wrap gap-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl shadow-indigo-600/40"
            >
              Voir Projets <ChevronRight size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/Chouk Skander -CV.pdf';
                link.download = 'Chouk Skander -CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="glass px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Curriculum Vitae <Download size={18} />
            </motion.button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 text-slate-500">
            <a href={CV_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-125 transform-gpu" title="LinkedIn"><Linkedin size={26} /></a>
            <a href="https://github.com/skanderchouk" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all hover:scale-125 transform-gpu" title="GitHub"><Github size={26} /></a>
            <a href={`mailto:${CV_DATA.email}`} className="hover:text-cyan-400 transition-all hover:scale-125 transform-gpu" title="Email"><Mail size={26} /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl bg-slate-900 aspect-[4/5] max-w-md mx-auto group">
            <img 
              src="https://res.cloudinary.com/dftgawfdc/image/upload/v1767002636/skander_fnemgo.png" 
              alt="Skander Chouk" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-12 -right-12 w-full h-full border-[1px] border-dashed border-cyan-500/20 rounded-[4rem] -z-10" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute -bottom-12 -left-12 w-full h-full border-[1px] border-dashed border-indigo-500/20 rounded-[4rem] -z-10" />
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-6 -left-16 glass p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-white/10">
            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-8 h-8 object-contain" />
            <span className="text-[10px] font-black text-slate-400 tracking-widest mt-2">REACT</span>
          </motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }} className="absolute bottom-16 -right-20 glass p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-white/10">
            <span className="text-cyan-400 font-black text-2xl tracking-tighter">MERN</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Expert Full-Stack</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-slate-950/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Parcours Professionnel</span>
            <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">Expériences <br /><span className="text-gradient">& Stages</span></h2>
          </div>
          <div className="hidden lg:block h-px flex-grow bg-slate-800 mx-12 mb-8"></div>
          <p className="text-slate-500 max-w-sm italic font-medium leading-relaxed border-l-2 border-indigo-500 pl-6 py-2">
            "Chaque projet est une opportunité d'innover et de repousser les limites de la stack technique."
          </p>
        </div>
        <div className="space-y-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800/50 -translate-x-1/2" />
          {EXPERIENCES.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className={`relative grid md:grid-cols-2 gap-12 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:flex flex-col items-center absolute left-1/2 top-0 -translate-x-1/2 z-10"><div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]" /></div>
              <div className={`${index % 2 === 0 ? 'md:text-right md:pr-20' : 'md:order-last md:pl-20'}`}>
                <span className="text-indigo-400 font-black text-xs bg-indigo-500/10 px-4 py-2 rounded-xl tracking-widest">{exp.period}</span>
                <h3 className="text-3xl font-black mt-6 text-white uppercase tracking-tighter leading-none">{exp.title}</h3>
                <p className="text-cyan-500 font-black text-sm mt-3 uppercase tracking-widest">{exp.company}</p>
              </div>
              <div className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/40 transition-all duration-700 shadow-2xl group relative overflow-hidden">
                <ul className="space-y-5 mb-10">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed font-medium">
                      <div className="mt-1.5 min-w-[8px] h-2 w-2 rounded-full bg-cyan-500" />
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {exp.techs.map((tech) => (
                    <span key={tech} className="px-4 py-1.5 bg-white/5 rounded-xl text-[9px] uppercase font-black tracking-widest text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'MERN', 'AI', 'Java', 'PHP', 'Microservices'];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => 
    p.category.toLowerCase().includes(filter.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <section id="projects" className="py-32 scroll-mt-24">
      <div className="container mx-auto px-6 text-center mb-24">
        <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Portfolio Digital</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-none">Projets <span className="text-gradient">Sélectifs</span></h2>
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-8 py-3 rounded-2xl text-[10px] font-black transition-all uppercase tracking-[0.2em] ${filter === cat ? 'bg-indigo-600 text-white shadow-2xl' : 'glass text-slate-500 hover:text-white'}`}>{cat}</button>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div layout key={project.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -15 }} className="glass rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl flex flex-col h-full hover:shadow-cyan-500/5">
              <div className="relative h-72 overflow-hidden shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white text-slate-950 px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3">Visiter <ExternalLink size={18} /></a>
                  ) : (
                    <div className="bg-white/10 backdrop-blur-xl text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/20">Soon <Activity size={18} /></div>
                  )}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black group-hover:text-cyan-400 transition-colors tracking-tighter leading-tight mb-4">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 font-medium flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => <span key={tag} className="text-[9px] bg-slate-800/50 text-slate-400 px-4 py-1.5 rounded-xl font-black uppercase border border-white/5">{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const categories = ['Language', 'Framework', 'DevOps', 'Tool'];
  return (
    <section id="skills" className="py-32 bg-slate-950/40 scroll-mt-24">
      <div className="container mx-auto px-6 text-center mb-24">
        <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Stack Technologique</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">Expertise <span className="text-gradient">Confirmée</span></h2>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((cat, idx) => (
          <motion.div key={cat} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 shadow-2xl">
            <div className="flex items-center gap-5 mb-10">
              <div className="p-5 bg-indigo-600/20 rounded-[1.5rem] text-indigo-400">
                {cat === 'Language' && <Code2 size={28} />}
                {cat === 'Framework' && <Layout size={28} />}
                {cat === 'DevOps' && <Server size={28} />}
                {cat === 'Tool' && <Database size={28} />}
              </div>
              <h3 className="font-black text-xl uppercase tracking-tighter">{cat}s</h3>
            </div>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === cat).map(skill => (
                <div key={skill.name} className="group/skill flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl p-2.5 group-hover/skill:bg-white/10 group-hover/skill:scale-110 transition-all duration-500">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </span>
                  <span className="text-slate-400 font-bold group-hover/skill:text-white transition-colors uppercase tracking-widest text-[11px]">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        setFormState({ name: '', email: '', message: '' });
        console.log('✅ Message envoyé avec succès:', data);
      } else {
        console.error('❌ Erreur:', data.message);
        alert('Erreur: ' + data.message);
      }
    } catch (error) {
      console.error('❌ Erreur de connexion:', error);
      alert('Erreur de connexion au serveur. Assurez-vous que le serveur est en cours d\'exécution.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden scroll-mt-24">
      <AnimatePresence>
        {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass p-10 md:p-24 rounded-[4rem] border border-white/10 overflow-hidden relative shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Prêt à collaborer ?</span>
              <h2 className="text-6xl font-black mb-10 leading-[0.9] tracking-tighter italic">Bâtissons <br /><span className="text-gradient">L'Innovation</span></h2>
              <p className="text-slate-400 text-lg mb-16 max-w-sm font-medium">Connecté au cluster MongoDB <b>skanderchouk_db</b> via Atlas.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 glass flex items-center justify-center rounded-[2rem] group-hover:bg-cyan-500 transition-all duration-700 border border-white/10">
                    <Mail className="text-cyan-400 group-hover:text-slate-950" size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Email Personnel</span>
                    <div className="text-slate-200 font-black text-xl tracking-tight">{CV_DATA.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 glass flex items-center justify-center rounded-[2rem] group-hover:bg-indigo-500 transition-all duration-700 border border-white/10">
                    <MapPin className="text-indigo-400 group-hover:text-white" size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Localisation</span>
                    <div className="text-slate-200 font-black text-xl tracking-tight">{CV_DATA.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-900/40 p-10 md:p-14 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl backdrop-blur-3xl relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Nom Complet</label>
                  <input type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full glass bg-transparent border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-cyan-500/50 transition-all font-bold text-white shadow-inner" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Adresse Email</label>
                   <input type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="w-full glass bg-transparent border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-cyan-500/50 transition-all font-bold text-white shadow-inner" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Message</label>
                <textarea rows={5} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} className="w-full glass bg-transparent border-white/10 rounded-3xl px-8 py-6 outline-none focus:border-cyan-500/50 transition-all font-bold text-white shadow-inner resize-none" placeholder="Expliquez-moi votre projet en quelques mots..." required></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-slate-800' : 'bg-white hover:bg-cyan-500'} text-slate-950 font-black py-6 rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-widest text-xs shadow-2xl disabled:cursor-wait`}
              >
                {isSubmitting ? (
                  <>Envoi en cours <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>Envoyer le Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30 bg-slate-950">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col items-center gap-12 text-center">
          <div className="text-3xl font-black font-montserrat tracking-tighter">SKANDER<span className="text-cyan-400">.</span></div>
          <div className="flex gap-10">
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Accueil</a>
            <a href="#experience" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Expériences</a>
            <a href="#projects" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Projets</a>
            <a href="#contact" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Contact</a>
          </div>
          <div className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.3em]">
            <p>© {new Date().getFullYear()} — Made with Excellence for Skander Chouk</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;