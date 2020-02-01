import React, { useState } from 'react';
import data from '../dummy_data.js';

// const Slides = () => {
//   const [ slides, setSlides ] = useState([

//             // "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//             "https://source.unsplash.com/2ShvY8Lf6l0/600x799",
//             "https://source.unsplash.com/Dm-qxdynoEc/600x799",
//             "https://source.unsplash.com/qDkso9nvCg0/600x799",
//             "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//             "https://source.unsplash.com/iecJiKe_RNg/600x799",
//             "https://source.unsplash.com/qDkso9nvCg0/600x799",
//             "https://source.unsplash.com/2ShvY8Lf6l0/600x799",
//             "https://source.unsplash.com/Dm-qxdynoEc/600x799",
//             //8
//             // 'https://via.placeholder.com/200x150?text=second',
//             // 'https://via.placeholder.com/200x150?text=third',
//             // 'https://via.placeholder.com/200x150?text=fourth',
//             // 'https://via.placeholder.com/200x150?text=fifth',
//             // 'https://via.placeholder.com/200x150?text=sixth',
//             // 'https://via.placeholder.com/200x150?text=seventh',
//             // 'https://via.placeholder.com/200x150?text=eighth',
//             // 'https://via.placeholder.com/200x150?text=ninth',
//             // 'https://via.placeholder.com/200x150?text=tenth'

//   ]);

  const Slides = () => {
        //         //  currentImageIdx, setCurrentImagIdx
  const [ slides, setSlides ] = useState({data});
  const [ slideIndex, setSlideIndex ] = useState(0);
  console.log(slides)
  const prevSlide = () => {
    // is slideIndex in the very beginning of the carousel?
                                   // true or false
    const resetToLastIndex = slideIndex === 0;
    // if slide Index is at index zero, then reset index to the last place; if false, then move index 1 spot to the left
    const i = resetToLastIndex ? slides.length - 1 : slideIndex - 1;
    console.log(i)

    // assign the logical index to current slide index that will be used in render method
    setSlideIndex(i);
  };

  const nextSlide = () => {
     // is slideIndex in the very end of the carousel?
                            //  true or false
    const resetToFirstIndex = slideIndex === slides.length - 1;
     // if slide Index is at the last index of the carousel reset index to the first place; if false, then move index 1 spot to the right
    const i = resetToFirstIndex ? 0 : slideIndex + 1;

    // assign the logical index to current slide index that will be used in render method
    setSlideIndex(i);

  }

  // create a new array with 5 elements from the slides
  // const slideArray = slides.slice(slideIndex, slideIndex + 5);

  const slideArray = slides.slice(slideIndex, slideIndex + 5);

  // check the length of the new array (it’s less than 5 when index is at the end of the active slides array)
  //                            true or false
   const activeSlides = slideArray.length < 5
    // if the active Array's length is shorter than 5 slides then append missing slides from the beginning of the original slide array
    // const activeSlides = [];
    // if (slideArray.length < 5) {
    //   slideArray.concat(slideArray.concat(slides.slice(0, 5 - slideArray.length)))
    // }



     ? [...slideArray, ...slides.slice(0, 5 - slideArray.length) ] : slideArray;


  return (
    <div>
      <button onClick={prevSlide}>Prev</button>
      {/* render images */}
      {activeSlides.map((slide, i) => //image, index
        <img key={i} src={slide} alt="" style={{
          maxWidth: '15%'
      }} />
      )}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};




export default Slides;