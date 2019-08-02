import styled from '@emotion/styled';
const Service = styled.article`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[1]}rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-out;
  .title {
    margin-bottom: ${props => props.theme.spacing[1]}rem;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default Service;
