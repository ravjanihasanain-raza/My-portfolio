
import { Link } from 'react-router-dom';
import { projects } from '../data/content';
import SectionHead from '../components/SectionHead';

export default function ProjectsPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionHead
          id="all-projects"
          kicker="Portfolio"
          title="All Projects"
        >
          Explore the projects I have built and the technologies
          behind them.
        </SectionHead>

        <div className="grid grid--projects">
          {projects.map((project) => {
            const slug =
              project.slug ||
              project.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            return (
              <article className="card project" key={project.title}>
                <div className="project__media">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="project__body">
                  <h2 className="card__title">{project.title}</h2>

                  <p className="card__text">
                    {project.description}
                  </p>

                  {project.tags?.length > 0 && (
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li className="tag" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    className="btn"
                    to={`/projects/${slug}`}
                  >
                    View Project Details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
