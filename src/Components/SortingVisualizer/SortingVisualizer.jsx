import React, { useState } from 'react'
import './SortingVisualizer.css'
import SortingAlgorithms from './SortingAlgorithms/SortingAlgorithms';


const SortingVisualizer = () => {
    const ANIMATION_SPEED_MS = 1;


    // This is the main color of the array bars.
const PRIMARY_COLOR = 'black';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
const [array, setarray] = useState([]);



const resetArray =() =>{ 
        const array = [];
        for(let i=0 ; i< 180 ; i++){
            array.push(randomInt(5 ,700));
        }
        setarray(array);
    }

    const mergeSort =() =>{
        const animations = SortingAlgorithms(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
       
    }

    const quickSort =() =>{
        
    }

    const heapSort =() =>{
        
    }

    const bubbleSort =() =>{
        
    }
  return (<>

  <div className="array-container">
  {array.map((value , idx) =>(
    <div className="array-bar" key={idx} style={{height :`${value}px`}}></div>
  ))}
  </div>
  <button className='btn1' onClick={resetArray}>Generate new array</button>
  <button className='btn2' onClick={mergeSort}> Merge Sort</button>
  <button className='btn3' onClick={quickSort}>Quick Sort</button>
  <button className='btn4' onClick={heapSort}>Heap Sort</button>
  <button className='btn5' onClick={bubbleSort}>Bubble Sort</button>


 


    </>
   
  )
}

const randomInt = (min, max) =>{
    return Math.floor(Math.random() * (max - min +1 ) + min);
}

export default SortingVisualizer

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }