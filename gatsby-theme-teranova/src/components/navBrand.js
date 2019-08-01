import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const StyledImage = styled.img`
  margin: 0.8rem;
  max-width: 100%;
`;

function NavBrand() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          logo
          title
        }
      }
    }
  `);

  return (
    <AnchorLink href="#intro" style={{ display: 'block' }}>
      <h1
        style={{ fontSize: '0.1px', opacity: 0, position: 'absolute' }}
        aria-hidden="true"
        className="hidden"
      >
        {data.site.siteMetadata.title}
      </h1>
      <StyledImage
        src={data.site.siteMetadata.logo}
        alt={data.site.siteMetadata.title}
      />
    </AnchorLink>
  );
}

export default NavBrand;
