
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { projects as fallback } from '../data/content';
import { getProjects } from '../services/api';
import useResource from '../hooks/useResource';
import SectionHead from '../components/SectionHead';

const createSlug = (title = '') =>
  title
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function Projects() {
  const { status, data } = useResource(getProjects, fallback);

  // Prevent crashes if API data is missing or malformed.
  const projectList = Array.isArray(data)
    ? data
    : Array.isArray(fallback)
      ? fallback
      : [];

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHead
          id="projects"
          kicker="My work"
          title="Projects"
        >
          A few things I&rsquo;ve built recently, with the tools behind each one.
        </SectionHead>

        <div className="grid grid--projects">
          {status === 'loading' ? (
            [0, 1, 2].map((n) => (
              <div
                key={n}
                className="card skeleton"
                style={{ minHeight: 380 }}
              />
            ))
          ) : projectList.length > 0 ? (
            projectList.map((p, index) => {
              const title = p?.title || 'Untitled Project';
              const description = p?.description || '';
              const tags = Array.isArray(p?.tags) ? p.tags : [];
              const image = p?.image || p?.thumbnail || '';
              const slug = p?.slug || createSlug(title);

              return (
                <article
                  key={`${title}-${index}`}
                  className="card project"
                >
                  <div className="project__media">
                    <span
                      className="project__fallback"
                      aria-hidden="true"
                    >
                      {title.slice(0, 2)}
                    </span>

                    {image && (
                      <img
                        src={image}
                        alt={`${title} project screenshot`}
                        width="640"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                  </div>

                  <div className="project__body">
                    <h3 className="card__title">{title}</h3>

                    <p className="card__text">{description}</p>

                    {tags.length > 0 && (
                      <ul className="tags">
                        {tags.map((tag, tagIndex) => (
                          <li
                            key={`${tag}-${tagIndex}`}
                            className="tag"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="project__links">
                      {p?.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiExternalLink aria-hidden="true" />
                          Live demo
                        </a>
                      )}

                      {p?.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiGithub aria-hidden="true" />
                          Source code
                        </a>
                      )}

                      <Link to={`/projects/${slug}`}>
                        View Details
                        <FiExternalLink aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="card">
              <h3 className="card__title">Projects coming soon</h3>
              <p className="card__text">
                Project information is not available right now.
                Please check back soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
