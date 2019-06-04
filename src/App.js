import React from "react";
import { Route } from "react-router-dom";
import IntroPage from "./components/IntroPage.jsx";
import "./App.css";
import QuizPage from "./components/QuizPage.jsx";
import ResultPage from "./components/ResultPage.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={IntroPage} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/result" component={ResultPage} />
      </div>
    );
  }
}

export default App;
