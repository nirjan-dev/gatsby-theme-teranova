import React from 'react';
import styled from '@emotion/styled';
import Heading from 'gatsby-theme-teranova/src/components/heading';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Flex, Box } from '@rebass/grid/emotion';
import Container from 'gatsby-theme-teranova/src/components/container';
import Service from 'gatsby-theme-teranova/src/components/service';

const ServicesSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
  background-color: ${props => props.theme.colors.greyLight};
`;

function Services() {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { type: { eq: "service" } } }) {
        nodes {
          frontmatter {
            title
          }
          body
        }
      }
    }
  `);
  return (
    <ServicesSection id="services">
      <Container>
        <Heading>Our Services</Heading>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          {data.allMdx.nodes.map(service => {
            return (
              <Box p={[2, 2, 3]} width={[1, 1 / 2, 1 / 4]}>
                <Service>
                  <h4 className="title">{service.frontmatter.title}</h4>
                  <MDXRenderer>{service.body}</MDXRenderer>
                </Service>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </ServicesSection>
  );
}

export default Services;
