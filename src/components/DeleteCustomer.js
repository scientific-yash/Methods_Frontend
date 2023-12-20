import React, { useState } from 'react';
import axios from 'axios';

function DeleteCustomer() {
  const [customerId, setCustomerId] = useState('');

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleDelete = () => {
    axios.delete(`https://localhost:5001/api/customer/${customerId}`)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Delete Customer</h2>
      <label>Customer ID: </label>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleDelete}>Delete Customer</button>
    </div>
  );
}

export default DeleteCustomer;
