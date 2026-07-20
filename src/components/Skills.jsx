import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, skillProficiencies } from '../data/portfolio';
import TechMarquee from './TechMarquee';
import './Skills.css';

const categories = [
  { key: 'languages', label: 'Languages', icon: '{ }', color: '#f89820' },
  { key: 'frameworks', label: 'Frameworks & Libraries', icon: '⚡', color: '#6db33f' },
  { key: 'ai', label: 'AI & Machine Learning', icon: '🧠', color: '#a855f7' },
  { key: 'databases', label: 'Databases & ORM', icon: '🗄️', color: '#00758f' },
  { key: 'devops', label: 'DevOps & Tools', icon: '🛠️', color: '#06b6d4' },
  { key: 'concepts', label: 'Core Concepts', icon: '🏗️', color: '#ec4899' },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="skill-bar-item" ref={ref}>
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">04. Skills</span>
        <h2 className="section-title">Tech Stack & Expertise</h2>
        <p className="section-subtitle">
          Technologies, tools, and engineering concepts I use to build production-ready systems
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="skills-marquee-section"
      >
        <TechMarquee />
      </motion.div>

      <motion.div
        className="glass-card proficiency-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="proficiency-title">Core Proficiencies</h3>
        <div className="skill-bars">
          {skillProficiencies.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={0.1 * i} />
          ))}
        </div>
      </motion.div>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            className="glass-card skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            whileHover={{ y: -6, borderColor: `${cat.color}44` }}
            style={{ '--cat-color': cat.color }}
          >
            <div className="skill-header">
              <span className="skill-icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                {cat.icon}
              </span>
              <h3>{cat.label}</h3>
            </div>
            <div className="skill-tags">
              {skills[cat.key].map((skill, j) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * j }}
                  whileHover={{
                    scale: 1.06,
                    borderColor: `${cat.color}55`,
                    color: cat.color,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
