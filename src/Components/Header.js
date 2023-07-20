import React from "react";


function Header({resetSortArray, bubbleSort, speed, updateSpeed, updateArraySize, arraySize}){
    return(
        <div className='header-container'>
            <div className='header-content'>
            
                <button onClick={e => resetSortArray(e)}>Generate Array</button>
                <label htmlFor="array-size">Set Array Size</label>
                <input id='array-size' type='number' min='10' max ='300' value={arraySize} onChange={updateArraySize}></input>
                <label htmlFor="speed">Set Speed</label>
                <input id='speed' type='number' value={speed} onChange={updateSpeed}></input>
                <button onClick={num => bubbleSort(100)}>Bubble Sort</button>
                <button onClick={num => bubbleSort(100)}>Insertion Sort</button>
                <button onClick={num => bubbleSort(100)}>Quick Sort</button>
                <button onClick={num => bubbleSort(100)}>Merge Sort</button>
            </div>
        </div>
    )
}


export default Header;