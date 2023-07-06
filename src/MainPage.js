import React from 'react'
import UpcomingTasks from './components/UpcomingTasks'
import ContextWrapper from './context/ContextWrapper'
import Blocker from './Blocker'
import Highlight from './components/Highlight'
import dayjs from 'dayjs'
import { useEffect,useState ,useContext} from 'react';
import GlobalContext from './context/GlobalContext';
import { Link } from 'react-router-dom';
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import {AiFillPlayCircle} from 'react-icons/ai'
import TaskMainPage from './components/TaskMainPage'
// import UpcomingTasks from './components/UpcomingTasks';


function MainPage() {
  // Retrieve the tasks from local storage
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
  // <div class="bg-black bg-opacity-75 text-white p-4">
 
  <div className='bg-black m-0'>
    
     <h1 class="p-2 text-xl text-violet-800 font-bold pb-4"><a href='#/App' target='_blank' class="p-2 text-xl text-violet-800 font-bold pb-4 text-decoration-none">App</a></h1> 
     <ContextWrapper>
 <TaskMainPage className="m-0"></TaskMainPage>
      </ContextWrapper>
  </div>
  )
}

export default MainPage