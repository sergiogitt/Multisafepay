import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function PaymentDetails(props) {
  const [paymentData, setPaymentData] = useState({
    type: '',
    accountid: '',
    accountholdername: '',
    externaltransactionid: '',
    last4: '',
    cardexpirydate: '',
  });

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(props.data, 'text/xml');
    const paymentElement = xmlDoc.querySelector('paymentdetails');

    if (paymentElement) {
      console.log('Elemento <paymentdetails> encontrado:', paymentElement);
      setPaymentData({
        type: paymentElement.querySelector('type')?.textContent || '',
        accountid: paymentElement.querySelector('accountid')?.textContent || '',
        accountholdername: paymentElement.querySelector('accountholdername')?.textContent || '',
        externaltransactionid: paymentElement.querySelector('externaltransactionid')?.textContent || '',
        last4: paymentElement.querySelector('last4')?.textContent || '',
        cardexpirydate: paymentElement.querySelector('cardexpirydate')?.textContent || '',
      });
    } else {
      console.log('Elemento <paymentdetails> no encontrado.');
    }
  }, [props.data]);
  function formatDateTime(dateTimeString) {
    if(dateTimeString=="")
      return;
    let year = dateTimeString.substring(0, 4);
    let month = dateTimeString.substring(4, 6);
    let day = dateTimeString.substring(6, 8);
    let hours = dateTimeString.substring(8, 10);
    let minutes = dateTimeString.substring(10, 12);
    let seconds = dateTimeString.substring(12, 14);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  return (
    <>
      <ListGroup>
        <ListGroupItem><strong>Type: </strong> {paymentData.type}</ListGroupItem>
        <ListGroupItem><strong>Account ID: </strong> {paymentData.accountid}</ListGroupItem>
        <ListGroupItem><strong>Account Holder Name: </strong> {paymentData.accountholdername}</ListGroupItem>
        <ListGroupItem><strong>External Transaction ID: </strong> {paymentData.externaltransactionid}</ListGroupItem>
        <ListGroupItem><strong>Last4: </strong> {paymentData.last4}</ListGroupItem>
        <ListGroupItem><strong>Card Expiry Date: </strong> {formatDateTime(paymentData.cardexpirydate)}</ListGroupItem>
      </ListGroup>
    </>
  );
}

export default PaymentDetails;
