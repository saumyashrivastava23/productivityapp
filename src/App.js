import logo from './logo.svg';
import './App.css';
import React,{ useState,useContext,useEffect } from 'react';
import { getMonth } from './util';
import Sidebar from './Sidebar';
import Month from './Month';
import CalenderHeader from './CalenderHeader';
import GlobalContext from './context/GlobalContext';
import { Link } from 'react-router-dom';
import Timer from './components/Timer';
import PopupTimer from './components/PopupTimer';
import PopupMain from './components/PopupMain';
import UpcomingTasks from './components/UpcomingTasks';
import TaskDisplay from './components/TaskDisplay';
import CountdownTimer from './components/CountdownTimer';
import ContextWrapper from './context/ContextWrapper';
import {BsPlusCircleFill} from "react-icons/bs"
import EventModal from './components/EventModal';
import CreateEventButton from './components/CreateEventButton';
import Highlight from './components/Highlight';
// import lottie from 'lottie-web'
// import Lottie from 'react-lottie';
import Stats from './components/Stats';
import Blocker from './Blocker';
// import animationData from './animation.json';


function App() {

  // const lottieOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  // };

  const [isShown, setIsShown] = useState(false);
  const {setShowEventModal}=useContext(GlobalContext);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  const {timerFlag,setTimerFlag}=useContext(GlobalContext);
  const {totalTime,setTotalTime}=useContext(GlobalContext);

  
// const [listWeb,setListWeb]=useState([]);
// let addList=(inputText)=>{
//   setListWeb([...listWeb,inputText]);
// }

// const [pageChanged, setPageChanged] = useState(false);

//   useEffect(() => {
//     const handlePageChange = () => {
//       setPageChanged(true);
//     };

//     // Attach the event listener to the 'beforeunload' event
//     window.addEventListener('beforeunload', handlePageChange);

//     // Attach the event listener to the 'popstate' event
//     window.addEventListener('popstate', handlePageChange);

//     // Clean up the event listeners when the component unmounts
//     return () => {
//       window.removeEventListener('beforeunload', handlePageChange);
//       window.removeEventListener('popstate', handlePageChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (pageChanged) {
//       // Display an alert when the page changes
//       alert('Page has changed!');
//     }
//   }, [pageChanged]);


  return (
<div class="bg-black min-h-screen ">


<div class="bg-black">
  <nav class="bg-black shadow-lg shadow-violet-950 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div >
            {/* <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
          </div>
          <div class=" hidden md:block">
            <div class="ml-2 flex items-baseline space-x-4">
              <span  class="text-gray-300 font-bold text-lg  ">Productivity App</span>
            <Link to="/Task"  class="text-gray-300 font-bold text-lg   hover:bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium
              ">Tasks</Link>
            {/* <Link to="/Time"  class="text-gray-300 hover: hover:text-white rounded-md px-3 py-2 text-sm font-medium">Timer</Link> */}
              {/* <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Stats</a> */}
              {/* <ContextWrapper>
              <Link to="/Stats"  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Stats</Link>
              <Link to="/blocked"  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blocked Websites</Link>
              </ContextWrapper> */}
            </div>
          </div>
        </div>
      
       
      </div>
    </div>

   
  </nav>

  <header className='bg-gray-950 mt-1' >
    <div class="mx-auto max-w-7xl ">
    <span>
     </span>
     <div  className='bg-black px-3 py-1'>  <PopupMain/></div>
     {/* <Blocker></Blocker> */}
    </div>
    
  </header>
  <main class="bg-black">
    
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      {/* <!-- Your content --> */}
      <ContextWrapper><UpcomingTasks ></UpcomingTasks></ContextWrapper>
      {/* <UpcomingTasks></UpcomingTasks> */}
    </div>
    {/* <div>
      <Lottie options={lottieOptions} />
    </div>
    */}
    
  </main>


      
      
     
</div>
{/* <footer ></footer> */}
 
</div>
  );
}

export default App;
