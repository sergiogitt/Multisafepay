import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Ewallet(props) {
  const [ewalletData, setEwalletData] = useState({
    id: '',
    status: '',
    financialStatus: '',
    fastCheckout: '',
    created: '',
    modified: '',
    reasonCode: '',
    reason: '',
  });

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(props.data, 'text/xml');
    const ewalletElement = xmlDoc.querySelector('ewallet');

    if (ewalletElement) {
      console.log('Elemento <ewallet> encontrado:', ewalletElement);
      setEwalletData({
        id: ewalletElement.querySelector('id')?.textContent || '',
        status: ewalletElement.querySelector('status')?.textContent || '',
        financialStatus: ewalletElement.querySelector('financialstatus')?.textContent || '',
        fastCheckout: ewalletElement.querySelector('fastcheckout')?.textContent || '',
        created: ewalletElement.querySelector('created')?.textContent || '',
        modified: ewalletElement.querySelector('modified')?.textContent || '',
        reasonCode: ewalletElement.querySelector('reasoncode')?.textContent || '',
        reason: ewalletElement.querySelector('reason')?.textContent || '',
      });
    } else {
      console.log('Elemento <ewallet> no encontrado.');
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
        <ListGroupItem><strong>Id: </strong> {ewalletData.id}</ListGroupItem>
        <ListGroupItem><strong>Status: </strong> {ewalletData.status}</ListGroupItem>
        <ListGroupItem><strong>Financial Status: </strong> {ewalletData.financialStatus}</ListGroupItem>
        <ListGroupItem><strong>Fast Checkout: </strong>  {ewalletData.fastCheckout}</ListGroupItem>
        <ListGroupItem><strong>Created: </strong> {formatDateTime(ewalletData.created)}</ListGroupItem>
        <ListGroupItem><strong>Modified: </strong> {formatDateTime(ewalletData.modified)}</ListGroupItem>
        <ListGroupItem><strong>Reason Code: </strong>  {ewalletData.reasonCode}</ListGroupItem>
        <ListGroupItem><strong>Reason: </strong> {ewalletData.reason}</ListGroupItem>
      </ListGroup>
    </>
  );
}

export default Ewallet;
