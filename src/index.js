         /*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextWrapper from './context/ContextWrapper';
import Home from './Home';
import Task from './Task';
import TimeDisplay from './components/TimeDisplay';
import MainPage from './MainPage';
import dayjs from 'dayjs';
import { AiFillDelete } from 'react-icons/ai';






import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Route,
  HashRouter as Router
  
} from "react-router-dom";
import Stats from './components/Stats';
import BlockedWebsites from './components/BlockedWebsites';


// // Retrieve the tasks from local storage
// const tasks = JSON.parse(localStorage.getItem('savedEvents')) || [];

// // Get the current date
// const currentDate = new Date();

// // Create an HTML element to display the tasks
// const taskList = document.getElementById('taskList');

// // Iterate over the tasks array and generate HTML list items for matching tasks
// tasks.forEach(task => {
//   // Parse the task object
 

//   // Check if the task date matches the current date
  
//   if ( dayjs(task.day).format("DD-MM-YY") ===dayjs().format("DD-MM-YY")   && task.status===true) {
//     // Create a list item for the matching task
//     const listItem = document.createElement('li');
//     listItem.textContent = task.title;
//     taskList.appendChild(listItem);
//   }
// });



document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");

  // Check the stored value and update the button state accordingly
  chrome.storage.local.get("isEnabled", function(result) {
    const isEnabled = result.isEnabled;
    toggleButton.textContent = isEnabled ? "Enabled" : "Disabled";
  });

  toggleButton.addEventListener("click", function() {
    chrome.storage.local.get("isEnabled", function(result) {
      const isEnabled = result.isEnabled;
      const newStatus = !isEnabled; // Toggle the value

      // Update the button state
      toggleButton.textContent = newStatus ? "Enabled" : "Disabled";

      // Store the new value
      chrome.storage.local.set({ isEnabled: newStatus });
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const websiteInput = document.getElementById("websiteInput");
  const addButton = document.getElementById("addButton");
  const websiteList = document.getElementById("websiteList");

  // Retrieve the existing websites from storage and update the list
  function updateWebsiteList() {
    websiteList.innerHTML = "";

    chrome.storage.local.get("websites", function(result) {
      const websites = result.websites || [];

      websites.forEach(function(website) {
        const listItem = document.createElement("li");
        listItem.textContent = website;

        const deleteButton = document.createElement("button");
        // const deletesvg=<AiFillDelete></AiFillDelete>
        // const deleteIcon = document.createElement("AiFillDelete");

        // deleteButton.setAttribute('height', '100');
        // deleteButton.setAttribute('width', '100');

        // Create a child element within the SVG
        // const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        // deleteIcon.setAttribute('x', '10');
        // deleteIcon.setAttribute('y', '10');
        // deleteIcon.setAttribute('width', '80');
        // deleteIcon.setAttribute('height', '80');
        deleteButton.style.color = '#4f06ac';
        deleteButton.style.accentColor='#4f06ac';
        deleteButton.style.margin='5px';
        deleteButton.style.padding='5px';



          // deleteButton.appendChild(deleteIcon);
        deleteButton.textContent ="         Delete";
        deleteButton.addEventListener("click", function() {
          deleteWebsite(website);
        });

        listItem.appendChild(deleteButton);
        websiteList.appendChild(listItem);
      });
    });
  }

  function deleteWebsite(website) {
    chrome.storage.local.get("websites", function(result) {
      const websites = result.websites || [];
      const updatedWebsites = websites.filter(function(item) {
        return item !== website;
      });

      chrome.storage.local.set({ websites: updatedWebsites });
      updateWebsiteList();
    });
  }

  addButton.addEventListener("click", function() {
    const website = websiteInput.value.trim();
    if (website) {
      chrome.storage.local.get("websites", function(result) {
        const websites = result.websites || [];
        websites.push(website);
        chrome.storage.local.set({ websites: websites });
        updateWebsiteList();
        websiteInput.value = "";
      });
    }
  });

  updateWebsiteList();
});








const router = createHashRouter([
  {
    path: "/Task",
    element: <Task/>,
  },
  {
    path: "/App",
    element: <App/>,
  },
  {
    path:"/",
    element:<MainPage/>

  },
  {
    path:"/Stats",
    element:<Stats/>

  },
  {
    path: "/time",
    element: <TimeDisplay/>,
  },
  {
    path: "/blocked",
    element: <BlockedWebsites/>,
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}  />
    
    
    
   </React.StrictMode>
  // <Router></Router>
  // <MainPage/>
);

// root.render(
//   <Router><MainPage/></Router>
// )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
