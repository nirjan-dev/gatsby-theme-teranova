import React from 'react';
import Heading from 'gatsby-theme-teranova/src/components/heading';
import styled from '@emotion/styled';
import { Flex, Box } from '@rebass/grid/emotion';
import Container from 'gatsby-theme-teranova/src/components/container';
const CustomSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing[2]}rem 0;
  .custom-content {
    text-align: left;
  }
`;
function Custom() {
  return (
    <CustomSection id="custom">
      <Container>
        <Heading>Custom Hardcoded Heading</Heading>
        <Flex flexWrap={['wrap', 'nowrap']}>
          <Box m={[2, 3]} width={[1, 1 / 2, 1 / 3]}>
            <div className="custom-content">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Box>
          <Box m={[2, 3]} width={[1, 1 / 2, 2 / 3]}>
            <div className="custom-content">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Box>
        </Flex>
      </Container>
    </CustomSection>
  );
}

export default Custom;
