import React from 'react';
import Header from './header';
import SEO from './seo';
import 'normalize.css';
import { theme } from '../theme';
import { ThemeProvider } from 'theme-ui';
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}

export default Layout;
