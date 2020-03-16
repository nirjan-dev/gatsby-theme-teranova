exports.createPages = ({actions}) => {
    const {createPage} = actions;
    const layout = require.resolve(`./src/components/layout.js`);
    createPage({
        path: '/',
        component: layout
    })
}