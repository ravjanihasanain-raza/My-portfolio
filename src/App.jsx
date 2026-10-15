
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './pages/Projects.jsx';
// import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import NotFound from './pages/NotFound.jsx';
function HomePage() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Experience /> */}
        <Certificates />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  const location = useLocation();

  const isNotFound =
    location.pathname !== '/' &&
    location.pathname !== '/projects' &&
    !location.pathname.startsWith('/projects/');

  return (
    <>
      {!isNotFound && <Navbar />}

      <Routes>
        {/* Main portfolio homepage */}
        <Route path="/" element={<HomePage />} />

        {/* All projects */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* Individual project details */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        {/* Custom animated 404 page */}
<Route path="*" element={<NotFound />} />      </Routes>

      {!isNotFound && <Footer />}
    </>
  );
}
