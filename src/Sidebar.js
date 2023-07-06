import React from 'react'
import CreateEventButton from './components/CreateEventButton'
import SmallCalendar from './components/SmallCalendar'
import TaskDisplay from './components/TaskDisplay'
import UpcomingTasks from './components/UpcomingTasks'



function Sidebar() {
  return (
   <aside className='border p-5 w-64 text-white bg-black'>
    {/* <CreateEventButton/> */}
    {/* <SmallCalendar/> */}
    <TaskDisplay/>
<UpcomingTasks/>
   </aside>
  )
}

export default Sidebar