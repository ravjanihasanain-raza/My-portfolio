
import { Link, useParams } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiTarget,
  FiImage,
} from 'react-icons/fi';
import { projects } from '../data/content';
import './ProjectDetails.css';

const slugify = (text = '') =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function DetailSection({ icon, title, children, className = '' }) {
  return (
    <section className={`project-detail__section ${className}`}>
      <div className="project-detail__section-heading">
        <span className="project-detail__section-icon">{icon}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) =>
      item.slug === slug ||
      slugify(item.title) === slug
  );

  if (!project) {
    return (
      <main className="project-detail project-detail--not-found">
        <div className="container">
          <span className="project-detail__eyebrow">
            PROJECT NOT FOUND
          </span>
          <h1>Looks like this project doesn't exist.</h1>
          <p>
            The project may have been moved or the URL may be incorrect.
          </p>
          <Link to="/projects" className="btn btn--primary">
            <FiArrowLeft /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const screenshots = project.screenshots || [];

  const techStack = project.techStack
    ? Array.isArray(project.techStack)
      ? project.techStack
      : Object.entries(project.techStack).flatMap(([category, items]) =>
          Array.isArray(items)
            ? items.map((name) => ({ name, category }))
            : []
        )
    : (project.tags || []).map((name) => ({
        name,
        category: 'Technology',
      }));

  const features = project.features || [];
  const challenges = project.challenges || [];

  return (
    <main className="project-detail">
      <div className="container">
        <nav className="project-detail__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Projects</Link>
          <span>/</span>
          <span aria-current="page">{project.title}</span>
        </nav>

        <Link to="/projects" className="project-detail__back">
          <FiArrowLeft aria-hidden="true" />
          Back to all projects
        </Link>

        {/* Project Hero */}
        <header className="project-detail__hero">
          <div className="project-detail__hero-content">
            <span className="project-detail__eyebrow">
              {project.category || 'FEATURED PROJECT'}
            </span>

            <h1>{project.title}</h1>

            <p className="project-detail__lead">
              {project.description}
            </p>

            <div className="project-detail__actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Live Demo <FiExternalLink />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary"
                >
                  <FiGithub /> Source Code
                </a>
              )}
            </div>

            {project.tags?.length > 0 && (
              <ul className="tags project-detail__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="project-detail__cover">
            {project.thumbnail || project.image ? (
              <img
                src={project.thumbnail || project.image}
                alt={`${project.title} preview`}
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="project-detail__cover-placeholder">
                <FiLayers />
                <span>{project.title}</span>
              </div>
            )}
          </div>
        </header>

        {/* Overview */}
        {project.overview && (
          <DetailSection icon={<FiLayers />} title="Project Overview">
            <p className="project-detail__text">
              {project.overview}
            </p>
          </DetailSection>
        )}

        {/* Problem and Solution */}
        {(project.problem || project.solution) && (
          <div className="project-detail__two-column">
            {project.problem && (
              <DetailSection
                icon={<FiTarget />}
                title="The Problem"
              >
                <p className="project-detail__text">
                  {project.problem}
                </p>
              </DetailSection>
            )}

            {project.solution && (
              <DetailSection
                icon={<FiCheckCircle />}
                title="The Solution"
              >
                <p className="project-detail__text">
                  {project.solution}
                </p>
              </DetailSection>
            )}
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <DetailSection
            icon={<FiCheckCircle />}
            title="Key Features"
          >
            <div className="project-detail__features">
              {features.map((feature, index) => (
                <article
                  className="project-detail__feature"
                  key={`${feature}-${index}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  <span>{feature}</span>
                </article>
              ))}
            </div>
          </DetailSection>
        )}

        {/* Screenshots */}
        {screenshots.length > 0 && (
          <DetailSection
            icon={<FiImage />}
            title="Project Gallery"
          >
            <div className="project-detail__gallery">
              {screenshots.map((shot, index) => {
                const image =
                  typeof shot === 'string' ? shot : shot.image;
                const title =
                  typeof shot === 'string'
                    ? `Screenshot ${index + 1}`
                    : shot.title || `Screenshot ${index + 1}`;

                return (
                  <figure
                    className="project-detail__screenshot"
                    key={`${image}-${index}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} — ${title}`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <figcaption>{title}</figcaption>
                  </figure>
                );
              })}
            </div>
          </DetailSection>
        )}

        {/* Technology Stack */}
        {techStack.length > 0 && (
          <DetailSection
            icon={<FiCode />}
            title="Technology Stack"
          >
            <div className="project-detail__tech-grid">
              {techStack.map((tech, index) => {
                const name =
                  typeof tech === 'string' ? tech : tech.name;
                const category =
                  typeof tech === 'string'
                    ? 'Technology'
                    : tech.category;

                return (
                  <div
                    className="project-detail__tech"
                    key={`${name}-${index}`}
                  >
                    <FiCode aria-hidden="true" />
                    <div>
                      <strong>{name}</strong>
                      <span>{category}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </DetailSection>
        )}

        {/* Challenges */}
        {challenges.length > 0 && (
          <DetailSection
            icon={<FiTarget />}
            title="Challenges & Learnings"
          >
            <ul className="project-detail__challenges">
              {challenges.map((challenge, index) => (
                <li key={`${challenge}-${index}`}>
                  {challenge}
                </li>
              ))}
            </ul>
          </DetailSection>
        )}

        {/* Bottom CTA */}
        <div className="project-detail__footer">
          <div>
            <span className="project-detail__eyebrow">
              EXPLORE MORE
            </span>
            <h2>Interested in my work?</h2>
            <p>
              Explore more projects or get in touch to discuss an idea.
            </p>
          </div>

          <div className="project-detail__footer-actions">
            <Link to="/projects" className="btn btn--secondary">
              <FiArrowLeft /> All Projects
            </Link>
            <Link to="/#contact" className="btn btn--primary">
              Let's Talk <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
