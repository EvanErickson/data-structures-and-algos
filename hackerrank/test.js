import React, { useState, useEffect } from 'react';

function Slides({slides}) {
  let slideArray = slides;
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slideArray[count])

 
  function increment(count){
    console.log('lcikc', count)
    setCount(count+1)
  }

  function decrement(count){
    setCount(count-1)

  }

  function restart(count){
    setCount(0)
  }

  useEffect(() => {
    setCurrentSlide(slideArray[count])
  }, [count])
 
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={() => {restart(count)}} disabled={count === 0} className="small outlined">Restart</button>
                <button data-testid="button-prev"  onClick={() => {decrement(count)}} disabled={count === 0} className="small">Prev</button>
                <button data-testid="button-next"  onClick={() => {increment(count)}} disabled={count === slideArray.length - 1 } className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
