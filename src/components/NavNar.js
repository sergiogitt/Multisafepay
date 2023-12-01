import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function Navnar() {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink className="nav-link" exact to="/Multisafepay/ewallet" >Ewallet</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/Multisafepay/customerInfo" >Customer Info</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/Multisafepay/paymentDetails" >Payment Details</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/Multisafepay/shoppingCart" >Shopping Cart</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/Multisafepay/transactionInfo" >Transaction Info</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navnar;
