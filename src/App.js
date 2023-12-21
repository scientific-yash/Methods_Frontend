import React from 'react';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import './App.css';
function App() {
  return (
    <div className="card" style={{backgroundColor:'#CDF0EA'}}>
      <div className="card-body" style={{marginLeft:'25%',marginRight:'25%'}}>
        <h2 style={{marginLeft:'25%',marginBottom:'3%'}}>Customer Management System</h2>
        <CustomerList />
        <AddCustomer />
        <UpdateCustomer />
        <DeleteCustomer />
      </div>
    </div>
  );
}

export default App;
