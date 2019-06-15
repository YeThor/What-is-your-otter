import React from "react";
import { Link } from "react-router-dom";
import introImage from "../../assets/intro-min.png";
import "./IntroPage.css";

class IntroPage extends React.Component {
  render() {
    return (
      <div className="container">
        <p> 이건 무슨 수달일까요?</p>
        <div className="image-box">
          <img src={introImage} />
        </div>
        <div className="button-box">
          <Link to="/quiz" className="btn-quiz">
            나의 수달 찾으러 가기
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroPage;
