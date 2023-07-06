import React from 'react'
import ContextWrapper from './context/ContextWrapper'
import App from './App'
import Home from './Home'
import SmallCalendar from './components/SmallCalendar'
function Task() {
  return (
    <ContextWrapper><Home/></ContextWrapper>
    
  )
}

export default Task