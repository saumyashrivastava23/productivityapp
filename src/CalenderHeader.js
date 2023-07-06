import React,{useContext} from 'react'
import {AiOutlineLeft,AiOutlineRight } from "react-icons/ai"
import GlobalContext from './context/GlobalContext'
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';


function CalenderHeader() {
  const {monthIndex,setMonthIndex}=useContext(GlobalContext);
  function handlePrevMonth(){
    setMonthIndex(monthIndex-1);
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex+1);
  }
  function handleReset(){
    setMonthIndex(
      monthIndex===dayjs().month()
      ?monthIndex+Math.random()
      :dayjs().month());
  }
  return (
    <header className='px-2 py-2 flex items-center bg-black text-white'>
      <h1 className='mr-10 text-xl text-violet-500 font-bold'>
       <Link to="/App">Calendar</Link>
        
      </h1>
      <button onClick={()=>handleReset()} className='border rounded py-2 px-4 mr-5 p-1 mr-3  text-sm shadow-sm shadow-violet-600 rounded mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
              text-white  rounded-5 shadow-md'>
        Today
      </button>
      <button onClick={()=>handlePrevMonth()}>
        <span className='material-icons-outlined cursor-pointer text-xl text-violet-600 mx-2'>
        <AiOutlineLeft/>
        </span>
      </button>
      <button onClick={()=>handleNextMonth()}>
        <span className='material-icons-outlined cursor-pointer text-xl text-violet-600 mx-2 '>
        <AiOutlineRight/>
        </span>
        
      </button>
 <h2 className='ml-4 text-xl text-violet-600 font-bold'>
  {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
 </h2>
  
    </header>

  )
}

export default CalenderHeader