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
    <h2>Customer List</h2>
    <div>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.id}. {customer.firstName} {customer.lastName} - {customer.address} - {customer.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default CustomerList;
