# Gatsby Theme Teranova

*Warning*: Not actively developed anymore

Teranova is a free open-source gatsby theme which you can use to make a simple, modern and customizable responsive landing page.

You can view the [live demo](https://teranova.netlify.com/) to see how it looks.

## Features

- 4 different sections (header, about us, services, contact) by default
- Easy to customize styles with [theme UI](https://theme-ui.com/)
- Google map embed and Google analytics
- Smooth scrolling links
- MDX support
- Good SEO support with React Helmet and a default seo component
- PWA
- Sitemap (in case you want to add extra pages)
- Responsive design
- Emotion for styling
- Prefetched google fonts
- Supports any google font 

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm i gatsby-theme-teranova
    ```

    or

    ```sh
    yarn add gatsby-theme-teranova
    ```

2.  Add the theme to your `gatsby-config.js` with any of the following options. Every option has a default value which is given below so there are no required options.

    ```js
    module.exports = {
      plugins: [
        {
          resolve: "gatsby-theme-teranova",
          options: {
            title: 'Teranova',
            description: 'A single page gatsby theme created by Nirjan Khadka',
            image: '/images/banner.png', // for image meta tag (lmage location within the static folder)
            twitterUsername: '@nk13_codes', // the site link (eg: https://twitter.com/) will be added for all social links so just put the profile name here
            facebookUsername: 'nk13_codes',
            instagramUsername: 'nk13_codes',
            phone: '555 219 619',
            email: 'info@teranova.com',
            address: 'Stewart Street, Marks Avenue, California',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.033277112893!2d-118.26944278515673!3d34.04301748060843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sSTAPLES+Center!5e0!3m2!1sen!2snp!4v1564632144369!5m2!1sen!2snp', // google maps iframe url
            logo: '/images/logo.svg', // link from the static folder
            trackingId: 'UA-135638651-2', // GA key
            // options for gatsby plugin manifest (go to there docs to learn more)
            shortName: 'teranova',
            pathPrefix: '/',
            backgroundColor: '#F9F9F9',
            themeColor: '#FFD700',
            favicon: 'static/images/favicon.png', // path from the root
            // gatsby sitemap plugin needs this
            siteUrl: 'https://teranova.netlify.com',
          
            // font options
            headingFont:  'Vollkorn', // accepts any google font name 
            bodyFont: 'Roboto',

            // content direcoty name
            contentFolder: 'teranova-theme-data',
                    
            // navbar links
            navLinks: [
                {
                    label: 'About',
                    link: '#about'
                },
                {
                    label: 'Services',
                    link: '#services'
                },
                {
                    label: 'Contact',
                    link: '#contact'
                }
            ]
          }
        }
      ]
    };
    ```

3.  There are mdx files and images for intro, services and about blocks in the content directory (teranova-theme-data by default). You can edit them to change the content of the site.

    1. `intro.mdx` with content that looks like this:

    ```mdx
    ---
    type: intro
    img: ./banner.jpg
    ---

    ## Making good times Better

    We are a company dedicated to making your
    satisfaction into our goals. You don’t need to worry about a single thing.And
    now we are offering special discounts right now.
    ```

    2.  `about.mdx` with content that looks like this:

    ```mdx
    ---
    type: about
    img: ./about.jpg
    title: About us
    ---

    We Believe in a stronger community and a chance for redemption for every one and provide the opportunities that can lead to a better life for everyone. So, What are you waiting for? Join us today and be your best self. No more waiting, Join us before march to win exclusive prizes and a chance to win a million dollars.

    We Believe in a stronger community and a chance for redemption for every one and provide the opportunities that can lead to a better life for everyone. So, What are you waiting for? Join us today and be your best self. No more waiting, Join us before march to win exclusive prizes and a chance to win a million dollars.

    We Believe in a stronger community and a chance for redemption for every one and provide the opportunities that can lead to a better life for everyone. So, What are you waiting for? Join us today and be your best self. No more waiting, Join us before march to win exclusive prizes and a chance to win a million dollars.
    ```

    3.  A service mdx file with looks like this:

    ```mdx
    ---
    title: Branding
    type: service
    ---

    We provide the best branding solutions and optimized designs to go along with a rangle of supporting features for companies of all sizes.
    ```

4.  Add static/images/favicon.png to your project. The gatsby-plugin-manifest needs this image.

5.  Start your site

    ```sh
    gatsby develop
    ```

6.  You can override colors by creating a `src/gatsby-theme-teranova/theme.js` file and exporting an object with the following properties:
    ```js
    export const theme = {
      fonts: {
        // only use the fonts that have been set in the theme options
        families: ["Roboto", "Vollkorn"],
        body: '"Roboto",sans-serif',
        heading: '"Vollkorn",serif'
      },
      fontSizes: [0.75, 1, 1.33, 1.77, 2.369, 3.157],
      fontWeights: {
        body: 400,
        heading: "700",
        bold: 700
      },
      spacing: [0.618, 1, 1.618, 2.618, 4.236, 6.854, 11.089],
      lineHeights: {
        body: 1.7,
        heading: 1.2
      },
      letterSpacings: {
        body: "normal",
        caps: "0.2rem"
      },
      colors: {
        primary: "#FFD700",
        dark: "#333",
        grey: "#B2AB99",
        secondaryLight: "#00FFD8",
        secondary: "#03866e",
        darkLight: "#5A5751",
        greyLight: "#F9F9F9",
        white: "#FEFEFE",
        secondaryDark: "#065648",
        primaryGradient:
          "linear-gradient(to right, rgba(242, 153, 74,0.9), rgba(242, 201, 76,0.4))"
      }
    };
    ```
7. You can use [gatsby theme shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) to change any of the default components. You might want to change the layout component which orders the sections and provides some global css rules. To shadow that component create a src/gatsby-theme-teranova/components/layout.js. The default layout.js file looks like this

  ```jsx
  import React from 'react';
  import Header from 'gatsby-theme-teranova/src/components/header';
  import SEO from 'gatsby-theme-teranova/src/components/seo';
  import 'normalize.css';
  import { theme } from 'gatsby-theme-teranova/src/theme';
  import { ThemeProvider } from 'theme-ui';
  import { Global, css } from '@emotion/core';
  import Footer from 'gatsby-theme-teranova/src/components/footer';
  import Intro from 'gatsby-theme-teranova/src/components/intro';
  import About from 'gatsby-theme-teranova/src/components/about';
  import Services from 'gatsby-theme-teranova/src/components/services';
  import Contact from 'gatsby-theme-teranova/src/components/contact';

  function Layout() {
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
        <main>
          <Intro />

          <About />

          <Services />

          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    );
  }

  export default Layout;
  ```

If you get stuck then take a look at the examples in [this repo](http://github.com/NK-WebDev/gatsby-theme-teranova) or [create an issue](https://github.com/NK-WebDev/gatsby-theme-teranova/issues/new) with sufficient info on the problem. Collaborators are welcomed.
