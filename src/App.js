import React, { useState, useEffect } from 'react';
import axios from 'axios';  

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5269/api/Customer');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.id} . {customer.firstName} {customer.lastName} - {customer.address} - {customer.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

