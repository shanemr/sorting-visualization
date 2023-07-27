import React from "react";


import '../Styles/Header.css'
import { Button, Input, Form, FormGroup, Label } from "reactstrap";

function Controls({resetSortArray, updateAlgo, algo, speed, updateSpeed, updateArraySize, arraySize, runAlgorithm}){
    return(
        <div className='header-container'>
            <div className='header-content'>
                <div id='selection-container'>
                    <h2>Select Sorting Algorithm</h2>
                    <Form>
                        <FormGroup check>
                            <Label>Bubble Sort</Label>
                            <Input type='radio' id='bubble-sort' name='algo-type' value='bubble-sort' onChange={e => updateAlgo(e)}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label>Selection Sort</Label>
                            <Input type='radio' id='selection-sort' name='algo-type'value='selection-sort' onChange={e => updateAlgo(e)}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label>Insertion Sort</Label>
                            <Input type='radio' id='insertion-sort' name='algo-type'value='insertion-sort' onChange={e => updateAlgo(e)}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label>Quick Sort</Label>
                            <Input type='radio' id='quick-sort' name='algo-type' value='quick-sort' onChange={e => updateAlgo(e)}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label>Merge Sort</Label>
                            <Input type='radio' id='merg-sort' name='algo-type' value='bubble-sort' onChange={e => updateAlgo(e)}/>
                        </FormGroup>
                    </Form>                    
                </div>
                <div>
                <h1>{algo}</h1>
                </div>
                <div id="array-options-container">
                    
                    <Label htmlFor="array-size">Set Array Size</Label>
                    <Input id='array-size' type='number' min='10' max ='300' value={arraySize} onChange={updateArraySize}></Input>
                    <Label htmlFor="speed">Set Speed</Label>
                    <Input id='speed' type='number' value={speed} onChange={updateSpeed}></Input>
                    <Button color='danger' disabled={algo} onClick={runAlgorithm} style={{width:'100%', marginTop: '10%'}}>Run</Button>
                    <br/>
                    <Button onClick={e => resetSortArray(e)} style={{width:'100%', marginTop: '10%'}}>Generate New Array</Button>
                </div>
            </div>
        </div>
    )
}


export default Controls;