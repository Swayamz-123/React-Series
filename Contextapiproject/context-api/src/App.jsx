import React,{useState} from 'react'
import './App.css'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'

function App() {const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Chai aur React and share the video </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
