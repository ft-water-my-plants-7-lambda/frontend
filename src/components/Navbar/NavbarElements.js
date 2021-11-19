import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 80px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  display: none;

  @media (min-width: 769px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;

export const MobileHamburgerMenu = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 20;
  }
`;

export const MobileLogo = styled(Link)`
  position: relative;
  width: 4em;
  flex-shrink: 0;
  cursor: pointer;
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const MobileLogoImage = styled.img`
  width: 2em;
  filter: invert(99%) sepia(100%) saturate(1%) hue-rotate(43deg)
    brightness(102%) contrast(101%);
`;

export const NavMenu = styled.ul`
  flex: 1;
  text-align: right;
  @media (max-width: 769px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  list-style: none;
  position: relative;
  padding: 0 1rem;
  margin-top: 11px;
  vertical-align: middle;
  text-transform: uppercase;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    margin: auto;
    width: 0%;
    height: 4px;
    background: #01bf71;
    transition: 0.5s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #01bf71;
  }
`;
