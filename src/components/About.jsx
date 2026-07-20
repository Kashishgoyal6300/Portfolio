import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightningBolt } from 'react-icons/hi';
import { summary, education, highlights } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">01. About</span>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">
          A backend engineer who turns complex problems into clean, scalable systems
        </p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="glass-card about-summary"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>{summary}</p>

          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <motion.span
                key={h}
                className="highlight-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <HiLightningBolt /> {h}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-education"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="glass-card edu-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="edu-icon">
                <HiAcademicCap />
              </div>
              <div>
                <h3>{edu.institution}</h3>
                <p className="edu-location">{edu.location}</p>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-meta">
                  <span>{edu.period}</span>
                  <span className="edu-score">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
