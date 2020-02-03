import React, { useState } from 'react';
import data from '../dummy_data.js';
import $ from 'jquery';



// const items = [...data];
// console.log(items)
// const similarProductsData = Object.keys(JSON.parse(item));
// console.log(similarProductsData)




  const Slides = () => {

//   fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });
        //         //  currentImageIdx, setCurrentImagIdx
  const [ slides, setSlides ] = useState({data});
  const [ slideIndex, setSlideIndex ] = useState(0);
  // console.log(slides)
  const slideBack = () => {
    // is slideIndex in the very beginning of the carousel?
                                   // true or false
    const resetToLastIndex = slideIndex === 0;
    // if slide Index is at index zero, then reset index to the last place; if false, then move index 1 spot to the left
    const i = resetToLastIndex ? slides.data.length - 1 : slideIndex - 1;
    // console.log(i)

    // assign the logical index to current slide index that will be used in render method
    setSlideIndex(i);
  };

  const slideForward = () => {
     // is slideIndex in the very end of the carousel?
                            //  true or false
    const resetToFirstIndex = slideIndex === slides.data.length - 1;
     // if slide Index is at the last index of the carousel reset index to the first place; if false, then move index 1 spot to the right
    const i = resetToFirstIndex ? 0 : slideIndex + 1;

    // assign the logical index to current slide index that will be used in render method
    setSlideIndex(i);

  }



  // create a new array with 5 elements from the slides
    const slideArray = slides.data.slice(slideIndex, slideIndex + 5);
    console.log(slideArray)

  // check the length of the new array (it’s less than 5 when index is at the end of the active slides array)
  //                            true or false
   const activeSlides = slideArray.length < 5

   // if the active Array's length is shorter than 5 slides then append missing slides from the beginning of the original slide array
   ? [...slideArray, ...slides.data.slice(0, 5 - slideArray.length) ] : slideArray;




  return (
    <div>

      <div className="h2-style-guide st-current">Similar Products</div>

       <button className="backButton" onClick={slideBack}>Back</button>
      {/* render images */}
      {activeSlides.map((slide, i) => //image, index
        <img key={i} src={slide} alt='' style={{width: 247, height: 247}} />
      )}
      <button className="forwardButton" onClick={slideForward}>Forward</button>

    </div>

  );
};




export default Slides;

