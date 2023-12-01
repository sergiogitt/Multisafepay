import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function ShoppingCart(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(props.data, 'text/xml');
    const itemElements = xmlDoc.querySelectorAll('item');

    if (itemElements.length > 0) {
      const parsedItems = Array.from(itemElements).map((item, index) => ({
        name: item.querySelector('item-name')?.textContent || '',
        description: item.querySelector('item-description')?.textContent || 'No description',
        price: item.querySelector('unit-price')?.textContent || '',
        currency: item.querySelector('unit-price')?.getAttribute('currency') || '',
        quantity: item.querySelector('quantity')?.textContent || '',
        merchantId: item.querySelector('merchant-item-id')?.textContent || '',
        taxTable: item.querySelector('tax-table-selector')?.textContent || '',
        weight: {
          unit: item.querySelector('item-weight')?.getAttribute('unit') || '',
          value: item.querySelector('item-weight')?.getAttribute('value') || '',
        },
        key: index,
      }));

      setItems(parsedItems);
    }
  }, [props.data]);

  return (
<div className="d-flex justify-content-around flex-wrap">
        {items.map((item) => (
       <Card key={item.key} className="mb-4">
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>
              <strong>Description:</strong> {item.description}<br />
              <strong>Price:</strong> {item.price} {item.currency}<br />
              <strong>Quantity:</strong> {item.quantity}<br />
              <strong>Merchant Item ID:</strong> {item.merchantId}<br />
              <strong>Tax Table Selector:</strong> {item.taxTable}<br />
              <strong>Weight:</strong> {item.weight.value} {item.weight.unit}
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default ShoppingCart;
