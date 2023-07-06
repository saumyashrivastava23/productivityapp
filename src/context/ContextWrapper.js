import React,{useEffect, useState,useReducer} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";


function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");

  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}


function savedWebsitesReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initWebsites() {
  const storageWebsites = localStorage.getItem("savedWebsites");

  const parsedWebsites = storageWebsites ? JSON.parse(storageWebsites) : [];
  return parsedWebsites;
}



function ContextWrapper(props) {
    const [monthIndex,setMonthIndex]=useState(dayjs().month())
    const [smallCalendarMonth,setSmallCalendarMonth]=useState(null);
    const [daySelected,setDaySelected]=useState(dayjs());
    const [showEventModal,setShowEventModal]=useState(false);
    const [selectedEvent, setSelectedEvent] = useState();
    const [selectedWebsite, setSelectedWebsite] = useState();
    const [savedEvents, dispatchCalEvent] = useReducer(
      savedEventsReducer,
      [],
      initEvents
    );
    const [savedWebsites, dispatchWebEvent] = useReducer(
      savedWebsitesReducer,
      [],
      initWebsites
    );
    const initialTime=80;
    const [timer,setTimer]=useState("blue");
    const [timerFlag,setTimerFlag]=useState();
    const[totalTime,setTotalTime]=useState(initialTime);
    const [blockStatus,setBlockStatus]=useState(true);

    const [totalTasks,setTotalTasks]=useState(0);
    const [totalDailyTasks,setTotalDailyTasks]=useState(0);
    const [completedTotalTasks,setCompletedTotalTasks]=useState(0);
    const [completedTotalDailyTasks,setCompletedTotalDailyTasks]=useState(0);
    
    const updateTotalTasks =(e)=>{
      setTotalTasks(e);
    };
    const updateTotalDailyTasks =()=>{
      setTotalDailyTasks(totalDailyTasks=totalDailyTasks+1);
    };

    const updateCompletedTotalTasks =()=>{
      setCompletedTotalTasks(completedTotalTasks+1);
    };
    const updateCompletedTotalDailyTasks =()=>{
      setCompletedTotalDailyTasks(completedTotalDailyTasks=>completedTotalDailyTasks+1);
    };



    const updateBlockStatus = (newValue) => {
      setBlockStatus(newValue);
    };

    // useEffect(()=>{
    //   setTimerFlag(flag=>!flag);
    // })

    useEffect(() => {
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
      localStorage.setItem("savedWebsites", JSON.stringify(savedWebsites));
    }, [savedWebsites]);

   useEffect(()=>{
    if(smallCalendarMonth!== null){
      setMonthIndex(smallCalendarMonth);
    }
   },[smallCalendarMonth])

   useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);
  

  return (
    <GlobalContext.Provider value={{monthIndex,setMonthIndex,
      smallCalendarMonth,setSmallCalendarMonth,
      daySelected,setDaySelected,
      showEventModal,setShowEventModal,
      dispatchCalEvent,
      dispatchWebEvent,
      savedEvents,
      savedWebsites,
      selectedEvent,
      setSelectedEvent,
      selectedWebsite,
      setSelectedWebsite,
      timer,
      setTimer,
      timerFlag,
      setTimerFlag,
      totalTime,
      setTotalTime,
      blockStatus,
      updateBlockStatus,
      totalTasks,
      updateTotalTasks,
      totalDailyTasks,
      updateTotalDailyTasks,
      completedTotalTasks,
      updateCompletedTotalTasks,
      completedTotalDailyTasks,updateCompletedTotalDailyTasks,
    }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper