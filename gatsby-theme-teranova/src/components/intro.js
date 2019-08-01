import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import Container from './container';
import BackgroundImage from 'gatsby-background-image';
import { theme } from '../theme';
const Banner = styled.section`
  color: ${props => props.theme.colors.white};
  position: relative;

  .banner-background {
    padding: ${props => props.theme.spacing[6]}rem 0;
    background: ${props => props.theme.colors.primaryGradient};
  }

  .banner-content {
    max-width: 28rem;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${props => props.theme.fontSizes[3]}rem;
    margin-bottom: ${props => props.theme.spacing[2]}rem;
    @media (max-width: 40rem) {
      font-size: ${props => props.theme.fontSizes[2]}rem;
      margin-bottom: ${props => props.theme.spacing[1]}rem;
    }
  }
`;
function Intro() {
  const data = useStaticQuery(graphql`
    {
      mdx(frontmatter: { type: { eq: "intro" } }) {
        body
        frontmatter {
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const backgroundFluidImageStack = [
    theme.colors.primaryGradient,
    data.mdx.frontmatter.img.childImageSharp.fluid,
  ];
  return (
    <Banner id="intro">
      <BackgroundImage
        Tag="div"
        className="banner-background"
        fluid={backgroundFluidImageStack}
      >
        <Container>
          <div className="banner-content">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </Container>
      </BackgroundImage>
    </Banner>
  );
}

export default Intro;
