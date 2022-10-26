import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber,multNumber,divNumber} from './actions/index'
function App() {
   const myState = useSelector((state)=>state.changeTheNumber)
   const myOtherState = useSelector((state)=>state.multTheNumber)
   const dispatch = useDispatch();
  return (
    <>
      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())} ><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input"  value={myState}/>
        <a className="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
      </div>
  
      </div>

      <div className="container my-5">
  
  <h1>Multiplication/Divide counter</h1>
  <h4>using React and Redux</h4>
  
  <div className="quantity">
    <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(divNumber())} ><span>/</span></a>
    <input name="quantity" type="text" className="quantity__input"  value={myOtherState}/>
    <a className="quantity__plus" title="Increment" onClick={()=>dispatch(multNumber(5))}><span>*</span></a>
  </div>

  </div>  
        
    </>
  )
}

export default App