import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiDotnet,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";
import { technologies } from "../data/content";

const icons = {
  csharp: {
    Icon: SiDotnet,
    color: "#512BD4",
  },

  aspnet: {
    Icon: SiDotnet,
    color: "#7B61FF",
  },

  react: {
    Icon: SiReact,
    color: "#61DAFB",
  },

  javascript: {
    Icon: SiJavascript,
    color: "#F7DF1E",
  },

  node: {
    Icon: SiNodedotjs,
    color: "#68A063",
  },

  express: {
    Icon: SiExpress,
    color: "#FFFFFF",
  },

  sqlserver: {
    Icon: FaDatabase,
    color: "#E04A4A",
  },

  mysql: {
    Icon: SiMysql,
    color: "#4479A1",
  },

  mongodb: {
    Icon: SiMongodb,
    color: "#47A248",
  },

  firebase: {
    Icon: SiFirebase,
    color: "#FFCA28",
  },

  git: {
    Icon: SiGit,
    color: "#F05032",
  },
};

export default function TechStrip() {
  return (
    <div className="tech" aria-label="Technology stack">
      <div className="tech__label">
        Technologies
        <br />
        I work with
      </div>

      <div className="tech__list">
        {[...technologies, ...technologies].map((technology, index) => {
          const tech = icons[technology.key];

          if (!tech) return null;

          const Icon = tech.Icon;

          return (
            <div
              className="tech__item"
              key={`${technology.key}-${index}`}
              title={technology.label}
            >
              <Icon
                aria-hidden="true"
                style={{
                  color: tech.color,
                  fontSize: "1.4rem",
                  flex: "none",
                }}
              />

              <span>{technology.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}