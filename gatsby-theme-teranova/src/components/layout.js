import React from 'react';
import Header from './header';
import SEO from './seo';
import 'normalize.css';
import { theme } from '../theme';
import { ThemeProvider } from 'theme-ui';
import { Global, css } from '@emotion/core';
import Footer from './footer';
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            line-height: ${theme.lineHeights.body};

            font-family: ${theme.fonts.body};
            color: ${theme.colors.dark};
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: ${theme.lineHeights.heading};
            font-weight: ${theme.fontWeights.heading};
            font-family: ${theme.fonts.heading};
          }
          h1 {
            font-size: ${theme.fontSizes[5]}rem;
          }
          h2 {
            font-size: ${theme.fontSizes[4]}rem;
          }
          h3 {
            font-size: ${theme.fontSizes[3]}rem;
          }
          h4 {
            font-size: ${theme.fontSizes[2]}rem;
          }
          h5 {
            font-size: ${theme.fontSizes[1]}rem;
          }
          a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            transition: color 200ms ease-out;
            &:hover,
            &:focus {
              color: ${theme.colors.primary};
            }
          }
        `}
      />
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
