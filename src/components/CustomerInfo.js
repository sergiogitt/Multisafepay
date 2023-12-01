import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function CustomerInfo(props) {
  const [customerData, setCustomerData] = useState({
    amount: '',
    currency: '',
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    housenumber: '',
    zipcode: '',
    city: '',
    state: '',
    country: '',
    phone1: '',
    phone2: '',
    email: '',
  });

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(props.data, 'text/xml');
    const customerElement = xmlDoc.querySelector('customer');

    if (customerElement) {
      console.log('Elemento <customer> encontrado:', customerElement);
      setCustomerData({
        amount: customerElement.querySelector('amount')?.textContent || '',
        currency: customerElement.querySelector('currency')?.textContent || '',
        firstname: customerElement.querySelector('firstname')?.textContent || '',
        lastname: customerElement.querySelector('lastname')?.textContent || '',
        address1: customerElement.querySelector('address1')?.textContent || '',
        address2: customerElement.querySelector('address2')?.textContent || '',
        housenumber: customerElement.querySelector('housenumber')?.textContent || '',
        zipcode: customerElement.querySelector('zipcode')?.textContent || '',
        city: customerElement.querySelector('city')?.textContent || '',
        state: customerElement.querySelector('state')?.textContent || '',
        country: customerElement.querySelector('country')?.textContent || '',
        phone1: customerElement.querySelector('phone1')?.textContent || '',
        phone2: customerElement.querySelector('phone2')?.textContent || '',
        email: customerElement.querySelector('email')?.textContent || '',
      });
    } else {
      console.log('Elemento <customer> no encontrado.');
    }
  }, [props.data]);

  return (
    <>
      <ListGroup>
        <ListGroupItem><strong>Amount: </strong> {customerData.amount} {customerData.currency}</ListGroupItem>
        <ListGroupItem><strong>First Name: </strong> {customerData.firstname}</ListGroupItem>
        <ListGroupItem><strong>Last Name: </strong> {customerData.lastname}</ListGroupItem>
        <ListGroupItem><strong>Address 1: </strong> {customerData.address1}</ListGroupItem>
        <ListGroupItem><strong>Address 2: </strong> {customerData.address2}</ListGroupItem>
        <ListGroupItem><strong>House Number: </strong> {customerData.housenumber}</ListGroupItem>
        <ListGroupItem><strong>Zip Code: </strong> {customerData.zipcode}</ListGroupItem>
        <ListGroupItem><strong>City: </strong> {customerData.city}</ListGroupItem>
        <ListGroupItem><strong>State: </strong> {customerData.state}</ListGroupItem>
        <ListGroupItem><strong>Country: </strong> {customerData.country}</ListGroupItem>
        <ListGroupItem><strong>Phone 1: </strong> {customerData.phone1}</ListGroupItem>
        <ListGroupItem><strong>Phone 2: </strong> {customerData.phone2}</ListGroupItem>
        <ListGroupItem><strong>Email: </strong> {customerData.email}</ListGroupItem>
      </ListGroup>
    </>
  );
}

export default CustomerInfo;
