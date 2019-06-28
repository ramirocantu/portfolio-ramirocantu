import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>IDEA McAllen</h3>
          <p className="info">
            Class of 2020
            <span>&bull;</span>
            <em className="date">2014 - <i>present</i></em>
          </p>

          <p>
            Winner of IDEA’s Best Middle School this past year, IDEA McAllen is
            also home to the Rio Grande Valley Regional Junior Varsity Flag
            Football Champions!
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Online Education</h3>
          <p className="info">
            EdX and Pluralsight courses with a focus in computer science.
            <span>&bull;</span>
            <em className="date">March - April 2018</em>
          </p>

          <p>
            I've audited a boat load of courses in all things from react/javascript to computer vision and machine learning.
            I think online learning has a lot of merrit to anyone willing to learn.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
