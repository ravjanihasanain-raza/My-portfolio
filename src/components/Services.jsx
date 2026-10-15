import { services as fallback } from '../data/content';
import { getServices } from '../services/api';
import useResource from '../hooks/useResource';
import SectionHead from './SectionHead';

import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCode,
  FiLayers,
  FiCalendar,
} from 'react-icons/fi';

const iconMap = {
  monitor: <FiMonitor />,
  server: <FiServer />,
  database: <FiDatabase />,
  code: <FiCode />,
  layers: <FiLayers />,
  calendar: <FiCalendar />,
};

export default function Services() {
  const { status, data } = useResource(getServices, fallback);

  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHead
          id="services"
          kicker="What I do"
          title="Services"
        >
          From the first screen to the last database query,
          I can build and ship the whole thing.
        </SectionHead>

        <div className="grid grid--services">
          {status === 'loading' ? (
            [0, 1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="card skeleton"
                style={{ minHeight: 320 }}
              />
            ))
          ) : (
            data.map((s) => (
              <article key={s.title} className="card service-card">

                {/* Service Preview Image */}
                <div className="service-card__image-wrap">
                  <img
                    className="service-card__image"
                    src={s.image || '/services/service-placeholder.png'}
                    alt={`${s.title} preview`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Service Icon */}
                <span className="icon-tile" aria-hidden="true">
                  {iconMap[s.icon] || iconMap.code}
                </span>

                {/* Service Information */}
                <h3 className="card__title">{s.title}</h3>

                <p className="card__text">{s.description}</p>

                {/* Contact Button */}
                <a
                  href="#contact"
                  className="service-card__button"
                  aria-label={`Discuss a ${s.title} project`}
                >
                  Discuss Project
                  <span aria-hidden="true"> →</span>
                </a>

              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}