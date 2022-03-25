import React from "react";
import IMAGE from "../images/profile2.png";
import "../styles/Portfolio.css";

const data = [
  {
    id: 1,
    image: IMAGE,
    title: "Titulo",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: IMAGE,
    title: "Titulo",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: IMAGE,
    title: "Titulo",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: IMAGE,
    title: "Titulo",
    github: "https://github.com",
    demo: "https://google.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabajos realizados</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  En vivo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
