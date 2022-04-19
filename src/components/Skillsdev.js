import React from "react";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JAVASCRIPT from "../images/javascript.png";
import RE from "../images/react.png";
import NEXT from "../images/next.png";
import GIT from "../images/git.png";
import ANTD from "../images/antd.png";
import MATUI from "../images/material.png";
import IONIC from "../images/ionic.png";
import LARAVEL from "../images/laravel.png";
import MYSQL from "../images/mysql.png";
import FIREBASE from "../images/firebase.png";
import "../styles/Skillsdev.css";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const dataFronted = [
  {
    avatar: HTML,
    name: "HTML",
  },
  {
    avatar: CSS,
    name: "CSS ",
  },
  {
    avatar: JAVASCRIPT,
    name: "JavaScript",
  },
  {
    avatar: GIT,
    name: "Git",
  },
  {
    avatar: RE,
    name: "React",
  },
  {
    avatar: NEXT,
    name: "Next.js",
  },
  {
    avatar: IONIC,
    name: "IONIC",
  },
  {
    avatar: ANTD,
    name: "Antd Design",
  },
  {
    avatar: MATUI,
    name: "Material UI",
  },
];

const dataBackend = [
  {
    avatar: LARAVEL,
    name: "Laravel",
  },
  {
    avatar: MYSQL,
    name: "MySQL ",
  },
  {
    avatar: FIREBASE,
    name: "Firebase",
  },
];
const Skillsdev = () => {
  return (
    <section id="skillsdev">
      <h2>Herramientas que manejo</h2>
      <h5>Frontend Development</h5>
      <Swiper
        className="container skillsdevs_container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {dataFronted.map(({ avatar, name }, id) => {
          return (
            <SwiperSlide className="skillsdev" key={name + id}>
              <div className="logo">
                <img src={avatar} alt="perfil" title="avatar" />
              </div>
              <div className="name">
                <h5>{name}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h5>Backend Development</h5>
      <Swiper
        className="container skillsdevs_container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {dataBackend.map(({ avatar, name }, id) => {
          return (
            <SwiperSlide className="skillsdev" key={name + id}>
              <div className="logo">
                <img src={avatar} alt="perfil" title="avatar" />
              </div>
              <div className="name">
                <h5>{name}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skillsdev;
