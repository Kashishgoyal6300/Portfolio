import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">02. Experience</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Building enterprise-grade solutions in a professional software development environment
        </p>
      </motion.div>

      <div className="timeline">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <div className="timeline-marker">
              <HiBriefcase />
            </div>
            <motion.div
              className="glass-card timeline-card"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="timeline-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="timeline-company">
                    {exp.company} · {exp.location}
                  </p>
                  <span className="timeline-type">{exp.type}</span>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>

              <div className="timeline-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <ul className="timeline-highlights">
                {exp.highlights.map((h) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
