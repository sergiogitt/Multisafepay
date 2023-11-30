import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import CustomerInfo from './components/CustomerInfo';
import TransactionInfo from './components/TransactionInfo';
import Ewallet from './components/Ewallet';
import Navnar from './components/NavNar';
import PaymentDetails from './components/PaymentDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navnar />
        {/*ROUTING */}
        <Routes>
          <Route path="/" element={<Ewallet />} />
          <Route path="/customerInfo" element={<CustomerInfo />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />

          <Route path="/transactionInfo" element={<TransactionInfo />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;


