import React from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>Water My Plants</NavLogo>

        {isAuthenticated ? (
          <NavMenu>
            <NavItem>
              <NavLinks to='/plants'>Plants</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/plants/add'>Add Plants</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/user'>My Profile</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/logout'>Logout</NavLinks>
            </NavItem>
          </NavMenu>
        ) : (
          <NavMenu>
            <NavItem>
              <NavLinks to='/login'>Login</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/register'>Register</NavLinks>
            </NavItem>
          </NavMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
