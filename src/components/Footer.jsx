import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">&lt;KG /&gt;</span>
          <p>Backend Developer · Building the future, one API at a time.</p>
        </div>

        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <HiMail />
          </a>
          <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} {personalInfo.name}</p>
      </div>
    </footer>
  );
}
