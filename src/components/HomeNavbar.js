import { NavLink as ReactLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';

function HomeNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand tag={ReactLink} to="/">NATWEST</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink}  to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/transaction">Transactions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/money_transfer">Money-Transfer</NavLink>
            </NavItem>
      
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to='/services'>Services</DropdownItem>
                <DropdownItem tag={ReactLink} to='/contact'>Contact</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={ReactLink} to='/policies'>Policies</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button color="primary"> Customer Care</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default  HomeNavbar;