import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/portfolio';
import './StatsBar.css';

function Counter({ value, suffix, decimals, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} className="stat-value">
      {formatted}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  return (
    <motion.div
      className="stats-bar"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="stat-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
          whileHover={{ scale: 1.05, y: -4 }}
        >
          <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          <span className="stat-label">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
