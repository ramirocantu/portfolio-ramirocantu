import React from "react";

const Work = () => (
  <section id="work">
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>UIL Computer Science</h3>
          <p className="info">
            Captain, Tutor
            <span>&bull;</span>
            <em className="date">August 2016 - Present</em>
          </p>

          <p>
            Tutored Computer Science to High Schoolers, and prepared them for the UIL Competition.
            We won first place in the school district in 2018 and 2019.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Sampli</h3>
          <p className="info">
            Programmer
            <span>&bull;</span>
            <em className="date">Work in Progress - Present</em>
          </p>

          <p>
            Sampli is a fork of AudioStellar, and aims to build an accesible digital instrument that is intuitive to use.
            <a href="https://gitlab.com/ramirocantu/sampli"> GitLab repo</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
);

export default Work;
