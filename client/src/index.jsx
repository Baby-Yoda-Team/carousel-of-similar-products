import React from "react";
import ReactDOM from "react-dom";
import Slides from "./components/Slides.jsx";
import data from './dummy_data.js';

const App = (props) => {(
  <container>
    <Slides />

  </container>

)};


ReactDOM.render(<Slides />, document.getElementById('app'));

