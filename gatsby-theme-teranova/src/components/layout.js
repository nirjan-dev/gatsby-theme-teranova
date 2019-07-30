import React from 'react';
import Header from './header';
import SEO from './seo';
function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
