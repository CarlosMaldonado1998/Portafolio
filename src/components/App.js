import React from "react";
import "../styles/App.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Skillsdev from "./Skillsdev";
import Experience from "./Experience";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Skillsdev />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
