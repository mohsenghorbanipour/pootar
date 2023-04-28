import "./styles/App.css";
import VideoCarousel from "./components/VideoCarousel";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={VideoCarousel}></Route>
      </div>
    </Router>
  );
}

export default App;
