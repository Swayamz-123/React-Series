import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    //let Counter=15;
    let [counter,setCounter]= useState(15)   // variable and function responsible for updating it and dono ka name can be anything 
    
      const addValue=()=>{
         // iske andar kuch bhi default value de sakte hai
         console.log("Clicked",counter);
        counter=counter+1;   // tum dekhna tumne counter ke value jo bhi update ki hai wo show nhi hoga ui pe
        setCounter(counter);
       
      }
      const removeValue=()=>{
        counter=counter-1;
        setCounter(counter);
      }
      // react ne bola tumko jo karna hai karo but ui me kya dikhega kya nhi that he will control and to use it we have hooks
  return (    
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>add Value</button>
<br />
<button onClick={removeValue}>remove value</button>    </>
  )
}

export default App
