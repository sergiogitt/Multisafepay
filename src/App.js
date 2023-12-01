import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CustomerInfo from './components/CustomerInfo';
import TransactionInfo from './components/TransactionInfo';
import Ewallet from './components/Ewallet';
import Navnar from './components/NavNar';
import PaymentDetails from './components/PaymentDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [data,setData] = useState(null);
  useEffect(() => {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
    <status ua="custom-1.1">
    <merchant>
    <account>1001001</account>
    <site_id>13431</site_id>
    <site_secure_code>965105</site_secure_code>
    </merchant>
    <transaction>
    <id>apitool_sergio_romero_1</id>
    </transaction>
    </status>`;

    const xhr = new XMLHttpRequest();
    const url = 'response.txt';
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'text/xml;charset=UTF-8');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setData(this.response);
          
                    
        } else {
          console.error('Error al realizar la petición:', xhr.statusText);
        }
      }
    };

    xhr.send(xmlData);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navnar />
        {/* ROUTING */}
        <Routes>
          <Route path="/" element={<Ewallet data={data}/>} />
          <Route path="/customerInfo" element={<CustomerInfo data={data}/>} />
          <Route path="/paymentDetails" element={<PaymentDetails data={data}/>} />
          <Route path="/shoppingCart" element={<ShoppingCart data={data}/>} />
          <Route path="/transactionInfo" element={<TransactionInfo data={data}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
