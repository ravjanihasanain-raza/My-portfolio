
import { useState } from 'react';
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiPhone,
  FiExternalLink,
  FiMessageCircle,
} from 'react-icons/fi';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6';

import { profile } from '../data/content';
import SectionHead from './SectionHead';

const EMAIL = 'ravjanihasanain@gmail.com';
const PHONE = '9409265580';
const WHATSAPP = '919409265580';

const socialLinks = [
  {
    label: 'Instagram · Creator',
    username: '@buildwithraza_',
    href: 'https://www.instagram.com/buildwithraza_/',
    icon: <FaInstagram />,
    description: 'Tech, projects & creativity',
  },
  {
    label: 'Instagram · Personal',
    username: '@ravjani_hasanain_raza',
    href: 'https://www.instagram.com/ravjani_hasanain_raza/',
    icon: <FaInstagram />,
    description: 'My personal profile',
  },
  {
    label: 'GitHub',
    username: 'ravjanihasanain-raza',
    href: 'https://github.com/ravjanihasanain-raza',
    icon: <FaGithub />,
    description: 'Explore my code & projects',
  },
  {
    label: 'LinkedIn',
    username: 'Connect professionally',
    href: 'https://www.linkedin.com/in/hasanain-raza-ravjani-b1502937a/',
    icon: <FaLinkedin />,
    description: 'Career & opportunities',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getMessage = () => `Hello Hasanain,

Name: ${form.name.trim()}
Email: ${form.email.trim()}

Message:
${form.message.trim()}`;

  const validateForm = () => {
    const formElement = document.getElementById('portfolio-contact-form');
    return formElement?.reportValidity() ?? false;
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const message = encodeURIComponent(getMessage());

    window.open(
      `https://wa.me/${WHATSAPP}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const sendEmail = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name.trim()}`
    );

    const body = encodeURIComponent(getMessage());

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHead
          id="contact"
          kicker="Get in touch"
          title="Let's build something together"
        >
          Have a project, an opportunity, or an idea?
          Choose your preferred platform and let's connect.
        </SectionHead>

        <div className="contact">
          {/* Contact details */}
          <div className="contact__info">
            <a className="contact__row" href={`mailto:${EMAIL}`}>
              <span className="icon-tile">
                <FiMail />
              </span>
              <span>
                <small>Email me</small>
                {EMAIL}
              </span>
              <FiExternalLink className="contact__external" />
            </a>

            <a className="contact__row" href={`tel:+91${PHONE}`}>
              <span className="icon-tile">
                <FiPhone />
              </span>
              <span>
                <small>Call me</small>
                +91 {PHONE}
              </span>
              <FiExternalLink className="contact__external" />
            </a>

            <a
              className="contact__row"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-tile">
                <FaWhatsapp />
              </span>
              <span>
                <small>WhatsApp</small>
                Chat with me directly
              </span>
              <FiExternalLink className="contact__external" />
            </a>

            <div className="contact__row">
              <span className="icon-tile">
                <FiMapPin />
              </span>
              <span>
                <small>Location</small>
                {profile.location || 'Gujarat, India'}
              </span>
            </div>

            {/* Social profile cards */}
            <div className="contact__social-block">
              <h3 className="contact__social-title">
                Find me <span>online.</span>
              </h3>

              <div className="contact__social-grid">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    className="contact__social-card"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact__social-icon">
                      {social.icon}
                    </span>

                    <span className="contact__social-copy">
                      <strong>{social.label}</strong>
                      <small>{social.username}</small>
                      <span>{social.description}</span>
                    </span>

                    <FiExternalLink className="contact__external" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            id="portfolio-contact-form"
            className="card form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact__form-heading">
              <h3>Send me a message<span>.</span></h3>
              <p>Tell me what you're working on.</p>
            </div>

            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                minLength={2}
                required
                value={form.name}
                onChange={update}
              />
            </div>

            <div className="field">
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={form.email}
                onChange={update}
              />
            </div>

            <div className="field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                minLength={10}
                required
                value={form.message}
                onChange={update}
              />
            </div>

            <button
              type="button"
              onClick={sendWhatsApp}
              className="btn btn--primary form__submit"
            >
              Send via WhatsApp
              <FaWhatsapp />
            </button>

            <button
              type="button"
              onClick={sendEmail}
              className="btn form__submit"
            >
              Send via Email
              <FiSend />
            </button>

            <p className="form__status" role="status">
              <FiMessageCircle />
              Choose WhatsApp or email to send your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
