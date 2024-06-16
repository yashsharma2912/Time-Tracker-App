import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Tasks from './Components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Time Tracking App</h1>
      <Timer/>
      <Tasks/>
    </>
  )
}

export default App
