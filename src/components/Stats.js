import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import ContextWrapper from '../context/ContextWrapper';

function Stats(props) {
    // const {totalTasks,totalDailyTasks,completedTotalDailyTasks,completedTotalTasks}=useContext(GlobalContext);
    // console.log(totalTasks);
   
    const [tasks,setTasks]=useState([]);
    const {
      dispatchWebEvent,
      savedWebsites,
      savedEvents,
      setSelectedWebsite
    }=useContext(GlobalContext);
    useEffect(()=>{
      setTasks(savedEvents);
    })

console.log(tasks);

    
    const {selectedWebsite}=useContext(GlobalContext);
    const [title,setTitle]=useState('');
    const [url,setUrl]=useState('');
    const [selected,setSelected]=useState();
    const [create,setCreate]=useState(false);


function handleSubmit(e){
  e.preventDefault();
  const website={
    title,
    // url,
    // selected,
    // id:selectedWebsite?selectedWebsite.id:null
  };
   
  // }
}





  return (
    <div>
     

        <ContextWrapper>
        
            <button onclick={()=>setCreate(true)}>Add website</button>
            { <div>
              <form>
            <header>Websites to be blocked</header>
              
            <input type="text" name="title" value={title} placeholder='website'
            onChange={(e)=>setTitle(e.target.value)}></input>
            <button 
            onclick={()=>{props.addList(title)
            setTitle=""}
            }> submit</button>

            
          </form> 
          
          
          
          
          </div>}

          

      




</ContextWrapper>





    </div>
  )
}

export default Stats