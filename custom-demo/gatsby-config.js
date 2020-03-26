module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-teranova`,
      options: {
        title: 'Teranova Custom',
        description: 'A gatsby landing page theme created by Nirjan Khadka',
        image: '/images/banner.png', // for image meta tag (lmage location within the static folder)
        twitterUsername: '@dan_abramov', // the site link (eg: https://twitter.com/) will be added for all social links so just put the profile name here
        facebookUsername: 'dan_abramov',
        instagramUsername: 'dan_abramov',
        phone: '666 999 333',
        email: 'info@teranova-custom.com',
        address: 'Stewart Street, Marks Avenue, Texas',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.033277112893!2d-118.26944278515673!3d34.04301748060843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sSTAPLES+Center!5e0!3m2!1sen!2snp!4v1564632144369!5m2!1sen!2snp', // google maps iframe url
        logo: '/images/logo.svg', // link from the static folder
        trackingId: 'UA-135638651-2', // GA key
        // options for gatsby plugin manifest (go to there docs to learn more)
        shortName: 'teranova',
        pathPrefix: '/',
        backgroundColor: '#F9F9F9',
        themeColor: '#FF0000',
        favicon: 'static/images/favicon.png', // path from the root
        // gatsby sitemap plugin needs this
        siteUrl: 'https://teranova.netlify.com',
      
        // font options
        headingFont:  'Raleway', // accepts any google font name 
        bodyFont: 'Open Sans',

        // content direcoty name
        contentFolder: 'custom-data-folder',
                
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
              label: 'Custom Section',
              link: '#custom'
            },
            {
                label: 'Contact',
                link: '#contact'
            }
        ]
      },
    },
  ],
};
