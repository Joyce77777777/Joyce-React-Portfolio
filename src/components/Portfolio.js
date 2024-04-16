import React from "react";
import Project from "./Project";
import MVC_blog from "../images/MVC_tech_blog.png";
import NoteTaker from "../images/Note_Taker.png";
import UnbreakableCream from "../images/Unbreakable_Cream.png";
import Weather from "../images/Weather.png";
import Text_Editor_PWA from "../images/Text_Editor_PWA.png";
import StaticPortfolio from "../images/Portfolio.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "MVC Tech Blog",
              description: "Model View Controller Tech Blog",
              imgSrc: MVC_blog,
              deployedLink:
                "https://mvc-tech-blog-demo-6fc1bf47e7d3.herokuapp.com/",
              githubLink:
                "https://github.com/Joyce77777777/MVC-Tech-Blog",
            },
            {
              title: "PWA Text Editor",
              description: "Text editor built using PWA framework",
              imgSrc: Text_Editor_PWA,
              deployedLink:
                "https://text-editor-pwa-aijj.onrender.com/",
              githubLink:
                "https://github.com/Joyce77777777/Text-Editor-PWA",
            },
            {
              title: "Note Taker",
              description: "Note taking app saving to local storage",
              imgSrc: NoteTaker,
              deployedLink:
                "https://note-taker-jz-ced6def144c4.herokuapp.com/",
              githubLink:
                "https://github.com/Joyce77777777/note-taker",
            },
            {
              title: "Unbreakable Cream",
              description: "A social recipe sharing platform",
              imgSrc: UnbreakableCream,
              deployedLink:
                "https://unbreakable-cream-a4b95d823c2c.herokuapp.com/",
              githubLink:
                "https://github.com/topcowmoo/unbreakable-cream",
            },
            {
              title: "Static Portfolio",
              description: "Simple and effective portfolio site",
              imgSrc: StaticPortfolio,
              deployedLink:
                "https://joyce77777777.github.io/Application-portfolio/",
              githubLink:
                "https://github.com/Joyce77777777/Application-portfolio",
            },
            {
              title: "Weather Dashboard",
              description: "Weather Dashboard with real-time API updates",
              imgSrc: Weather,
              deployedLink:
                "https://github.com/Joyce77777777/Weather-dashboard",
              githubLink:
                "https://joyce77777777.github.io/Weather-dashboard/",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
