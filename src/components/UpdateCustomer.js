import React, { useState } from 'react';
import axios from 'axios';

function UpdateCustomer() {
  const [customerId, setCustomerId] = useState('');
  const [updatedCustomer, setUpdatedCustomer] = useState({});

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleFetchCustomer = () => {
    axios.get(`https://localhost:5001/api/customer/${customerId}`)
      .then(response => setUpdatedCustomer(response.data))
      .catch(error => console.error(error));
  };

  const handleUpdate = () => {
    axios.put(`https://localhost:5001/api/customer/${customerId}`, updatedCustomer)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Update Customer</h2>
      <label>Customer ID: </label>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleFetchCustomer}>Fetch Customer</button>

      {updatedCustomer.id &&
        <div>
          <label>First Name: </label>
          <input type="text" name="firstName" value={updatedCustomer.firstName} onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, firstName: e.target.value })} /><br />
          <label>Last Name: </label>
          <input type="text" name="lastName" value={updatedCustomer.lastName} onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, lastName: e.target.value })} /><br />
          <label>Address: </label>
          <input type="text" name="address" value={updatedCustomer.address} onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, address: e.target.value })} /><br />
          <label>Phone Number: </label>
          <input type="text" name="phoneNumber" value={updatedCustomer.phoneNumber} onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, phoneNumber: e.target.value })} /><br />
          <button onClick={handleUpdate}>Update Customer</button>
        </div>
      }
    </div>
  );
}

export default UpdateCustomer;
