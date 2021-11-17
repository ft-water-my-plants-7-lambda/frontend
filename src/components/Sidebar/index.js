import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

import { connect } from 'react-redux';

const Sidebar = ({ isOpen, toggle, isAuthenticated }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {isAuthenticated ? (
          <SidebarMenu>
            <SidebarLink to='/plants' onClick={toggle}>
              Plants
            </SidebarLink>
            <SidebarLink to='/plants/add' onClick={toggle}>
              Add Plants
            </SidebarLink>
            <SidebarLink to='/user' onClick={toggle}>
              My Profile
            </SidebarLink>
            <SidebarLink to='/logout' onClick={toggle}>
              Logout
            </SidebarLink>
          </SidebarMenu>
        ) : (
          <SidebarMenu>
            <SidebarLink to='/login' onClick={toggle}>
              Login
            </SidebarLink>
            <SidebarLink to='/register' onClick={toggle}>
              Register
            </SidebarLink>
          </SidebarMenu>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Sidebar);
