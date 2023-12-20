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
      .catch(error => console.error(error));
  };

  return (
    <>
    <h2>Add Customer</h2>

    <div className='container' style={{display:'flex',alignItems:'center'}}>
      <label>First Name: </label>
      <input type="text" name="firstName" onChange={handleInputChange} /><br />
      <label>Last Name: </label>
      <input type="text" name="lastName" onChange={handleInputChange} /><br />
      <label>Address: </label>
      <input type="text" name="address" onChange={handleInputChange} /><br />
      <label>Phone Number: </label>
      <input type="text" name="phoneNumber" onChange={handleInputChange} /><br />
      
    </div>
    <br></br>
    <button onClick={handleSubmit}>Add Customer</button>
    </>
  );
}

export default AddCustomer;
