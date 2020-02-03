import React from "react";
import ReactDOM from "react-dom";
import Slides from "./components/Slides.jsx";
import data from './dummy_data.js';




const App = () => {



  return (
    <div className='App'>
      <container>


      <Slides  />

      </container>
    </div>
  );
}




// ReactDOM.render(<Slides />, document.getElementById('app'));

const rootElement = document.getElementById('app');
ReactDOM.render(<Slides />, rootElement);


