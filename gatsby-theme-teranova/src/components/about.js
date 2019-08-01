import React from 'react';
import Heading from './heading';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Flex, Box } from '@rebass/grid/emotion';
import Container from './container';
const AboutSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
  .about-content {
    text-align: left;
  }

  .gatsby-image-wrapper {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
`;
function About() {
  const data = useStaticQuery(graphql`
    {
      mdx(frontmatter: { type: { eq: "about" } }) {
        body
        frontmatter {
          title
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
  return (
    <AboutSection>
      <Container>
        <Heading>{data.mdx.frontmatter.title}</Heading>
        <Flex flexWrap={['wrap', 'nowrap']}>
          <Box m={[2, 3]} width={[1, 1 / 2, 2 / 3]}>
            <div className="about-content">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
          </Box>
          <Box m={[2, 3]} width={[1, 1 / 2, 1 / 3]}>
            <Img
              fluid={data.mdx.frontmatter.img.childImageSharp.fluid}
              fadeIn={true}
            />
          </Box>
        </Flex>
      </Container>
    </AboutSection>
  );
}

export default About;
