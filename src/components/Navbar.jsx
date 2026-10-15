import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";
import { Link, useLocation } from "react-router-dom";

// content.js stores links as { label, href: '#about' }; the section id is the part after '#'.
const links = navLinks.map((l) => ({ ...l, id: l.href.replace("#", "") }));
const ids = links.map((l) => l.id);

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu with Escape or when the screen becomes wide.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <Link
          to="/"
          className="nav__logo"
          aria-label="Hasanain Raza, back to top"
          onClick={close}
        >
          HR
        </Link>

        <nav
          id="site-nav"
          className={`nav__links ${open ? "is-open" : ""}`}
          aria-label="Main"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={isHomePage ? link.href : `/${link.href}`}
              className={`nav__link ${active === link.id ? "is-active" : ""}`}
              aria-current={active === link.id ? "true" : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__cta nav__cta--mobile"
            onClick={close}
          >
            Let&rsquo;s Talk
            <span className="dot" aria-hidden="true" />
          </a>
        </nav>

        <a href="#contact" className="nav__cta" onClick={close}>
          Let&rsquo;s Talk
          <span className="dot" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
