import React, { useState } from 'react';
import axios from 'axios';

function DeleteCustomer() {
  const [customerId, setCustomerId] = useState('');
  const [deleteError, setDeleteError] = useState(null);

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5269/api/Customer?id=${customerId}`)
      .then(response => console.log(response))
      .then(alert("Customer Deleted Successfully!"))
      .catch(error => {
        setDeleteError("Customer not found or deletion failed");
      });
  };

  return (
    <div class="card" style={{ alignItems: 'center' }}>
      <h3>Delete Customer</h3>
      <div class="card-body" style={{width:'40%'}}>
        <label> <strong>Customer ID:</strong> </label>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleDelete}>Delete Customer</button>

        {deleteError && <p>{deleteError}</p>}
      </div>
    </div>

  );
}

export default DeleteCustomer;
