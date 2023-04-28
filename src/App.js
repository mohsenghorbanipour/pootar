import "./styles/App.css";
import VideoCarousel from "./components/VideoCarousel";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <VideoCarousel />
      </div>
    </BrowserRouter>
  );
}

export default App;
