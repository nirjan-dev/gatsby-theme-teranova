import React from 'react';
import styled from '@emotion/styled';
import Container from './container';
const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.greyLight};
  padding: ${props => props.theme.spacing[1]}rem 0;
  text-align: center;
  small {
    margin: 0 ${props => props.theme.spacing[1]}rem;
    display: block;
  }
  .bottom-footer {
    justify-content: space-around;
    align-items: center;
  }
  a {
    font-weight: bold;
    color: ${props => props.theme.colors.secondaryDark};
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="bottom-fotter">
          <small>2019 All Rights Reserved</small>
          <small>
            Website By:
            <a
              href="https://www.studiodagger.com"
              rel="noopener"
              target="_blank"
            >
              Studiodagger
            </a>
          </small>
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
