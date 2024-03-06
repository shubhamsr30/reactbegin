import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter]=useState(15)
   const addValue = () => {
    console.log("value added",counter);
    setCounter(counter+1);
   }
   const removeValue = () => {
    console.log("value removed",counter);
    setCounter(counter-1);
   }
  return (
    <>
     
      <h1>hiii</h1>
      <h2>Count values :{counter}</h2>
      <button onClick={addValue}>Add values</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove values</button>
    </>
  )
}

export default App
