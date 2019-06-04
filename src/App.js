import React from "react";
import { Route } from "react-router-dom";
import IntroPage from "./components/IntroPage.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={IntroPage} />
      </div>
    );
  }
}

export default App;
