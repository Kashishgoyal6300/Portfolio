import { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowDown, HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, typingRoles } from '../data/portfolio';
import TypingText from './TypingText';
import StatsBar from './StatsBar';
import TechMarquee from './TechMarquee';
import Scene3D from './Scene3D';
import './Hero.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <Scene3D />

      <div className="hero-overlay" />
      <div className="hero-grid-bg" aria-hidden="true" />

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div className="hero-badge" variants={item}>
          <span className="pulse-dot" />
          Open to Backend Engineer Roles · 2026 Graduate
        </motion.div>

        <motion.h1 className="hero-name" variants={item}>
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div className="hero-typing" variants={item}>
          <span className="typing-prefix"></span>
          <TypingText words={typingRoles} />
        </motion.div>

        <motion.p className="hero-tagline" variants={item}>
          {personalInfo.tagline}
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a href={personalInfo.resumePath} download="Kashish_Goyal_Resume.pdf" className="btn btn-primary">
            <HiDownload /> Download Resume
          </a>
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's Talk →
          </a>
        </motion.div>

        <StatsBar />

        <motion.div className="hero-social" variants={item}>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" title="Email">
            <HiMail />
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} aria-label="Phone" title="Phone">
            <HiPhone />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div variants={item}>
          <TechMarquee />
        </motion.div>

        <motion.a
          href="#about"
          className="hero-scroll"
          variants={item}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiArrowDown />
        </motion.a>
      </motion.div>
    </section>
  );
}
