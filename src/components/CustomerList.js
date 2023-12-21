import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5269/api/Customer')
      .then(response => setCustomers(response.data));
  }, []);

  return (
    <>
      <div class="card" style={{alignItems:'center'}}>
      <h3>Customer List</h3>
        <div class="card-body" style={{width:'60%'}}>
          <ul>
            {customers.map(customer => (
              <li key={customer.id}>
                {customer.id}. {customer.firstName} {customer.lastName} - {customer.address} - {customer.phoneNumber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
