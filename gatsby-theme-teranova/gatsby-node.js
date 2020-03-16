const fs = require('fs-extra');
const path = require('path');

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
exports.onPreBootstrap = ({ store, reporter }) => {
    const directoryName = 'teranova-theme-data';

    const { program } = store.getState();

    const directoryPathInSite = path.join(program.directory, directoryName);

    if(!fs.existsSync(directoryPathInSite)) {
        fs.copySync(path.join(__dirname, directoryName), directoryPathInSite);
    }
}