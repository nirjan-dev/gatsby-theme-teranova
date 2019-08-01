import React from 'react';
import Heading from './heading';
import styled from '@emotion/styled';
import Container from './container';
import { Flex, Box } from '@rebass/grid/emotion';
import ContactInfo from './contactInfo';
import { useStaticQuery, graphql } from 'gatsby';
const ContactSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
`;
function Contact() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitterUsername
          facebookUsername
          instagramUsername
          address
          phone
          email
          mapUrl
        }
      }
    }
  `);
  return (
    <ContactSection id="contact">
      <Container>
        <Heading>Contact us</Heading>
        <Flex flexWrap={['wrap', 'nowrap']}>
          <Box m={[2, 3]} p={[3, 4]} width={[1, 1 / 3]}>
            <ContactInfo>
              <h4>Get in touch</h4>
              <p>{data.site.siteMetadata.phone}</p>
              <p>{data.site.siteMetadata.email}</p>
              <p>{data.site.siteMetadata.address}</p>
              <a href={data.site.siteMetadata.twitterUsername} target="_blank">
                Twitter
              </a>
              <br />
              <a href={data.site.siteMetadata.facebookUsername} target="_blank">
                Facebook
              </a>
              <br />
              <a
                href={data.site.siteMetadata.instagramUsername}
                target="_blank"
              >
                Instagram
              </a>
            </ContactInfo>
          </Box>
          <Box m={[2, 3]} width={[1, 2 / 3]}>
            <iframe
              src={data.site.siteMetadata.mapUrl}
              width="100%"
              height="450"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </Box>
        </Flex>
      </Container>
    </ContactSection>
  );
}

export default Contact;
