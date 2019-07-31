import React from 'react';
import Header from './header';
import SEO from './seo';
import 'normalize.css';
import { theme } from '../theme';
import { ThemeProvider } from 'theme-ui';
import { Global, css } from '@emotion/core';
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
            font-size: calc(0.1vw + ${theme.fontSizes[1]}rem);
            font-family: ${theme.fonts.body};
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
        `}
      />
      <SEO />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
