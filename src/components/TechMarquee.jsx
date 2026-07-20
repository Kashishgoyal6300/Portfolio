import { techMarquee } from '../data/portfolio';
import './TechMarquee.css';

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee-fade left" />
      <div className="tech-marquee-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-item">
            <span className="marquee-dot" />
            {tech}
          </span>
        ))}
      </div>
      <div className="tech-marquee-fade right" />
    </div>
  );
}
