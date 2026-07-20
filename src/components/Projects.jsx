import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects, personalInfo } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">03. Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Production-grade backend systems and AI solutions I've engineered end-to-end
        </p>
      </motion.div>

      {featured.map((project, i) => (
        <motion.div
          key={project.title}
          className="featured-project glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 * i }}
          style={{ '--project-color': project.color }}
        >
          <div className="featured-glow" />
          <div className="featured-badge">⭐ Featured Project</div>

          <div className="featured-content">
            <div className="featured-left">
              <span className="project-emoji">{project.icon}</span>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <div className="project-meta">
                <span className="meta-badge status">{project.status}</span>
                <span className="meta-badge arch">{project.architecture}</span>
              </div>
              <p className="project-desc">{project.description}</p>

              <ul className="project-features">
                {project.features.map((f) => (
                  <li key={f}>
                    <HiCheckCircle /> {f}
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="featured-visual">
              <div className="code-window">
                <div className="code-dots">
                  <span /><span /><span />
                </div>
                <pre className="code-block">{`@RestController
@RequestMapping("/api/parts")
public class PartsController {

  @Autowired
  private RAGSearchService rag;

  @PostMapping("/search")
  public ResponseEntity<List<Part>>
    search(@RequestBody Query req) {
    return ResponseEntity.ok(
      rag.semanticSearch(req)
    );
  }
}`}</pre>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="projects-grid">
        {others.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass-card project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            style={{ '--project-color': project.color }}
          >
            <div className="project-glow" />
            <div className="project-top">
              <span className="project-emoji">{project.icon}</span>
              <div className="project-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="project-meta">
              <span className="meta-badge status">{project.status}</span>
              <span className="meta-badge arch">{project.architecture}</span>
            </div>
            <p className="project-desc">{project.description}</p>

            <ul className="project-features compact">
              {project.features.map((f) => (
                <li key={f}>
                  <HiCheckCircle /> {f}
                </li>
              ))}
            </ul>

            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
