import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiDownload } from 'react-icons/hi';
import { personalInfo, navLinks } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <span className="logo-bracket">&lt;</span>
          KG
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={personalInfo.resumePath} download="Kashish_Goyal_Resume.pdf" className="btn btn-primary navbar-resume">
          <HiDownload /> Resume
        </a>

        <button className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
              >
                {link.label}
              </a>
            ))}
            <a href={personalInfo.resumePath} download="Kashish_Goyal_Resume.pdf" className="btn btn-primary">
              <HiDownload /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
