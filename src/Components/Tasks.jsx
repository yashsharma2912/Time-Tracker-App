import React from 'react'
import { useState } from 'react'
import "./component.css"

const Tasks = ({tasks, updateTask}) => {
   const [showModle,setShowModle] = useState(false);
   const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
   const [currentTaskDesc, setCurrentTaskDesc] = useState('');

   const handleEditClick = (index) => {
     setCurrentTaskIndex(index);
     setCurrentTaskDesc(tasks[index].desc);
     setShowModle(true);      
   };

   const handleCloseModle = ( ) => {
     setShowModle(false);
     setCurrentTaskIndex(null);
     setCurrentTaskDesc('');
   };
   const handleSaveTask = () => {
      const updatedTask = {...tasks[currentTaskIndex],desc: currentTaskDesc};
      updateTask(currentTaskIndex, updatedTask)
      setShowModle(false);
      setCurrentTaskIndex(null);
      setCurrentTaskDesc('');
   };
   return (
    <>
      <div className="taskBox">
         <h3>Tasks</h3>
         <ul>
          {tasks.map((task,index) => (
            <li kay={index} className='taskItem'>
               <div className="taskInfo">
                 <h5>{task.title}</h5>
                 <p>{task.time}</p>
                 <p>{task.desc}</p>
               </div>
            <button onClick={()=>handleEditClick(index)}>Edit</button>
            </li>
          ))}
         </ul>
         {showModle && (
          <div className="modle">
             <div className="modleContainer">
              <div className="top">
               <h2>Edit Task</h2>
               <span className='close-btn' onClick={handleCloseModle}>
                 &times;
               </span>
               </div>
               <input type="text"
                placeholder='Write your Decription'
                value={currentTaskDesc}
                onChange={(e) => setCurrentTaskDesc(e.target.value)}
               />
               <div className="btngrp">
                   <button onClick={handleSaveTask}>Save</button>
                   <button onClick={handleCloseModle}>Cancel</button>
               </div>
             </div>
          </div>
         )}
      </div>
    </>
  )
}

export default Tasks