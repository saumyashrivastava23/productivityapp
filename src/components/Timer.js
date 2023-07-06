import React, { useContext, useState,useEffect } from 'react'
import CountdownTimer from './CountdownTimer'
import ReactDOM from 'react-dom/client';
import GlobalContext from '../context/GlobalContext';
import AlertOnUnload from './AlertOnUnload';

function Timer() {
  const [hour,setHour]=useState(null);
const [minute,setMinute]=useState(null);
const [second,setSecond]=useState(null);
// const {totalTime,setTotalTime}=useContext(GlobalContext);
// const {timerFlag,setTimerFlag}=useContext(GlobalContext);
// const {timer,setTimer}=useContext(GlobalContext);
const [flag,setFlag]= useState(false);


// const UpdateTotalTime=(value)=>{setTotalTime(hour*60*60+minute*60+second)};
const handleSubmit = (event) => {
  
//  const UpdateTotalTime=(value)=>{setTotalTime(hour*60*60+minute*60+second)};
//  setFlagTimer(hour*60*60+minute*60+second)
// setFlag(true);
 event.preventDefault();

  
}
// useEffect(() => {
//   setTotalTime(69)
// });

  return (
    <div className='flex justify-center '>
      {!flag && 
    <form className='justify-self-center ' onSubmit={()=>setFlag(true)}>
    <input class="relative mt-2 rounded-md shadow-sm m-2" type="number" placeholder='Hour' autoComplete='off' value={hour} 
    onChange={(e) => setHour(e.target.value)}
   ></input>
    <input class="relative mt-2 rounded-md shadow-sm m-2" value={minute}
    onChange={(e) => setMinute(e.target.value)}
    type="number" placeholder='Minutes' autoComplete='off'></input>
    <input class="relative mt-2 rounded-md shadow-sm m-2" value={second}
    onChange={(e) => setSecond(e.target.value)}
    type="number" placeholder='Seconds' autoComplete='off'></input>
    <input class="relative mt-2 rounded-md shadow-sm m-2" type="submit" />
    
      </form>
      
      }
      <div>
        {/* <div><button onClick={setTotalTime(hour*60*60+minute*60+second)}>done ha ha</button></div> */}
        
      </div>
     {flag && (
    //  <AlertOnUnload>
     <CountdownTimer total={(hour*60*60+minute*60+second)}/>
    //  </AlertOnUnload>
     )
     }
    </div>
   
  )
}

export default Timer