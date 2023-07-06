import logo from './logo.svg';
import './App.css';
import React,{ useState,useContext,useEffect } from 'react';
import { getMonth } from './util';
import Sidebar from './Sidebar';
import Month from './Month';
import CalenderHeader from './CalenderHeader';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';


function Home() {
    const [currentMonth,setCurrentMonth]=useState(getMonth())
 const {monthIndex,showEventModal}=useContext(GlobalContext);
 useEffect(()=>{
  setCurrentMonth(getMonth(monthIndex));},[monthIndex])




  return (
<React.Fragment>
  {showEventModal && <EventModal/>}
  <div className="h-screen flex flex-col">
    <CalenderHeader />
      <div className="flex flex-1">
        <Sidebar/>
        <Month month={currentMonth}/>
      </div>
    
  </div>
  
</React.Fragment>
  )
}

export default Home