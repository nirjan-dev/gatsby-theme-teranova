# Gatsby Theme Teranova

Teranova is a free open-source gatsby theme which you can use to make a simple, modern and customizable responsive landing page.

You can view the [live demo](https://nifty-sinoussi-4a8cab.netlify.com) hosted on netlify to see how it looks by default.

## Features

1. 4 different sections (header, about us, services, contact) by default
2. Easy to customize styles with [theme UI](https://theme-ui.com/)
3. Google map embed and Google analytics
4. Smooth scrolling links
5. MDX
6. Good SEO support with React Helmet
7. PWA
8. Sitemap

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

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: [
        {
          resolve: "gatsby-theme-teranova",
          options: {
            headingFont: `Vollkorn`, // default google font
            bodyFont: "Roboto" // default google font
          }
        }
      ]
    };
    ```

3.  There are mdx files and images for intro, services and about blocks

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

4.  Create a `src/gatsby-theme-teranova/data/index.js` file and pass in this object of data to override the theme's data:
    ```js
    module.exports = {
      title: "Teranova",
      description: "A single page gatsby theme created by Nirjan Khadka",
      url: "https://nifty-sinoussi-4a8cab.netlify.com",
      image: "/images/banner.png",
      twitterUsername: "@nirjankhadka",
      facebookUsername: "nirjankhadka13",
      instagramUsername: "nk13.dev",
      phone: "555 219 619",
      email: "info@teranova.com",
      address: "Stewart Street, Marks Avenue, California",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.033277112893!2d-118.26944278515673!3d34.04301748060843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sSTAPLES+Center!5e0!3m2!1sen!2snp!4v1564632144369!5m2!1sen!2snp",
      logo: "/images/logo.svg",
      trackingId: "UA-135638651-2", //google analytics
      // options for gatsby plugin manifest
      shortName: "teranova",
      pathPrefix: "/",
      backgroundColor: "#F9F9F9",
      themeColor: "#FFD700",
      favicon: "static/images/favicon.png", // path from the root
      // gatsby sitemap plugin needs this
      siteUrl: "https://nifty-sinoussi-4a8cab.netlify.com"
    };
    ```
5.  Add a src/pages/index.mdx file to your project with the following components

    ```mdx
        import Intro from 'gatsby-theme-teranova/src/components/intro';
        import About from 'gatsby-theme-teranova/src/components/about';
        import Services from 'gatsby-theme-teranova/src/components/services';
        import Contact from 'gatsby-theme-teranova/src/components/contact';

        <Intro />

        <About />

        <Services />

        <Contact />
    ```

    **Note: You can reorder the components or add new custom components to this mdx file**

6.  Add static/images/favicon.png to your project. The gatsby-plugin-manifest needs this image.

7.  Start your site

    ```sh
    gatsby develop
    ```

8.  You can override colors by creating a `src/gatsby-theme-teranova/theme.js` file with object:
    ```js
    export const theme = {
      fonts: {
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
