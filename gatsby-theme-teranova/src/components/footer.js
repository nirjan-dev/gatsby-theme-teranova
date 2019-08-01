import React from 'react';
import styled from '@emotion/styled';
import Container from './container';
const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.greyLight};
  padding: ${props => props.theme.spacing[1]}rem 0;
  text-align: center;
  small {
    margin: 0 ${props => props.theme.spacing[1]}rem;
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <small>2019 All Rights Reserved</small>
        <small>
          Website By:{' '}
          <a href="https://www.studiodagger.com" target="_blank">
            Studiodagger
          </a>
        </small>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
