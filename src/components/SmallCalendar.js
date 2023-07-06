import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../util';
import dayjs from 'dayjs';
import {AiOutlineLeft,AiOutlineRight } from "react-icons/ai"
import GlobalContext from '../context/GlobalContext';
import EventModal from './EventModal';


function SmallCalendar() {
    const [currentMonthIdx,setCurrentMonthIdx]=useState(dayjs().month());
    const [currentMonth,setCurrentMonth]=useState(getMonth());
    useEffect(()=>{
setCurrentMonth(getMonth(currentMonthIdx))
    },[currentMonthIdx] )
function handlePrevMonth(){
    setCurrentMonthIdx(currentMonthIdx-1);
}
function handlenextMonth(){
    setCurrentMonthIdx(currentMonthIdx+1);
}

const { monthIndex,setSmallCalendarMonth,setDaySelected,daySelected }=useContext(GlobalContext);
useEffect(()=>{
    setCurrentMonthIdx(monthIndex);
},[monthIndex]);

function getDayClass(day){
    const format="DD_MM_YY";
    const nowDay=dayjs().format(format);
    const currDay =day.format(format);
    const slcDay =daySelected && daySelected.format(format)
    if(nowDay==currDay){
        return ' rounded-full text-white     bg-black-200 p-1 mr-3  text-sm shadow-sm shadow-violet-600 mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600  text-white  rounded-5 shadow-md'
    }else if (currDay === slcDay) {
        return " text-violet-800  font-bold";
      } 
    else{
        return "";
    }
}

const {showEventModal}=useContext(GlobalContext);

  return (
    <div className='mt-9 text-white text-bold'>
        <header className='flex justify-between'>
<p className='text-violet-800 font-bold self-center'>
{dayjs(new Date(dayjs().year(),currentMonthIdx)).format("MMMM YYYY")}
</p>
<div>
<button onClick={()=>handlePrevMonth()}>
    <span className='material-icons-outlined cursor-pointer text-2xl  text-violet-800 mx-2 px-2'>
<AiOutlineLeft/>
    </span>
</button>
<button onClick={()=>handlenextMonth()}>
    <span className='material-icons-outlined cursor-pointer text-2xl text-violet-800 mx-2 px-2'>
<AiOutlineRight/>
    </span>
</button>
</div>
{showEventModal && <EventModal/>}
        </header>
        <div className='grid grid-cols-7 grid-rows-5'>
            {currentMonth[0].map((day,i)=>(
          <span key={i} className='text-sm py-` text-center'>
            {day.format("dd").charAt(0)}
          </span>      
            ))}
            {currentMonth.map((row,i)=>(
                <React.Fragment key={i}>
                 {row.map((day,idx)=>(
                  <button key={idx}
                  onClick={()=>{
setSmallCalendarMonth(currentMonthIdx);
setDaySelected(day)

                  }}
                  className={`py-1 w-full ${getDayClass(day)}`}>
                    <span className='text-sm'>
                        {day.format('D')}
                    </span>
                  </button>
                 ))}
                </React.Fragment>
            )
            )}
        </div>
    </div>
  )
}

export default SmallCalendar