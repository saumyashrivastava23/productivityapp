import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext';
import { AiFillDelete } from 'react-icons/ai';

function TaskDisplay() {
 const [tasks,setTasks]=useState([]);
  const {savedEvents}=useContext(GlobalContext);
  useEffect(()=>{
    setTasks(savedEvents);
  })

  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent
  } = useContext(GlobalContext);

// console.log(savedEvents);

console.log(tasks);


  return (
    <div>
      <div className='px-8 py-2 mr-8 font-bold  text-md shadow-sm shadow-violet-600 rounded  truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
              text-white text-left rounded-full shadow-md '>Tasks</div>
        
            {/* <div ></div> */}
        {tasks.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 flex p-2 p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
          >
          {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                <AiFillDelete className='fill-violet-800 justify-center w-5 h-4  mx-2'></AiFillDelete>
              </span>
            )}   {evt.title}
            </div>
        ))}
    </div>
  )
}

export default TaskDisplay
