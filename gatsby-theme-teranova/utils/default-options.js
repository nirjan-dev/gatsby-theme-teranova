module.exports = themeOptions => {
    return {
        title: themeOptions.title || 'Teranova',
        description: themeOptions.description || 'A single page gatsby theme created by Nirjan Khadka',
        url: themeOptions.url || 'https://teranova.netlify.com',
        image: themeOptions.image || '/images/banner.png',
        twitterUsername: themeOptions.twitterUsername || '@nk13_codes',
        facebookUsername: themeOptions.facebookUsername || 'nk13_codes',
        instagramUsername: themeOptions.instagramUsername || 'nk13_codes',
        phone: themeOptions.phone || '555 219 619',
        email: themeOptions.email || 'info@teranova.com',
        address: themeOptions.address || 'Stewart Street, Marks Avenue, California',
        mapUrl: themeOptions.mapUrl ||
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.033277112893!2d-118.26944278515673!3d34.04301748060843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sSTAPLES+Center!5e0!3m2!1sen!2snp!4v1564632144369!5m2!1sen!2snp',
        logo: themeOptions.logo || '/images/logo.svg',
        trackingId: themeOptions.trackingId || 'UA-135638651-2', //google analytics
        // options for gatsby plugin manifest
        shortName: themeOptions.shortName || 'teranova',
        pathPrefix: themeOptions.pathPrefix || '/',
        backgroundColor: themeOptions.backgroundColor || '#F9F9F9',
        themeColor: themeOptions.themeColor || '#FFD700',
        favicon: themeOptions.favicon || 'static/images/favicon.png', // path from the root
        // gatsby sitemap plugin needs this
        siteUrl: themeOptions.siteUrl || 'https://teranova.netlify.com',
        
        // font options
        headingFont: themeOptions.headingFont || 'Vollkorn', 
        bodyFont: themeOptions.bodyFont || 'Roboto',

        // content direcoty name
        contentFolder: themeOptions.contentFolder || 'teranova-theme-data',

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


