import styled from '@emotion/styled';

const heading = styled.h2`
  display: inline-block;
  text-align: center;
  position: relative;
  margin: ${props => props.theme.spacing[3]}rem 0;
  font-size: ${props => props.theme.fontSizes[3]}rem;
  @media (max-width: 40rem) {
    margin: ${props => props.theme.spacing[2]}rem 0;
    font-size: ${props => props.theme.fontSizes[2]}rem;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    height: 0.2rem;
    width: 60%;
    left: 50%;
    bottom: -15%;
    transform: translate(-50%, 0%);
  }
`;

export default heading;
