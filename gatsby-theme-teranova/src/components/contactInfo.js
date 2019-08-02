import styled from '@emotion/styled';
const ContactInfo = styled.div`
  a {
    padding: ${props => props.theme.spacing[0]}rem
      ${props => props.theme.spacing[1]}rem;
    margin: ${props => props.theme.spacing[1]}rem 0;
    display: inline-block;
    border: 3px solid currentColor;
  }
`;

export default ContactInfo;
