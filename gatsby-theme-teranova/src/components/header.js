import React, { useState } from 'react';
import NavBrand from './navBrand';
import Navbar from './navbar';
import styled from '@emotion/styled';
import NavToggle from '../components/navToggle';

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: minmax(80px, 150px) 1fr;
  padding: 0rem 1rem;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  @media (max-width: 844px) {
    grid-template-columns: minmax(80px, 120px) 90px;
    justify-content: space-between;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <NavBrand />
      <NavToggle
        isOpen={isOpen}
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Navbar isOpen={isOpen} />
    </HeaderStyled>
  );
}

export default Header;
