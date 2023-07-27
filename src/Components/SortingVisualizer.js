import React, { useEffect, useState } from "react";

import bubbleSort from '../SortingAlgorithms';

import '../Styles/SortingVisualizer.css'
import Controls from "./Controls";

const SortingVisualizer = () =>{
   
     // Timer delay for each iteration of sorting
    const sortSpeed = ms => new Promise(res => setTimeout(res, ms));
    // Data array
    const [sortArr, setSortArr] = useState([]);
    // Keeps track of currently selected data bars
    const[active, setActive] = useState(null);
    // Speed of sorting algorithm
    const[speed, setSpeed] = useState(1);
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
        setBarWidth(90/arraySize);
    }  

    
    // Resets array data on page refresh and initial load
    useEffect(() =>{
        resetSortArray();
        
   }, [arraySize])


   

  
   // Sets algorithm user selected to run
   const updateAlgo = (e) =>{
    e.preventDefault();
        setAlgo(e.target.value)
   }

   const  bubbleSort  = async() =>{
        for(let i = 0; i < sortArr.length - 1; i++){
            for(let z = 0; z < sortArr.length - i - 1; z++){
                let newActive = z + 1;
                setActive(newActive);
                if(sortArr[z] > sortArr[z + 1]){
                    const updateList = sortArr;
                    swap(updateList, z);
                    setSortArr(updateList);
                }
                
                await sortSpeed(500/speed);
            }
            setActive(0);
        }
        
    }

   const selectionSort = async() =>{
        const updatedArray = sortArr;
        
        for(let i = 0; i < updatedArray.length - 1; i++){
            document.getElementById(i).style.backgroundColor = 'green';
            let minIndex = i;
            for(let k = i + 1; k < updatedArray.length; k++){
                if(updatedArray[k] < updatedArray[minIndex]){
                    minIndex = k;
                    setActive(minIndex);
                    setSortArr([...updatedArray]);
                }  
                await sortSpeed(800/speed);
            }
             
            let temp = updatedArray[minIndex];
            updatedArray[minIndex] = updatedArray[i];
            updatedArray[i] = temp; 
            document.getElementById(i).style.backgroundColor = 'white';   
        }
        setSortArr([...updatedArray]);
        setActive(null)
   }
   
   
   // INSERTION SORT
    const insertionSort = async() =>{
        let updateList = sortArr;
        for(let i = 1; i < sortArr.length; ++i){
            let key = updateList[i];
            let j = i - 1;
            document.getElementById(i).style.backgroundColor = 'red';
            while(j >= 0 && updateList[j] > key){
                
                swap(updateList, j);
                setSortArr([...updateList]);
                setActive(j);
                await sortSpeed(500/speed);
                j--;
            }
            
            await sortSpeed(500/speed);
            document.getElementById(i).style.backgroundColor = 'white';
            updateList[j + 1] = key;
            setSortArr([...updateList]);
            
            
        }
        setActive(0);
    }

    
    
    // QUICKSORT with left and right pointers
    const partition = async(arr, low, high) =>{
        let pivot = arr[high];

        let i = high - 1;
        
        for(let j = low; j <= i; j++){
            
            document.getElementById(j).style.backgroundColor = 'green';
            if(arr[j] > pivot){
                while(i >= j){
                    document.getElementById(i).style.backgroundColor = 'red';
                    document.getElementById(j).style.backgroundColor = '#D3D3D3';
                    if(arr[i] < pivot){
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        await sortSpeed(1000/speed);
                        break;
                    }
                    await sortSpeed(1000/speed);
                    document.getElementById(i).style.backgroundColor = 'white';
                    
                    i--;
                    
                }
                document.getElementById(j).style.backgroundColor = 'green';
                setSortArr([...arr]);
                await sortSpeed(1000/speed);
            }
            await sortSpeed(1000/speed);
            document.getElementById(j).style.backgroundColor = 'white';
            
        }

        [arr[i + 1],arr[high]] = [arr[high], arr[i + 1]];
        document.getElementById(i + 1).style.backgroundColor = 'gold';
        setSortArr([...arr]);
       
        
        return i + 1;
    }

    const quickSort = async(arr, low, high) =>{
        if(low < high){
            setActive(high);
            let par = await partition(arr, low, high);
            
            await quickSort(arr, low, par - 1);
            await quickSort(arr, par + 1, high);
        }
        
    }
    
    
   const mergeSort = () =>{

   }



    // SIMPLE SWAPING FUNCTION
    function swap(array, index){
        let temp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = temp;
    }



    function runAlgorithm(){
        switch (algo) {
            case 'bubble-sort':
                bubbleSort();
                break;
            case 'selection-sort':
                selectionSort();
                break;
            case 'insertion-sort':
                insertionSort();
                break;
            case 'quick-sort':
                let newArr = sortArr;
                quickSort(newArr,0, sortArr.length - 1);
                break;
            case 'merge-sort':
                mergeSort();
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
                        <div key={index} id={index} className='data-bar' style={{height: `${value}px`, backgroundColor: setColor(index), minWidth:`${barWidth}%`}}>{value}</div>
                    )
                
                })}
            </div>
            <Controls updateSpeed={updateSpeed} 
                    speed={speed} 
                    resetSortArray={resetSortArray} 
                    bubbleSort={bubbleSort}
                    updateArraySize={updateArraySize}
                    arraySize={arraySize}
                    updateAlgo={updateAlgo}
                    alog={algo}
                    runAlgorithm={runAlgorithm}
            ></Controls>
           
        </div>
    )

}



export default SortingVisualizer;