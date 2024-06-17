import React, { useState, useEffect } from 'react';
import "./component.css"

const TimerCount = ({addTask}) => {
   const [time,setTime] = useState(0);
   const [isActive,setIsActive] = useState(false);
   const [showModle,setShowModle] = useState(false);
   const [taskTitle,setTaskTitle] = useState('');
   const [taskDesc,setTaskDesc] = useState('');

 useEffect(() => {
   let interval = null;
   if(isActive) {
     interval = setInterval(() => {
       setTime((prevTime) => prevTime + 1);
     }, 1000);
   }else if (!isActive && time !== 0){
    clearInterval(interval);
   }
   return () => clearInterval(interval);
 },[isActive,time]);

 const timeFormat = (seconds) => {
   const Hours = `0${Math.floor(seconds/3600)}`.slice(-2);
   const Mins = `0${Math.floor((seconds%3600)/60)}`.slice(-2);
   const Secs = `0${seconds % 60}`.slice(-2);
   return `${Hours} : ${Mins} : ${Secs}`;
 };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  }

  const handleSave = () => {
    setShowModle(true);
  }

  const handleCloseModle = () => {
    setShowModle(false);
  };

  const handleSaveTask = () => {
    const task = {
      title : taskTitle,
      desc : taskDesc,
      time: timeFormat(time),
    };
    addTask(task);
    setTaskTitle('');
    setTaskDesc('');
    setTime(0);
    setIsActive(false);
    setShowModle(false);  
  };
  
  
  return (
    <>
      <div className="timerBox">
        <div className="timer">
         <h2 className='timeCounter'>{timeFormat(time)}</h2>
         <div className="btngroup">
            <button onClick={handleStart} disabled={isActive}>
               Start
            </button>
            <button onClick={handlePause} disabled={!isActive}>
               Pause
            </button>
            <button onClick={handleSave} disabled={isActive}>
               Save
            </button>
         </div>
         </div>
        <div className="taskadd">
          {
            showModle && (
              <div className="modle">
                 <div className="modleContainer">
                    <div className="top">
                    <h2>Save Your Task</h2>
                    <span className='closebtn' onClick={handleCloseModle}>
                      &times;
                    </span>
                    </div>
                    <input type="text" 
                     placeholder='Title'
                     value={taskTitle}
                     onChange={(e) => setTaskTitle(e.target.value)}
                    />

                    <input type="text" 
                      placeholder='Write Description here' 
                      value={taskDesc}
                      onChange={(e) => setTaskDesc(e.target.value)}
                    />

                    <div className="modlebtns">
                        <button onClick={handleSaveTask}>Save</button>
                        <button onClick={handleCloseModle}>Cancel</button>
                    </div>
                 </div>
              </div>
            )}
          </div>
      </div>
    </>
  );
};

export default TimerCount