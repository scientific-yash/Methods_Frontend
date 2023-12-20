import React from 'react';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';

function App() {
  return (
    <div>
      <h1>Customer Management System</h1>
      <CustomerList />
      <AddCustomer />
      <UpdateCustomer/>
      <DeleteCustomer/>
    </div>
  );
}

export default App;
