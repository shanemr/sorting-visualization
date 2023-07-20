import React, { useEffect, useState } from "react";

import bubbleSort from '../SortingAlgorithms';

import '../Styles/SortingVisualizer.css'
import Header from "./Header";

const SortingVisualizer = () =>{
   
     // Timer delay for each iteration of sorting
    const timer = ms => new Promise(res => setTimeout(res, ms));
    const [sortArr, setSortArr] = useState([]);
    // Keeps track of currently selected data bars
    const[active, setActive] = useState(0);
    // Speed of sorting algorithm
    const[speed, setSpeed] = useState(20);
    // Size of array
    const[arraySize, setArraySize] = useState(10);
    //
    const[barWidth, setBarWidth] = useState(.5);
   
    // Randomize data points in array
    const resetSortArray = () =>{
        const array = [];
        for(let i = 0; i < arraySize; i++){
            array[i] = Math.floor(Math.random(1) * 700) + 1;
        }
        setSortArr(array);
        setBarWidth(50/arraySize);
    }  

    
    // Resets array data on page refresh and initial load
    useEffect(() =>{
        resetSortArray();
        
   }, [])


   const  bubbleSort  = async() =>{
        for(let i = 0; i < sortArr.length - 1; i++){
            for(let z = 0; z < sortArr.length - i - 1; z++){
                let newActive = z + 1;
                setActive(newActive);
                if(sortArr[z] > sortArr[z + 1]){
                    const updateList = sortArr;
                    let temp = updateList[z];
                    updateList[z] = updateList[z + 1];
                    updateList[z + 1] = temp;
                    setSortArr(updateList);
                }
                
                await timer(speed * 10);
            }

        }
        setActive(0);
    }


    const setColor = (index) =>{
        return index === active ? 'green' : 'blue';
    }

    
   const updateSpeed = (e) =>{
        setSpeed(e.target.value);
   }

   const updateArraySize = (e) =>{
        setArraySize(e.target.value);
   }


    return(
        <body className="main-container">
            <Header updateSpeed={updateSpeed} 
                    speed={speed} 
                    resetSortArray={resetSortArray} 
                    bubbleSort={bubbleSort}
                    updateArraySize={updateArraySize}
                    arraySize={arraySize}
            ></Header>
            <div className='data-bar-container'>
                {sortArr.map((value, index) => {
                    return(
                        <div key={index} className='data-bar' style={{height: `${value}px`, backgroundColor: setColor(index), minWidth:`${barWidth}%`}}></div>
                    )
                
                })}
            </div>
        </body>
    )

}



export default SortingVisualizer;