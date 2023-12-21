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
      .then(response => {
        console.log(response);
        alert("Customer Deleted Successfully!");
        window.location.reload(); // Reload the window after deleting the customer
      })
      .catch(error => {
        setDeleteError("Customer not found or deletion failed");
        console.error(error);
      });
  };
  

  return (
    <div className="card" style={{ alignItems: 'center',backgroundColor:'#E8F6EF' }}>
      <h3>Delete Customer</h3>
      <div className="card-body" style={{width:'40%'}}>
        <label> <strong>Customer ID:</strong> </label>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleDelete}>Delete Customer</button>

        {deleteError && <p>{deleteError}</p>}
      </div>
    </div>

  );
}

export default DeleteCustomer;
