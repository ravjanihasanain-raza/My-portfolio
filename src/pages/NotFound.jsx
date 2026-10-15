
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowRight,
  FiHome,
  FiArrowUpRight,
} from 'react-icons/fi';
import './NotFound.css';

export default function NotFound() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: (event.clientX / window.innerWidth - 0.5) * 12,
        y: (event.clientY / window.innerHeight - 0.5) * 12,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="not-found">
      <div className="nf-noise" />
      <div className="nf-grid" />

      <div className="nf-orb nf-orb--one" />
      <div className="nf-orb nf-orb--two" />
      <div className="nf-orb nf-orb--three" />

      <div className="nf-stars" aria-hidden="true">
        {Array.from({ length: 36 }, (_, index) => (
          <span
            key={index}
            className="nf-star"
            style={{
              '--i': index,
              '--left': `${(index * 37 + 11) % 100}%`,
              '--top': `${(index * 53 + 7) % 100}%`,
              '--delay': `${(index % 9) * -0.7}s`,
              '--duration': `${3 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      <header className="nf-header">
        <Link to="/" className="nf-logo" aria-label="HR home">
          HR
        </Link>

        <span className="nf-header-label">
          <span />
          SYSTEM ERROR 404
        </span>
      </header>

      <section className="nf-content">
        <div
          className="nf-visual"
          style={{
            '--mouse-x': `${position.x}px`,
            '--mouse-y': `${position.y}px`,
          }}
        >
          <div className="nf-ring nf-ring--outer" />
          <div className="nf-ring nf-ring--inner" />

          <span className="nf-side-code nf-side-code--left">
            PAGE LOST
          </span>

          <span className="nf-side-code nf-side-code--right">
            ERROR_404
          </span>

          <h1 className="nf-number" data-text="404">
            404
          </h1>

          <div className="nf-scanline" />
          <div className="nf-reflection">404</div>
        </div>

        <div className="nf-message">
          <span className="nf-eyebrow">
            <span className="nf-live-dot" />
            YOU'VE ENTERED THE UNKNOWN
          </span>

          <h2>
            HASANAIN <span>RAZA</span>
          </h2>

          <div className="nf-title-line">
            <span />
            <h3>NOT FOUND</h3>
            <span />
          </div>

          <p>
            Looks like this page took a wrong turn.
            <br />
            The page you’re looking for doesn’t exist
            <br className="nf-desktop-break" />
            or has been moved to another dimension.
          </p>

          <Link to="/" className="nf-home-button">
            <span className="nf-home-icon">
              <FiHome />
            </span>

            <span>Back to Home</span>

            <span className="nf-button-arrow">
              <FiArrowRight />
            </span>
          </Link>

          <button
            type="button"
            className="nf-back-button"
            onClick={() => window.history.back()}
          >
            <FiArrowLeft />
            Or go back to the previous page
            <FiArrowUpRight className="nf-back-external" />
          </button>
        </div>
      </section>

      <footer className="nf-footer">
        <span>HR<span className="nf-footer-dot">.</span></span>
        <span>LOST IN SPACE. BUILT WITH PURPOSE.</span>
        <span>© {new Date().getFullYear()} HASANAIN RAZA</span>
      </footer>
    </main>
  );
}
