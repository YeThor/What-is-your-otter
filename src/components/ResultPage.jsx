import React from "react";
import { Link } from "react-router-dom";

class ResultPage extends React.Component {
  render() {
    return (
      <div>
        <header> Result Page</header>
        <Link to="/">돌아가기</Link>
      </div>
    );
  }
}

export default ResultPage;
