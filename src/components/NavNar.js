import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function Navnar() {
  return (
    <Navbar color="light" light expand="md">

      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink className="nav-link" exact to="/" >Ewallet</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/customerInfo" >Customer Info</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/paymentDetails" >Payment Details</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/shoppingCart" >Shopping Cart</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/transactionInfo" >Transaction Info</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navnar;
