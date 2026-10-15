import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certificates as fallback } from '../data/content';
import { getCertificates } from '../services/api';
import useResource from '../hooks/useResource';
import SectionHead from './SectionHead';

export default function Certificates() {
  const { status, data } = useResource(getCertificates, fallback);

  // No certificates yet: don't show an empty section.
  if (status !== 'loading' && data.length === 0) return null;

  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHead id="certificates" kicker="Learning" title="Certificates" />

        <div className="grid grid--certs">
          {status === 'loading'
            ? [0, 1, 2].map((n) => <div key={n} className="card skeleton" style={{ minHeight: 170 }} />)
            : data.map((c) => (
                <article key={`${c.title}-${c.issuer}`} className="card">
                  <span className="icon-tile" aria-hidden="true"><FiAward /></span>
                  <h3 className="card__title">{c.title}</h3>
                  <p className="card__text">
                    {c.issuer}{c.issuer && c.year ? ', ' : ''}{c.year}
                  </p>
                  {c.url && (
                    <a className="text-link" href={c.url} target="_blank" rel="noreferrer">
                      View credential <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}