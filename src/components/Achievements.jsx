import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';
import './Achievements.css';

export default function Achievements() {
  return (
    <section className="section achievements">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">05. Achievements</span>
        <h2 className="section-title">Recognition</h2>
        <p className="section-subtitle">Research contributions and academic milestones</p>
      </motion.div>

      {achievements.map((item, i) => (
        <motion.div
          key={item.title}
          className="glass-card achievement-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
          whileHover={{ scale: 1.01, x: 6 }}
        >
          <div className="achievement-icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            <span className="achievement-role">{item.role}</span>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
