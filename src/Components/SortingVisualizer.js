import React, { useEffect, useState } from "react";

import '../Styles/SortingVisualizer.css'

const SortingVisualizer = () =>{
   
    const [sortArr, setSortArr] = useState([]);

   
    const resetSortArray = () =>{
        const array = [];
        for(let i = 0; i < 100; i++){
            setSortArr([...sortArr, sortArr[i] = Math.floor(Math.random(1) * 1000)]);
        }
    }  

    
    useEffect(() =>{
        resetSortArray();
        
   }, [])



    return(
        <div className='data-bar-container'>
            {sortArr.map((value, index) => {
                return(
                    <div key={index} className='data-bar' style={{height: `${value}px`}}>{value}</div>
                )
                
            })}

        </div>
    )

}



export default SortingVisualizer;