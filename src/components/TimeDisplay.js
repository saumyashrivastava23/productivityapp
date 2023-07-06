import React from 'react'
import { useLocation } from 'react-router-dom'
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';
import ContextWrapper from '../context/ContextWrapper';
import AlertOnUnload from './AlertOnUnload';

function TimeDisplay() {
    const location=useLocation();
    const data=location.state;
    console.log(data);
    // const hours=data.hours;
    // const minutes=data.minutes;
    // const seconds=data.seconds;
    // const time=(hours*60*60+minutes*60+seconds);

  return (

    <div class="bg-black text-white ">
        <div class="min-h-full">
 
  </div>
     <div className='text-white bg-black h-screen'><ContextWrapper>
      {/* <AlertOnUnload> */}
      <CountdownTimer total={data.times} eve={data.selectedEvent}/> 
      {/* </AlertOnUnload> */}
      {data.selectedEvent.title}
      </ContextWrapper>
      </div>    
       </div>
  )
}

export default TimeDisplay