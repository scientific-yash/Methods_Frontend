import React, { useState } from 'react';
import axios from 'axios';

function AddCustomer() {
  const [customer, setCustomer] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5269/api/Customer', customer)
      .then(response => console.log(response))
      .then(alert("Added Customer Successfully!"))
      .catch(error => console.error(error));
  };

  return (
    <>
      <div className="card" style={{alignItems:'center',backgroundColor:'#E8F6EF'}}>
        <h3>Add Customer</h3>
        <div className="card-body" style={{width:'40%'}}>
          <label> <strong>Id:</strong> </label>
          <input type='text' name='id' onChange={handleInputChange}/><br />
          <label> <strong>First Name:</strong> </label>
          <input type="text" name="firstName" onChange={handleInputChange}/><br />
          <label> <strong>Last Name:</strong> </label>
          <input type="text" name="lastName" onChange={handleInputChange} /><br />
          <label> <strong>Address:</strong> </label>
          <input type="text" name="address" onChange={handleInputChange} /><br />
          <label> <strong>Phone Number:</strong> </label>
          <input type="text" name="phoneNumber" onChange={handleInputChange} /><br />

          <button onClick={handleSubmit}>Add Customer</button>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
