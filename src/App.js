import React from 'react';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import './App.css';
function App() {
  return (
    <div class="card">
      <div class="card-body" style={{marginLeft:'25%',marginRight:'25%'}}>
        {/* <h3>Customer Management System</h3> */}
        <CustomerList />
        <AddCustomer />
        <UpdateCustomer />
        <DeleteCustomer />
      </div>
    </div>
  );
}

export default App;
