
import {
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiMapPin,
  FiLayers,
  FiDatabase,
  FiBookOpen,
  FiGithub,
  FiLinkedin,
  FiBriefcase,
  FiTerminal,
} from 'react-icons/fi';

import { profile, socials } from '../data/content';
import SectionHead from './SectionHead';
import './About.css';

const skills = [
  { name: 'C#', category: 'Backend', icon: FiCode },
  { name: 'ASP.NET Core', category: 'Backend', icon: FiTerminal },
  { name: 'React.js', category: 'Frontend', icon: FiLayers },
  { name: 'Node.js', category: 'Backend', icon: FiCode },
  { name: 'SQL Server', category: 'Database', icon: FiDatabase },
  { name: 'REST APIs', category: 'Architecture', icon: FiTerminal },
];

const cleanText = (text = '') => text.replace(/\*\*/g, '');

export default function About() {
  const facts = Array.isArray(profile.facts) ? profile.facts : [];
  const about = Array.isArray(profile.about) ? profile.about : [];
  const socialLinks = Array.isArray(socials) ? socials : [];

  const location = facts.find((fact) => fact.label === 'Based in')?.value
    || 'India';

  const education = facts.find((fact) => fact.label === 'Education')?.value
    || 'BCA Graduate';

  const primaryStack = facts.find((fact) => fact.label === 'Primary Stack')?.value
    || 'ASP.NET Core + React.js';

  const specialization = facts.find((fact) => fact.label === 'Specialization')?.value
    || 'Full-Stack Development';

  const introduction = about.slice(1);

  return (
    <section
      id="about"
      className="section about-bento"
      aria-labelledby="about-title"
    >
      <div className="container">
        <SectionHead
          id="about"
          kicker="About me"
          title="More than just code."
        >
          A little about my background, the technologies I work with, and
          how I approach building useful software.
        </SectionHead>

        <div className="about-bento__grid">

          {/* Profile card */}
          <article className="about-card about-card--profile">
            <div className="about-card__topline">
              <span className="about-eyebrow">
                <span className="about-status-dot" />
                GET TO KNOW ME
              </span>

              <span className="about-card__index">01 / PROFILE</span>
            </div>

            <div className="about-profile">
              <div className="about-profile__image-wrap">
                <img
                  className="about-profile__image"
                  src={profile.photo}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  loading="lazy"
                  decoding="async"
                />

                <span className="about-profile__image-glow" />
              </div>

              <div className="about-profile__content">
                <span className="about-profile__greeting">
                  Assalamu Alaikum, I'm
                </span>

                <h3>
                  {profile.firstName}
                  <span> {profile.lastName}</span>
                </h3>

                <p className="about-profile__role">
                  {specialization}
                </p>

                <p className="about-profile__location">
                  <FiMapPin aria-hidden="true" />
                  {location}
                </p>

                <div className="about-profile__availability">
                  <span className="about-status-dot" />
                  {profile.availability || 'Open to opportunities'}
                </div>

                <div className="about-profile__socials">
                  {socialLinks.map((social) => {
                    const Icon =
                      social.key === 'github' ? FiGithub : FiLinkedin;

                    return (
                      <a
                        key={social.key}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit my ${social.label} profile`}
                        className="about-social-link"
                      >
                        <Icon aria-hidden="true" />
                        <span>{social.label}</span>
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>

          {/* Bio card */}
          <article className="about-card about-card--bio">
            <div className="about-card__topline">
              <span className="about-eyebrow">THE PERSON BEHIND THE CODE</span>
              <FiArrowUpRight className="about-card__corner-icon" />
            </div>

            <h3 className="about-card__heading">
              Building web solutions
              <span> that make business simpler.</span>
            </h3>

            <div className="about-bio__text">
              {introduction.slice(0, 3).map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 20)}`}>
                  {cleanText(paragraph)}
                </p>
              ))}
            </div>

            <a
              href={profile.resume}
              className="about-resume-link"
              download
            >
              <span className="about-resume-link__icon">
                <FiDownload aria-hidden="true" />
              </span>

              <span>
                <strong>Download Resume</strong>
                <small>View my experience and skills</small>
              </span>

              <FiArrowUpRight
                className="about-resume-link__arrow"
                aria-hidden="true"
              />
            </a>
          </article>

          {/* Stats card */}
          <article className="about-card about-card--stats">
            <div className="about-card__topline">
              <span className="about-eyebrow">THE JOURNEY SO FAR</span>
              <FiBriefcase className="about-card__corner-icon" />
            </div>

            <div className="about-stat">
              <span className="about-stat__number">
                {profile.projectsCompleted || '4'}
                <span>+</span>
              </span>

              <div>
                <h3>Projects completed</h3>
                <p>Turning ideas into working applications.</p>
              </div>
            </div>

            <div className="about-stat__divider" />

            <div className="about-stat">
              <span className="about-stat__icon">
                <FiLayers aria-hidden="true" />
              </span>

              <div>
                <h3>Full-Stack Development</h3>
                <p>Frontend, backend and database integration.</p>
              </div>
            </div>
          </article>

          {/* Skills card */}
          <article className="about-card about-card--skills">
            <div className="about-card__topline">
              <span className="about-eyebrow">MY TOOLKIT</span>
              <span className="about-card__index">02 / SKILLS</span>
            </div>

            <h3 className="about-card__title">
              Technologies I work with
            </h3>

            <p className="about-card__description">
              The tools I use to build responsive interfaces and practical
              backend solutions.
            </p>

            <div className="about-skills">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="about-skill" key={skill.name}>
                    <span className="about-skill__icon">
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="about-skill__text">
                      <strong>{skill.name}</strong>
                      <small>{skill.category}</small>
                    </span>

                    <span className="about-skill__indicator" />
                  </div>
                );
              })}
            </div>

            <div className="about-card__stack">
              <span>Primary stack</span>
              <strong>{primaryStack}</strong>
            </div>
          </article>

          {/* Education card */}
          <article className="about-card about-card--education">
            <div className="about-card__topline">
              <span className="about-eyebrow">EDUCATION</span>
              <FiBookOpen className="about-card__corner-icon" />
            </div>

            <div className="about-education__icon">
              <FiBookOpen aria-hidden="true" />
            </div>

            <span className="about-education__label">
              Academic background
            </span>

            <h3>{education}</h3>

            <p>
              Building a foundation in software development and applying
              that knowledge to real-world projects.
            </p>

            <div className="about-education__footer">
              <span className="about-status-dot" />
              {specialization}
            </div>
          </article>

          {/* Location / availability card */}
          <article className="about-card about-card--location">
            <div className="about-card__topline">
              <span className="about-eyebrow">WHAT'S NEXT?</span>
              <FiArrowUpRight className="about-card__corner-icon" />
            </div>

            <span className="about-location__icon">
              <FiMapPin aria-hidden="true" />
            </span>

            <h3>Let's build something useful.</h3>

            <p>
              Interested in web development opportunities, business
              applications and meaningful software projects.
            </p>

            <a
              className="about-contact-link"
              href={`mailto:${profile.email}`}
            >
              Get in touch
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}
