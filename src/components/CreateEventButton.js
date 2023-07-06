import React, { useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import GlobalContext from '../context/GlobalContext';
function CreateEventButton() {
const {setShowEventModal}=useContext(GlobalContext);
  return (
    <button  
    onClick={()=>setShowEventModal(true)}  className=' text-white  flex p-2 justify-centre items-centre   bg-black-200 p-1 mr-3  text-sm shadow-sm shadow-violet-600 mb-1 truncate bg-violet-800 bg-gradient-to-bl from-gray-900 via-purple-900 to-violet-600  text-white  rounded-full shadow-md hover:font-bold'>
 
     <AiOutlinePlus className='w-7 h-7 p-1'/>
   <span className='pl-3 pr-7 p-1'>Create</span>
    </button>
   
  )
}

export default CreateEventButton