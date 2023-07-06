// import React from 'react'
import React, { useEffect, useState } from 'react';
function BlockedWebsites() {

    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve existing data from local storage
        const storedData = localStorage.getItem('formData');
        const existingData = storedData ? JSON.parse(storedData) : [];
      
        // Append the new form data to the existing data
        const newData = [...existingData, formData];
      
        // Store the updated data in local storage
        localStorage.setItem('formData', JSON.stringify(newData));
      
        // Reset the form
        setFormData({ name: '', email: '' });
    };


  const [formList, setFormList] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormList(JSON.parse(storedData));
    }
  }, []);


  return (
    <div>BlockedWebsites


<form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <div>
      <h2>Stored Form Data:</h2>
      {formList.length > 0 ? (
        formList.map((data, index) => (
          <div key={index}>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
          </div>
        ))
      ) : (
        <p>No stored form data found.</p>
      )}
    </div>

    </div>
  )
}

export default BlockedWebsites
