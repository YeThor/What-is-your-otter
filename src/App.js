import React from "react";
import ReactDOM from "react-dom";
import IntroPage from "./components/IntroPage.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return <IntroPage />;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
