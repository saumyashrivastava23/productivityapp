import React, { useContext, useEffect, useState } from 'react'
import {  RxDragHandleHorizontal } from "react-icons/rx";
import {  AiFillCloseCircle,AiOutlineClockCircle } from "react-icons/ai";
import {MdSegment} from "react-icons/md"
import {BsBookmark} from "react-icons/bs"
import GlobalContext from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import ContextWrapper from '../context/ContextWrapper';
import { AiFillDelete, AiFillStar } from 'react-icons/ai';


const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
  ];




function EventModal() {

 const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
      } = useContext(GlobalContext);

    const [title,setTitle]=useState(  selectedEvent ? selectedEvent.title : "");
    const [description,setDescription]=useState(  selectedEvent ? selectedEvent.description : "");
    const [seconds,setSeconds]=useState( selectedEvent ? selectedEvent.seconds : 0);
    const [minutes,setMinutes]=useState( selectedEvent ? selectedEvent.minutes : 0);
    const [hours,setHours]=useState( selectedEvent ? selectedEvent.hours : 0);
    const [flag,setFlag]=useState(false);
    const [time,setTime]=useState(selectedEvent ? selectedEvent.time : 0);
    const [status,setStatus]=useState(true);
    const [countdownStatus,setCountdownStatus]=useState(true);
    const {updateTotalTasks,updateTotalDailyTasks,totalTasks}=useContext(GlobalContext);
    const [highlight,setHighlight]=useState(selectedEvent ? selectedEvent.highlight: false);

    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
          ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
          : labelsClasses[0]
      );

       function handleStart(){
        setTime((hours*60*60+minutes*60+seconds));
       }
       console.log(selectedEvent);
    
      function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
          title,
          description,
          status,
          hours,minutes,seconds,
          time,
          highlight,
          label: selectedLabel,
          countdownStatus,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        
        setTime((hours*60*60+minutes*60+seconds));
        // updateTotalTasks(totalTasks+1);
        // console.log(totalTasks);
        if (selectedEvent) {
          dispatchCalEvent({ type: "update", payload: calendarEvent });
          // updateTotalDailyTasks();
         

        } else {
          dispatchCalEvent({ type: "push", payload: calendarEvent });
         
        }
    
        setShowEventModal(false);
      }

   useEffect(()=>{
    setTime((hours*60*60+minutes*60+seconds))}
    ,[hours],[minutes],[seconds])



  return (
    <div className='h-screen w-full   fixed left-0 top-0 flex justify-center items-center'>
      <ContextWrapper>
        <form className='bg-gray-100 rounded-lg shadow-2xl w-1/10'>
            <header className='bg-balck p-1  font-bold  text-md shadow-sm shadow-violet-600 rounded mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
              text-white  rounded-5 shadow-md px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400'>
                <RxDragHandleHorizontal className='fill-white justify-center w-4 h-4   m-2'/>
                </span>
                <div className='flex'>
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
                <AiFillDelete className='fill-white justify-center w-5 h-4  m-2'></AiFillDelete>
                
                
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                <AiFillCloseCircle className='fill-white justify-center w-5 h-4  m-2'></AiFillCloseCircle>
              </span>
            </button>
            <button onClick={()=>setHighlight(true)}> <AiFillStar></AiFillStar></button>
          </div>
          
            </header>
            <div className='p-3'>
                <div className='grid grid-cols-1/5 items-end gap-y-7'>
                    
                    <input type='text' name="title" placeholder='Add title' value={title}
                  required
                  className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-violet-800 focus:outline-none focus:ring-0 focus:border-blue-500'
                  onChange={(e)=>setTitle(e.target.value)}></input>
                  <div className='flex '>
                  <span className='material-icons-outlined text-gray-600 object-center mx-2 my-2' ><AiOutlineClockCircle/>
                    </span>
                  <p className='mx-2 my-1'>{daySelected.format("dddd,MMMM DD")}</p>
                  
                  </div>
                  <div className='flex '>
                  <button className='material-icons-outlined text-gray-600 object-center mx-2 my-2'onClick={()=>setFlag(true)} ><AiOutlineClockCircle/>
                    </button>
                  <p className='mx-2 my-1'>{}</p>
                  <div className='flex justify-center '>
      { 
    <form className='justify-self-center' >
    <input class="relative mt-2 rounded-md shadow-sm m-2" type="number" placeholder='Hour' autoComplete='off' value={hours} 
    onChange={(e) => {setHours(e.target.value)}}
   ></input>
    <input class="relative mt-2 rounded-md shadow-sm m-2" value={minutes}
    onChange={(e) => {setMinutes(e.target.value)}}
    type="number" placeholder='Minutes' autoComplete='off'></input>
    <input class="relative mt-2 rounded-md shadow-sm m-2" value={seconds}
    onChange={(e) => {setSeconds(e.target.value)}}
    type="number" placeholder='Seconds' autoComplete='off'></input>
    {/* <input class="relative mt-2 rounded-md shadow-sm m-2" type="Submit" ></input> */}
    
    
      </form>
      
      
      }
     {/* <button onClick={()=>handleSubmit}>click</button> */}
      </div>
      
                  {/* hours*3600+minutes*60+seconds */}
                  </div>
                  <div className='flex'>
                  <span className='material-icons-outlines text-gray-400 my-5 mx-1'>
<MdSegment/>
                  </span>
                   <input type='text' name="description" placeholder='Add a description' value={description}
                  required
                  className='pt-3 border-0 text-gray-600 text-xl pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                  onChange={(e)=>setDescription(e.target.value)}></input>
                  </div>
                  {/* <span className='material-icons-outlines text-gray-400 my-5 mx-1'>
                   <BsBookmark/>
                  </span> */}
                  {/* <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div> */}
            <div >
          <button
            type="submit"
            onClick={handleSubmit}
            className=" float-right mr-6 px-5 py-2 font-bold  text-lg shadow-sm shadow-violet-600 rounded mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600
            text-white  rounded-5 shadow-md   hover:font-bold "
          >
            Save
          </button>
        </div>
                </div>
                
            </div>
        </form>
       
        </ContextWrapper>
        </div>
  )
}

export default EventModal