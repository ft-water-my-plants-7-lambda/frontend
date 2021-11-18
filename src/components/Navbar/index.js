import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileLogo,
  MobileLogoImage,
  MobileHamburgerMenu,
} from './NavbarElements';
import logo from '../../assets/logo.svg';

import Sidebar from '../Sidebar';

import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Water My Plants</NavLogo>
          <MobileLogo to='/'>
            <MobileLogoImage src={logo} alt='logo' />
          </MobileLogo>
          <MobileHamburgerMenu onClick={toggle}>
            <FaBars />
          </MobileHamburgerMenu>
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
    </IconContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
