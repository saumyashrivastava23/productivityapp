import React,{useEffect,useState,useContext}from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlinePlus } from "react-icons/ai";
import SmallCalendar from './SmallCalendar';
import Timer from './Timer';
import ContextWrapper from '../context/ContextWrapper';
import CreateEventButton from './CreateEventButton';
import GlobalContext from '../context/GlobalContext';
import EventModal from './EventModal';

function PopupMain() {
    const [flag,setFlag]=useState(false);
    const [flagTask,setFlagTask]=useState(false);
const handleClick = (event) => {
  // event.preventDefault();
  setFlag((flag)=>true)
  
}
const handleClick2 = (event) => {
  // event.preventDefault();
  setFlagTask((flagTask)=>!flagTask)
  
}
const handleClick3 = (event) => {
  // event.preventDefault();
  setFlagTask((flagTask)=>false)
  
}
const {showEventModal}=useContext(GlobalContext);

  return ( 
    <div>
        <div>

        {/* <div class="relative"> */}
        {/* <button type="button" class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false"> */}
    {/* <span>Solutions</span> */}
    {/* <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg> */}
  {/* </button> */}
 
{/* </div> */}
<div></div>
        {flag==true
           ?<Timer/>:""}
          {flagTask &&  <div    class=" flex items-center justify-center p-2">
            <div class="w-screen p-8 rounded-md bg-black ">
            <ContextWrapper>
              <CreateEventButton/>
              <SmallCalendar></SmallCalendar></ContextWrapper>
            <button onClick={(e)=>handleClick3()}>cancel</button>
           </div>
           </div>}
        <div className='m-1 p-1'>
          
          
            <div className='flex-col text-white'
              //   { <button className='border p-2 rounded-full flex items-center shadow-md hover:s'>
   
              //   <AiOutlinePlus className='w-7 h-7 fill-violet-800'/>
              // <span className=''></span>
              //  </button>}
                // position="top left"
                // overlay='bg-blue'
                >
{/*                
                <button className='border m-4 p-2 rounded-full flex items-center shadow-md hover:s'  onClick={(e)=>handleClick()}>
   
                <AiOutlinePlus className='w-7 h-7'/>
              <span className='pl-3 pr-7 '>Timer</span>
               </button> */}
           
              
                {/* <button  className='border  p-2 rounded-full flex items-center shadow-md hover:s' onClick={(e)=>handleClick2()}> */}
   
                {/* <AiOutlinePlus className='w-7 h-7'/>
              <span className='pl-3 pr-7'>
                Task
              </span> */}

{/* <AiOutlinePlus className='w-7 h-7 fill-violet-800'/>
               </button> */}
               <button  
    onClick={(e)=>handleClick2(true)}  className='ml-2 text-white  flex p-2 justify-centre items-centre   bg-black-200 p-1 mr-3  text-sm shadow-sm shadow-violet-600 mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600  text-white  rounded-full shadow-md hover:font-bold'>
 
     <AiOutlinePlus className='w-7 h-7 p-1'/>
   <span className='pl-3 pr-7 p-1 '>Create Task</span>
    </button>
            </div>
          
        </div>
    </div>
    </div>
  )
}

export default PopupMain