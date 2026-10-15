
import { FiArrowUp } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a
          href="/"
          className="site-footer__logo"
          aria-label="HR — Home"
        >
          HR
        </a>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Hasanain Raza. All rights reserved.
        </p>

        <button
          type="button"
          className="site-footer__top"
          onClick={scrollToTop}
        >
          Back to top
          <FiArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
