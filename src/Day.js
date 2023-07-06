import React from 'react'
import dayjs from 'dayjs'
import GlobalContext from './context/GlobalContext';
import { useState,useEffect,useContext } from 'react';


  

  function Day({ day,rowIdx }) {

    const [dayEvents, setDayEvents] = useState([]);
    const {setDaySelected,
      setShowEventModal,
      savedEvents,
      setSelectedEvent,
    } = useContext(GlobalContext);
  
    useEffect(() => {
      const events = savedEvents.filter(
        (evt) =>
          dayjs(evt.day).format("DD-MM-YY") ===day.format("DD-MM-YY")
      );
      setDayEvents(events);
    }, [savedEvents, day]);


    function getCurrentDayClass(){
      return day.format("DD-MM-YY")===dayjs().format("DD-MM-YY")
      ?"bg-violet-800 font-bold text-white rounded-full w-7"
      :"";
    }

  return (
    <div className="border-black flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1  text-violet-800 font-bold p-2">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={evt.status==true?
              `bg-${evt.label}-200 p-1 mr-3  text-sm shadow-sm shadow-violet-600 rounded mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
              text-white  rounded-5 shadow-md `:`bg-${evt.label}-200 p-1 mr-3  text-sm shadow-sm shadow-violet-600 rounded mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
              text-white  rounded-5 shadow-md line-through`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default Day