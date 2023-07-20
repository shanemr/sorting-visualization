import React, { useEffect, useState } from "react";

import bubbleSort from '../SortingAlgorithms';

import '../Styles/SortingVisualizer.css'
import Header from "./Header";

const SortingVisualizer = () =>{
   
     // Timer delay for each iteration of sorting
    const timer = ms => new Promise(res => setTimeout(res, ms));
    // Data array
    const [sortArr, setSortArr] = useState([]);
    // Keeps track of currently selected data bars
    const[active, setActive] = useState(0);
    // Speed of sorting algorithm
    const[speed, setSpeed] = useState(20);
    // Size of array
    const[arraySize, setArraySize] = useState(10);
    // Modifies width of dta bars to fit array 
    const[barWidth, setBarWidth] = useState(.5);
    // Keesp track of algoruthm selected
    const[algo, setAlgo] = useState();
   
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

   const updateAlgo = (e) =>{
    e.preventDefault();
    console.log("algo update")
        setAlgo(e.target.value)
        console.log(algo);
   }

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
            setActive(0);
        }
        
    }


    function runAlgorithm(){
        console.log('run algo called');
        switch (algo) {
            case 'bubble-sort':
             
                bubbleSort();
                break;
        
            default:
                break;
        }
    }


    const setColor = (index) =>{
        return index === active ? '#2272FF' : 'white';
    }

    
   const updateSpeed = (e) =>{
        setSpeed(e.target.value);
   }

   const updateArraySize = (e) =>{
        setArraySize(e.target.value);
   }


    return(
        <div className="main-container">
             <div className='data-bar-container'>
                {sortArr.map((value, index) => {
                    return(
                        <div key={index} className='data-bar' style={{height: `${value}px`, backgroundColor: setColor(index), minWidth:`${barWidth}%`}}></div>
                    )
                
                })}
            </div>
            <Header updateSpeed={updateSpeed} 
                    speed={speed} 
                    resetSortArray={resetSortArray} 
                    bubbleSort={bubbleSort}
                    updateArraySize={updateArraySize}
                    arraySize={arraySize}
                    updateAlgo={updateAlgo}
                    alog={algo}
                    runAlgorithm={runAlgorithm}
            ></Header>
           
        </div>
    )

}



export default SortingVisualizer;