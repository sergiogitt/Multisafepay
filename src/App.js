import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CustomerInfo from './components/CustomerInfo';
import TransactionInfo from './components/TransactionInfo';
import Ewallet from './components/Ewallet';
import Navnar from './components/NavNar';
import PaymentDetails from './components/PaymentDetails';
import ShoppingCart from './components/ShoppingCart';
import { Navbar, Spinner } from 'reactstrap';

function App() {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
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
    //Evistar CORS con URL
    const url = 'https://cors-anywhere.herokuapp.com/https://testapi.multisafepay.com/ewx/';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'text/xml;charset=UTF-8');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setData(this.response);
          
        } else {
          console.error('Error al realizar la petición:', xhr.statusText);
        }
      }
      setLoading(false);
    };

    xhr.send(xmlData);
  }, []);
  return (
    
      <Router>
        <div className="App">
          <Header />
          <Navnar />
          {/* ROUTING */}
          { loading ? (<div className="d-flex justify-content-center align-items-center" style={{ marginTop: '4rem' }}>
      <Spinner className=''>
        Loading...
      </Spinner></div>
    ) : (<Routes>
      <Route path="/" element={<Ewallet data={data} />} />
      <Route path="/customerInfo" element={<CustomerInfo data={data} />} />
      <Route path="/paymentDetails" element={<PaymentDetails data={data} />} />
      <Route path="/shoppingCart" element={<ShoppingCart data={data} />} />
      <Route path="/transactionInfo" element={<TransactionInfo data={data} />} />
    </Routes>)}
          
        </div>
      </Router>
    )
  
  
}

export default App;
