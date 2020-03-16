const fs = require('fs-extra');
const path = require('path');
const withDefaults = require('./utils/default-options');

// creates the home page
exports.createPages = ({actions}) => {
    const {createPage} = actions;
    const layout = require.resolve(`./src/components/layout.js`);
    createPage({
        path: '/',
        component: layout
    })
}

// copy the theme content files if no files exist
exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
    const { contentFolder } = withDefaults(themeOptions);

    const { program } = store.getState();

    const directoryPathInSite = path.join(program.directory, contentFolder);

    if(!fs.existsSync(directoryPathInSite)) {
        fs.copySync(path.join(__dirname, 'teranova-theme-data'), directoryPathInSite);
        reporter.log(`copied theme files into ${directoryPathInSite}`);
    }
}