import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    const text = [
      '*New Portfolio Inquiry*',
      '',
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      '',
      `*Message:*`,
      form.message,
    ].join('\n');

    const url = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">06. Contact</span>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Looking for a backend engineer? I'd love to hear about your team, project, or opportunity.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card contact-card">
            <h3>Let's Connect</h3>
            <p>I'm actively seeking backend engineer roles and open to impactful collaborations.</p>

            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`}>
                <HiMail /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>
                <HiPhone /> {personalInfo.phone}
              </a>
              <span>
                <HiLocationMarker /> Punjab, India
              </span>
            </div>

            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp direct-whatsapp"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.form
          className="glass-card contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Send a Message</h3>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
            />
          </div>

          <button type="submit" className="btn btn-whatsapp">
            <FaWhatsapp />
            {submitted ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
          </button>

          {submitted && (
            <motion.p
              className="form-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              WhatsApp opened! Hit send to deliver your message.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
