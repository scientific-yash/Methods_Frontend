import React, { useState } from 'react';
import axios from 'axios';

function UpdateCustomer() {
  const [customerId, setCustomerId] = useState('');
  const [updatedCustomer, setUpdatedCustomer] = useState({});
  const [fetchError, setFetchError] = useState(null);

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleFetchCustomer = () => {
    axios.get(`http://localhost:5269/api/Customer/${customerId}`)
      .then(response => setUpdatedCustomer(response.data))
      .catch(error => {
        setUpdatedCustomer({});
        setFetchError("Customer not found");
      });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:5269/api/Customer?id=${customerId}`, updatedCustomer)
      .then(response => console.log(response))
      .then(alert("Updated Successfully!"))
      .catch(error => console.error(error));
  };

  return (
    <div className="card" style={{ alignItems: 'center',backgroundColor:'#E8F6EF' }}>
      <h3>Update Customer</h3>
      <div className="card-body" style={{width:'40%'}}>
        <label> <strong>Customer ID:</strong> </label>
        <input type="text" onChange={handleInputChange}/>
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

        {fetchError && <p>{fetchError}</p>}
      </div>
    </div>


  );
}

export default UpdateCustomer;
