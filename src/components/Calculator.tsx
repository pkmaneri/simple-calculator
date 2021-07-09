import React, { useState } from "react"
import './Calculator.css';

 function Calculator(){
     const initialstate={
         newText:""
      
     }
    useState(initialstate);
    const [exp ,setExp] =useState("");

   const handleCalculate=()=>{
     var calculated=eval(exp);
    //  console.log(calculated)
     setExp(calculated)
   }
   const handleclear=()=>{
        setExp("")
   }

   const handleOnchangeNew = (event: any) =>{
       let temp = exp + "" + event.target.dataset.name;
       setExp(temp)
   }
    return(
        <div className="container">
             <div className="row style">
                 <div className="col" style={{height:"30px"}}>
                     {exp}
                 </div>         
            </div>
            <div className="row style">
                <div className="col-6 styleNumber "onClick={handleclear} data-name="clear">
                    clear
                </div>
                <div className="col styleDiv" onClick={handleCalculate} data-name="=">
                    =
                </div>
                <div className="col styleDiv" onClick={handleOnchangeNew} data-name="+">
                    +
                </div>
            </div>
            <div className="row style">
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="7">
                    7
                </div>                 
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="8">
                    8
                </div>                  
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="9">
                    9
                </div>                    
                <div className="col styleDiv" onClick={handleOnchangeNew} data-name="-">
                   -
                </div>               
            </div>
            <div className="row style">
            <div className="col styleNumber" onClick={handleOnchangeNew} data-name="4">
                    4
                </div>                 
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="5">
                    5
                </div>                  
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="6">
                    6
                </div>                    
                <div className="col styleDiv" onClick={handleOnchangeNew} data-name="*">
                   *
                </div>               
            </div>
            <div className="row style">
            <div className="col styleNumber" onClick={handleOnchangeNew} data-name="1">
                    1
                </div>                 
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="2">
                    2
                </div>                  
                <div className="col styleNumber" onClick={handleOnchangeNew} data-name="3">
                    3
                </div>                    
                <div className="col styleDiv" onClick={handleOnchangeNew} data-name="/">
                   /
                </div>               
            </div>
        </div>

    )
}
export default Calculator;