import { useState } from 'react'
import './App.css'

//Reusable Components
import Tasks from './Components/Tasks'
import TimerCount from './Components/TimerCount'

function App() {
   const[tasks,setTasks] = useState([]);

   //add task function
   const addTask = (task) => {
     setTasks([...tasks,task]);
   };

   // function for updating tasks 
   const updateTask = (index, updatedTask ) => {
      const updatedTasks = tasks.map((task,i) => (i === index ? updatedTask : task));
      setTasks(updatedTasks);
   };

  return (
    <>
    <div className="app">
    <div className="container">
      <h1>Time Tracking App</h1>
        <TimerCount addTask={addTask}/>
        <Tasks tasks={tasks} updateTask={updateTask}/>
    </div>
    </div>
    </>
  )
}

export default App
