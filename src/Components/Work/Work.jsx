import React from "react";
import "./Work.css"; // Create a separate CSS file for styling
import digitalClock from "../../assets/digitalClock.jpg";
import todoList from "../../assets/todoList.jpg";
import be_yourself from "../../assets/be_yourself.png";
import feature_bugs from "../../assets/feature_bugs.png";

const Work = () => {
  return (
    <div id="work" className="work-container">
      <h3>My work:</h3>
      <div className="grid-container">
        <div>
          Digital clock
          <div>
            <a
              href="https://abhijit-guragain.github.io/digital-clock/"
              target="blank"
            >
              <img src={digitalClock} alt="digitalClock" className="myWork" />
            </a>
          </div>
        </div>
        <div>
          Todo List
          <div>
            <a
              href="https://abhijit-guragain.github.io/todo-list/"
              target="blank"
            >
              <img src={todoList} alt="my work" className="myWork" />
            </a>
          </div>
        </div>
        <div>
          Bugs || Features
          <div>
            <a href={feature_bugs} target="blank">
              <img src={feature_bugs} alt="my work" className="myWork" />
            </a>
          </div>
        </div>
        <div>
          Be Yourself
          <div>
            <a href={be_yourself} target="blank">
              <img src={be_yourself} alt="my work" className="myWork" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
