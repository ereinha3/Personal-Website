import React from 'react';
import climbingImg from '../img/climbing.jpeg';
import drawingImg from '../img/drawing.jpeg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">About Me</div>
      <div className="about-content">
        <div className="about-text">
          <p className="tabbed-paragraph">
            I'm currently a Computer Science and Applied Mathematics third-year student at the University of Oregon.
            I love learning and am constantly pursuing a new challenge! Aside from my academics, I'm currently working with my co-founder on a start-up,
            Guppy, a "non-profit" Regulation Crowdfunding Intermediary with all profits channeled directly toward improving higher-education in Oregon.
            We are still looking for start-up funding so, if this interests you, please reach out!
          </p>
          <p className="tabbed-paragraph">
            I am additionally looking forward to continuing development on a game that was created over the course of this term for a Game Development class,
            with the hopes of publishing on Steam. Further, I'm incredibly excited to be working with the Department of Volcanology at University of Oregon to
            create autonomous software and apply machine learning to prediction problems.
            Apart from tech, I love creating art, climbing, lifting weights, playing guitar, and hiking. I also love meeting new people!
            If you like what you see or want to learn more, please reach out!
          </p>
        </div>
        <div className="about-image">
          <img className="front-image" src={climbingImg} alt="Climbing" />
          <img className="back-image" src={drawingImg} alt="Drawing" />
        </div>
      </div>
    </div>
  );
}

export default About;
