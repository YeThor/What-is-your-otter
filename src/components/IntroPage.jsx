import React from "react";
import { Link } from "react-router-dom";
import introImage from "../../assets/intro-min.png";
import "./IntroPage.css";

class IntroPage extends React.Component {
  render() {
    return (
      <div>
        <header>당신의 수달은 무엇입니까?</header>
        <div className="image-container">
          <img src={introImage} />
        </div>
        <div>
          <Link to="/quiz">퀴즈 풀기</Link>
        </div>
      </div>
    );
  }
}

export default IntroPage;
