
import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function TransactionInfo(props) {
  const [transactionData, setTransactionData] = useState({
    id: '',
    recurringid: '',
    currency: '',
    amount: '',
    cost: '',
    description: '',
    var1: '',
    var2: '',
    var3: '',
    amountrefunded: '',
  });

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(props.data, 'text/xml');
    const transactionElement = xmlDoc.querySelector('transaction');

    if (transactionElement) {
      console.log('Elemento <transaction> encontrado:', transactionElement);
      setTransactionData({
        id: transactionElement.querySelector('id')?.textContent || '',
        recurringid: transactionElement.querySelector('recurringid')?.textContent || '',
        currency: transactionElement.querySelector('currency')?.textContent || '',
        amount: transactionElement.querySelector('amount')?.textContent || '',
        cost: transactionElement.querySelector('cost')?.textContent || '',
        description: transactionElement.querySelector('description')?.textContent || '',
        var1: transactionElement.querySelector('var1')?.textContent || '',
        var2: transactionElement.querySelector('var2')?.textContent || '',
        var3: transactionElement.querySelector('var3')?.textContent || '',
        amountrefunded: transactionElement.querySelector('amountrefunded')?.textContent || '',
      });
    } else {
      console.log('Elemento <transaction> no encontrado.');
    }
  }, [props.data]);

  return (
    <>
      <ListGroup>
        <ListGroupItem><strong>ID: </strong> {transactionData.id}</ListGroupItem>
        <ListGroupItem><strong>Recurring ID: </strong> {transactionData.recurringid}</ListGroupItem>
        <ListGroupItem><strong>Currency: </strong> {transactionData.currency}</ListGroupItem>
        <ListGroupItem><strong>Amount: </strong> {transactionData.amount}</ListGroupItem>
        <ListGroupItem><strong>Cost: </strong> {transactionData.cost}</ListGroupItem>
        <ListGroupItem><strong>Description: </strong> {transactionData.description}</ListGroupItem>
        <ListGroupItem><strong>Var1: </strong> {transactionData.var1}</ListGroupItem>
        <ListGroupItem><strong>Var2: </strong> {transactionData.var2}</ListGroupItem>
        <ListGroupItem><strong>Var3: </strong> {transactionData.var3}</ListGroupItem>
        <ListGroupItem><strong>Amount Refunded: </strong> {transactionData.amountrefunded}</ListGroupItem>
      </ListGroup>
    </>
  );
}

export default TransactionInfo;
