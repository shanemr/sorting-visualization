import React, { useEffect, useState } from "react";

import bubbleSort from '../SortingAlgorithms';

import '../Styles/SortingVisualizer.css'

const SortingVisualizer = () =>{
   
    const [sortArr, setSortArr] = useState([]);
    const[active, setActive] = useState([0,1]);
   
    const resetSortArray = () =>{
        const array = [];
        for(let i = 0; i < 150; i++){
            setSortArr([...sortArr, sortArr[i] = Math.floor(Math.random(1) * 700) + 1]);
        }
    }  

    
    useEffect(() =>{
        resetSortArray();
        
   }, [])




   // Timer delay for each iteration of sorting
   const timer = ms => new Promise(res => setTimeout(res, ms));
    
   
   
   const  bubbleSort  = async(speed) =>{
        for(let i = 0; i < sortArr.length - 1; i++){
            for(let z = 0; z < sortArr.length - i - 1; z++){
                let newActive = [z, z + 1];
                setActive(newActive);
                if(sortArr[z] > sortArr[z + 1]){
                    const updateList = sortArr;
                    let temp = updateList[z];
                    updateList[z] = updateList[z + 1];
                    updateList[z + 1] = temp;
                    setSortArr(updateList);
                }
                
                await timer(speed);
            }
        }
 
    }

    
    

    



    return(
        <div className='data-bar-container'>
            <button onClick={num => bubbleSort(100)}>Bubble Sort</button>
            {sortArr.map((value, index) => {
                return(
                    <div key={index} className='data-bar' style={{height: `${value}px`, backgroundColor: index === active[0] || index === active[1] ? 'red' : 'blue'}}>{value}</div>
                )
                
            })}
            

        </div>
    )

}



export default SortingVisualizer;