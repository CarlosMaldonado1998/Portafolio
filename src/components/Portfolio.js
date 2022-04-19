import React from "react";
import IMAGE from "../images/searchHealth.png";
import IMAGE2 from "../images/Iglesia.png";
import IMAGE3 from "../images/profile2.png";
import IMAGE4 from "../images/profile2.png";
import "../styles/Portfolio.css";

const data = [
  {
    id: 1,
    image: IMAGE,
    title: "Search Health",
    description:
      "Uso de Next.js, Material Ui, Ionic, Firebase.",
    github: "https://github.com/CarlosMaldonado1998/SearchHealthWeb",
    demo: "https://search-health-web.vercel.app/",
  },
  {
    id: 2,
    image: IMAGE2,
    title: "Proyecto Iglesia",
    description: "Realizado con React, Antd Design, Firebase",
    github: "https://github.com/CarlosMaldonado1998/Proyecto-Iglesia",
    demo: "https://carlosmaldonado1998.github.io/Proyecto-Iglesia/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabajos realizados</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img className="portfolio_image" src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <h5>{description}</h5>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target={"_blank"}>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
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
