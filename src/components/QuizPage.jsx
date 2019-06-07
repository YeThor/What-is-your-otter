import React from "react";
import { Link } from "react-router-dom";

class QuizPage extends React.Component {
  render() {
    return (
      <div>
        <header> Quize Page</header>
        <Link to="/result"> 결과 보기 </Link>
      </div>
    );
  }
}

export default QuizPage;
