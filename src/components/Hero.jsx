import {
  FiMapPin, FiGlobe, FiMail, FiArrowRight, FiMessageSquare,
  FiDownload, FiLayers, FiCode,
} from 'react-icons/fi';
import { FaRocket, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { profile, socials } from '../data/content';
import useTypewriter from '../hooks/useTypewriter';
import HeroBackground from './HeroBackground';
import TechStrip from './TechStrip';

const socialIcons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

const rise = (i) => ({ className: 'rise', style: { '--i': i } });

export default function Hero() {
  const role = useTypewriter(profile.roles);

  const onPhotoError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = '/profile-placeholder.svg';
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <HeroBackground />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p {...rise(0)}>
            <span className="pill">
              <span className="dot" aria-hidden="true" />
              Available for new opportunities
            </span>
          </p>

          <p className="kicker kicker--hero rise" style={{ '--i': 1 }}>
            {profile.greeting}
          </p>

          <h1 className="hero__name rise" style={{ '--i': 2 }}>
            <span className="name-first">{profile.firstName}</span>
            <span className="name-last">{profile.lastName}</span>
          </h1>

          <p className="hero__role rise" style={{ '--i': 3 }} aria-label={profile.roles[0]}>
            <span aria-hidden="true">{role}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero__lead rise" style={{ '--i': 4 }}>{profile.intro}</p>

          <ul className="chips rise" style={{ '--i': 5 }}>
            <li className="chip"><FiMapPin aria-hidden="true" />{profile.location}</li>
            <li className="chip"><FiGlobe aria-hidden="true" />{profile.availability}</li>
            <li className="chip"><FiMail aria-hidden="true" />{profile.email}</li>
          </ul>

          <div className="hero__actions rise" style={{ '--i': 6 }}>
            <a href="#projects" className="btn btn--primary">
              View Projects <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&rsquo;s Talk <FiMessageSquare aria-hidden="true" />
            </a>
            <a href={profile.resume} className="btn btn--ghost" download>
              Download Resume <FiDownload aria-hidden="true" />
            </a>
          </div>

          <div className="hero__social rise" style={{ '--i': 7 }}>
            <p>Connect with me</p>
            <ul>
              {socials.map((s) => (
                <li key={s.key}>
                  <a
                    className="social-btn"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                  >
                    {socialIcons[s.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__visual rise" style={{ '--i': 3 }}>
          {/* SVG filters that give the photo its wavy, liquid look (see .hero-frame img in index.css) */}
          <svg className="wave-defs" width="0" height="0" aria-hidden="true" focusable="false">
            <defs>
              <filter id="wave-soft" x="-5%" y="-5%" width="110%" height="110%">
                <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="4" result="noise">
                  <animate attributeName="baseFrequency" dur="9s" values="0.006 0.012;0.010 0.016;0.006 0.012" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="wave-strong" x="-8%" y="-8%" width="116%" height="116%">
                <feTurbulence type="fractalNoise" baseFrequency="0.008 0.016" numOctaves="2" seed="4" result="noise">
                  <animate attributeName="baseFrequency" dur="4s" values="0.008 0.016;0.014 0.022;0.008 0.016" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>

          <div className="hero-frame">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.firstName.trim()} ${profile.lastName.trim()}, Full Stack Developer`}
              width="660"
              height="700"
              fetchpriority="high"
              decoding="async"
              onError={onPhotoError}
            />
          </div>

          <div className="float-card float-card--role">
            <FiLayers aria-hidden="true" />
            <strong>Full-Stack</strong>
            <span>Developer</span>
          </div>

          <div className="float-card float-card--projects">
            <FiCode aria-hidden="true" />
            <strong className="float-card__big">{profile.projectsCompleted}</strong>
            <span>Projects<br />Completed</span>
          </div>

          <div className="float-card float-card--available">
            <FaRocket aria-hidden="true" />
            <strong>Available</strong>
            <span>For Work</span>
          </div>
        </div>
      </div>

      <div className="container">
        <TechStrip />
      </div>

      <a href="#about" className="scroll-hint rise" style={{ '--i': 10 }}>
        <span className="mouse" aria-hidden="true"><span /></span>
        Scroll to explore
      </a>
    </section>
  );
}