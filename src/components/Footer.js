import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faThreads } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

// Array of social media objects with name, url, icon and color
const socials = [
  {
    url: "https://github.com/Joyce77777777",
    icon: faGithub,
    color: "white",
  },
  {
    url: "https://www.linkedin.com/in/joyce-z-275b55194/",
    icon: faLinkedin,
    color: "white",
  },
  {
    url: "https://www.threads.net/@jianing_j",
    icon: faThreads,
    color: "white",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
};
export default Footer;
