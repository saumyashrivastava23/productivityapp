import React,{useState,useEffect,useRef, useContext} from 'react'
import GlobalContext from '../context/GlobalContext'
import { Link } from 'react-router-dom';
import App from '../App';
import AlertOnUnload from './AlertOnUnload';

function CountdownTimer({total,eve}) {
    const {timer,setTimer}=useContext(GlobalContext);
  
    
    const timerId=useRef()
    const {timerFlag,setTimerFlag}=useContext(GlobalContext);
    const {totalTime}=useContext(GlobalContext);
    const [countdown,setCountdown]=useState(total);
    const {selectedEvent,setSelectedEvent,dispatchCalEvent}=useContext(GlobalContext);
    const [countdownTimerStatus,setCountdownTimerStatus]=useState(eve.countdownStatus);
    const [status,setStatus]=useState(false);
  const {blockStatus, updateBlockStatus}=useContext(GlobalContext);
  const {updateCompletedTotalTasks,updateCompletedTotalDailyTasks}=useContext(GlobalContext);

  const[returnStatus,setReturnStatus]=useState(false);
    useEffect(()=>{
        if(status==true){
        timerId.current=setInterval(()=>{
            setCountdown(prev=>prev-1)
        },1000)}

        return()=>clearInterval(timerId.current)
    })
    useEffect(()=>{
        if(countdown<=0){
            clearInterval(timerId.current)
            setReturnStatus(true);
            eve.status=false;
        dispatchCalEvent({
          type: "update",
          payload:eve,
        });
            updateCompletedTotalDailyTasks();
            updateCompletedTotalTasks();
            // setBlockStatus(false);
        }
    })
    const [seconds,setSeconds]=useState(0);
    useEffect(()=>{
        setSeconds((seconds)=>Math.floor((countdown) % 60)<=9
        ?'0'+Math.floor((countdown) % 60)
        :Math.floor((countdown) % 60))
    })
    const [minutes,setMinutes]=useState(0);
    useEffect(()=>{
        setMinutes((minutes)=>Math.floor((countdown/60) % 60)<=9?
        '0'+Math.floor((countdown/60) % 60)
        :Math.floor((countdown/60) % 60))
    })
    const [hours,setHours]=useState(0);
    useEffect(()=>{
        setHours((hours)=>Math.floor((countdown/60) % 60)<=9
        ?'0'+Math.floor((countdown/60/60) % 60)
        :Math.floor((countdown/60/60) % 60))
    })
    const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    alert("You are Quitting");
    setIsShown(current => !current);
    setCountdownTimerStatus(true);
    eve.countdownStatus=countdownTimerStatus;
    updateBlockStatus(!blockStatus);
    console.log(blockStatus);
    if(selectedEvent==eve)
        dispatchCalEvent({ type: "update", payload: eve });
  };
  const handleStart = event => {
    
    
    setCountdownTimerStatus(false);
    eve.countdownStatus=countdownTimerStatus;
    setStatus(true);

    updateBlockStatus(!blockStatus);
    console.log(blockStatus);
      if(selectedEvent==eve)
        dispatchCalEvent({ type: "update", payload: eve });

  };
  
    
    return (
        
    <div className='text-white'>
   
    {/* if(countdownTimerStatus==true) */}
    { countdown>0 &&  isShown && <div className='flex flex-col items-center justify-center h-screen'>
     <div className='flex items-center justify-center '>
    <span className=' rounded-lg shadow-lg shadow-violet-600 p-4 m-2 bg-violet-800  text-7xl flex items-center justify-center'>{hours}</span> 
    <span className=' rounded-lg shadow-lg shadow-violet-600 p-4 m-2 bg-violet-800  text-7xl flex items-center justify-center'>{minutes}</span>
    <span className=' rounded-lg shadow-lg shadow-violet-600 p-4 m-2 bg-violet-800  text-7xl flex items-center justify-center'>{seconds} </span>
    </div>
    <div className='flex items-center justify-center p-4 m-4 text-4xl'>
    <button className='mx-5 my-3 hover:scale-110 hover:text-violet-900  shadow-md' onClick={handleStart}>Start</button>
      
    <button className='mx-5 my-3 hover:scale-110 hover:text-violet-900 shadow-md' onClick={handleClick}>Give up</button></div>
    </div>}
    <div>{ 
    returnStatus && <Link  to="/App" className='flex items-center justify-center h-screen hover:scale-110 hover:text-violet-900 font-bold text-4xl text-shadow-lg text-shadow-violet-600'>Task Completed
       </Link>
      
    }</div>
    <AlertOnUnload/>
    </div>
  )}

export default CountdownTimer