import React from "react";
import "./About.css";
import myImg from "../../assets/myImg.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="intro">
          <p>
            I am an emerging talent in the realm of digital artistry, coupled
            with a burgeoning proficiency in UI design and front-end web
            development. Currently engaged as a trainee at Insight Workshop, I
            am wholeheartedly dedicated to refining my skill set, which
            encompasses an array of technologies including HTML, CSS,
            JavaScript, React, and Figma. My aspirations center around
            synergizing my creative prowess and technical acumen to make
            meaningful contributions to the dynamic domains of digital design
            and web development.
          </p>
        </div>
        <div>
          <img src={myImg} alt="myImg" className="myImg" />
        </div>
      </div>
    </>
  );
};

export default About;
