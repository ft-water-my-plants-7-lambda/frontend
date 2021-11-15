import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>Water My Plants</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks to='/plants'>Plants</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/plants/add'>Add Plants</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/login'>Login</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/logout'>Logout</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/register'>Register</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
