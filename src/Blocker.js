 /*global chrome*/
import React from 'react'
import { useState,useEffect } from 'react';
function Blocker() {

//     // const [todos, setTodos] = useState([]);
//     const [todos, setTodos] = useState(() => {
//         // get the todos from localstorage
//         const savedTodos = localStorage.getItem("todos");
//         // if there are todos stored
//         if (savedTodos) {
//           // return the parsed JSON object back to a javascript object
//           return JSON.parse(savedTodos);
//           // otherwise
//         } else {
//           // return an empty array
//           return [];
//         }
//       });

//     const [inputValue, setInputValue] = useState('');
  
//     // useEffect(() => {
//     //   const storedTodos = localStorage.getItem('todos');
//     //   if (storedTodos) {
//     //     setTodos(JSON.parse(storedTodos));
//     //   }
//     // }, []);
  
//     useEffect(() => {
//       localStorage.setItem('todos', JSON.stringify(todos));
//     }, [todos]);
  
//     const handleInputChange = (e) => {
//       setInputValue(e.target.value);
//     };
  
//     const handleAddTodo = () => {
//       if (inputValue.trim() !== '') {
//         setTodos([...todos, inputValue]);
//         setInputValue('');
//       }
//     };
  
//     // const handleDeleteTodo = (index) => {
//     //   const updatedTodos = todos.filter((_, i) => i !== index);
//     //   setTodos(updatedTodos);
//     // };
//     function handleDeleteClick(id) {
//         // here we are filtering - the idea is remove an item from the todo array on a button click
//         const removeItem = todos.filter((todo) => {
//           // return the rest of the todos that don't match the item we are deleting
//           return todo.id !== id;
//         });
//         // removeItem returns a new array - so now we are setting the todos to the new array
//         setTodos(removeItem);
//       }

//     function handleFormSubmit(e) {
//         // prevent the browser default behavior or refreshing the page on submit
//         e.preventDefault();
    
//         // don't submit if the input is an empty string
//         if ( inputValue!== "") {
//           // set the new todos state (the array)
//           setTodos([
//             // copy the current values in state
//             ...todos,
//             {
//               // setting a basic id to identify the object
//               id: todos.length + 1,
//               // set a text property to the value of the todo state and 
//               // trim the whitespace from the input
//               text: inputValue.trim()
//             }
//           ]);
//         }
    
//         // clear out the input box
//         setInputValue("");
//       }
  

//       // chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
//       //   console.log('Settings saved');
//       // });

//       var storage = chrome.storage.local;

//       storage.get("key1", function (items){        
//           if(items.key1 != undefined) { // Or items["key1"] != undefined
//              storage.remove("key1", function (){
//                  console.log("Key1 has been removed");
//              });
//           }
//           else {
//               storage.set({"key1":"value1"}, function (){
//                   console.log("Key1 has been set");
//               });
//           }
//       });

//     return (
//       <div className='text-violet'>
      

// <form onSubmit={handleFormSubmit} className='text-yellow'>
      
//         <input
//           name="todo"
//           type="text"
//           placeholder="Create a new todo"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//       </form>

//       {/* create a ul to hold all of the list items */}
//       <ul className="todo-list">
//         {/* map over the todos array which creates a new li element for every todo
//         (make sure to add the "key" prop using the unique todo.id value to the li element)
//         remember this is an array of objects - so we need to access the property 
//         "text" to get the value we want to display */}
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.text}
//            <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       </div>
//     );










const [blockedWebsites, setBlockedWebsites] = useState([]);
const [newWebsite, setNewWebsite] = useState('');

const handleAddWebsite = () => {
  if (newWebsite.trim() !== '') {
    setBlockedWebsites(prevWebsites => [...prevWebsites, newWebsite]);
    setNewWebsite('');
  }
};

const handleRemoveWebsite = (website) => {
  setBlockedWebsites(prevWebsites =>
    prevWebsites.filter(item => item !== website)
  );
};

const handleSaveBlockedWebsites = () => {
  chrome.storage.sync.set({ blockedWebsites }, function() {
    console.log('Blocked websites saved:', blockedWebsites);
  });
};

return (
  <div>
    <h1>Website Blocker Extension</h1>
    <div>
      <input
        type="text"
        value={newWebsite}
        onChange={e => setNewWebsite(e.target.value)}
        placeholder="Enter a website URL"
      />
      <button onClick={handleAddWebsite}>Add</button>
    </div>
    <ul>
      {blockedWebsites.map((website, index) => (
        <li key={index}>
          {website}
          <button onClick={() => handleRemoveWebsite(website)}>Remove</button>
        </li>
      ))}
    </ul>
    <button onClick={handleSaveBlockedWebsites}>Save Blocked Websites</button>
  </div>
);

  
}

export default Blocker