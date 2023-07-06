
import React from 'react'
import dayjs from 'dayjs'
import GlobalContext from '../context/GlobalContext';
import { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import {AiFillPlayCircle} from 'react-icons/ai'
import ContextWrapper from '../context/ContextWrapper';

function TaskMainPage() {
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const {
      savedEvents,
      setSelectedEvent,
      dispatchCalEvent,
      // setStatus,
      // status
    } = useContext(GlobalContext);
    const [status,setStatus]=useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const events = savedEvents.filter(
          (evt) =>
            dayjs(evt.day).format("DD-MM-YY") ===dayjs().format("DD-MM-YY")
        );
        // console.log(events);
        setUpcomingTasks(events);
      }, [savedEvents]);


  return (
    <div className='bg-black'>
        <ContextWrapper>
    <div className='pr-10 pl-4 py-2 m-0 w-fit font-bold  text-md shadow-sm shadow-violet-600 rounded-full mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
              text-white  rounded-5 shadow-md '>
       <button className='text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        
        Upcoming Tasks</button>
        </div>
     {!isOpen && <ul>
{ upcomingTasks.map((evt, idx) => evt.status && (
          <li
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-white text-sm rounded mb-1 truncate flex`}
          >
             
              <span className='m-1 justify-center '> 
              <span className='text-sm mx-2'> {
              evt.title }</span>
            </span>
           
          </li>
        ))}
        </ul>}
        </ContextWrapper>
    </div>
  )
}

export default TaskMainPage