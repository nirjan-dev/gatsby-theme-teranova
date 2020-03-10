import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const navItems = [
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Services',
    link: '#services',
  },
//  {
//    name: 'Custom',
//    link: '#custom',
//  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const Nav = styled.nav`
  @media (max-width: 844px) {
    background-color: ${props => props.theme.colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    overflow: hidden;
    transition: height 200ms 600ms cubic-bezier(0.55, 0.06, 0.68, 0.19);
    z-index: 1;
    &.is-open {
      width: 100%;
      height: 100%;
      transition: height 600ms cubic-bezier(0.17, 0.84, 0.44, 1);
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  @media (max-width: 844px) {
    padding-top: 4rem;
    display: block;
    li {
      display: block;
      margin: 0;
      width: 100%;
      text-align: center;
      padding: 2rem 1rem;
      transition: 200ms all ease-out;
      opacity: 0;
      transform: translateY(-20px);
      .is-open & {
        opacity: 1;
        transform: translateY(0);
      }
      &:nth-of-type(1) {
        transition-delay: 100ms;
      }
      &:nth-of-type(2) {
        transition-delay: 200ms;
      }
      &:nth-of-type(3) {
        transition-delay: 300ms;
      }
    }
  }
`;

const StyledLink = styled(AnchorLink)`
  color: black;
  transition: all 300ms ease-out;
  padding: 1.3rem 1rem;
  position: relative;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
  }
  @media (min-width: 845px) {
    margin-left: 1.5rem;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: ${props => props.theme.colors.secondary};
      transform: scale(0);
      transition: 200ms transform ease-out;
    }
    &:hover,
    &:focus,
    &:active,
    &.active {
      color: ${props => props.theme.colors.secondary};
    }
    &:hover:after,
    &:focus:after,
    &:active:after,
    &.active:after {
      transform: scale(1);
    }
  }
`;

Navbar.propTypes = {
  isOpen: PropTypes.bool,
};

function Navbar({ isOpen }) {
  return (
    <Nav className={isOpen ? 'is-open' : ''}>
      <Ul>
        {navItems.map(item => (
          <li key={item.name}>
            <StyledLink href={item.link}>{item.name}</StyledLink>
          </li>
        ))}
      </Ul>
    </Nav>
  );
}

export default Navbar;
