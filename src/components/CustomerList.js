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
      <div className="card" style={{ alignItems: 'center', backgroundColor: '#E8F6EF' }}>
        <h3>Customer List</h3>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.firstName} {customer.lastName}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </>
  );
}

export default CustomerList;
