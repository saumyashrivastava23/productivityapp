import React from 'react'
import dayjs from 'dayjs'
import GlobalContext from '../context/GlobalContext';
import { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';

function Highlight() {
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const {
      savedEvents,
      setSelectedEvent,
      dispatchCalEvent,
      // setStatus,
      // status
    } = useContext(GlobalContext);
    const [status,setStatus]=useState();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const events = savedEvents.filter(
          (evt) =>
            dayjs(evt.day).format("DD-MM-YY") ===dayjs().format("DD-MM-YY") && evt.highlight===true
        );
        // console.log(events);
        setUpcomingTasks(events);
      }, [savedEvents]);
  return (
    <div>
       <button
        className="text-violet-800 font-bold text-5xl lg:text-3xl xl:text-3xl py-2 px-4 bg-transparent rounded hover:scale-125"
        onClick={() => setIsOpen(!isOpen)}
      >Highlights of the Day</button>
     {isOpen && <ul>
{ upcomingTasks.map((evt, idx) => evt.status && (
          <li
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
          >
            ( <span
                onClick={() => {
                  evt.status=status;
                  dispatchCalEvent({
                    type: "update",
                    payload:evt,
                  });
                  // setShowEventModal(false);
                     setStatus(false)
                   }

                }
                className="material-icons-outlined text-violet-400 cursor-pointer"
              >
                done
              </span>)
           {"    "}{evt.title} {evt.hours===0?"":evt.hours}:{evt.minutes}:{evt.seconds} 
            { <Link to="/Time"  class="text-violet-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" 
       state={{selectedEvent:evt,times:evt.hours*3600+evt.minutes*60+evt.seconds}}>Timer</Link>}
          </li>
        ))}
        </ul>}
    </div>
  )
}

export default Highlight