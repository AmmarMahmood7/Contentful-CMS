import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            quis iusto nihil architecto. Beatae explicabo minus suscipit, enim
            vel quidem?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman with a brower" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
