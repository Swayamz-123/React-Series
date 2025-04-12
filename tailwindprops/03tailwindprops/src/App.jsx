import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let someobject={
    useername: "swayam",
    age:20
  }

  let newArr=[1,2,3]
  return (
 
  <>
  <h1 className='bg-slate-500 mb-5 p-4 text-black'>Tailwind check</h1>
  
  <Card username="chai aur code" myobj={someobject}  arr={newArr} />   {/*directly object ya array nhi lega variable declare karke karna padega curly brace ke sath}
    <Card/>   {/* kitna bhi card dal skte hai but hume chahiye dusre me kuch change karna hai toh for this we have concept of cards*/}
  {/*Tum jo bhi value card me pass karoge wHI PROPS object me jayega*/}
  </>
  )
}

export default App
