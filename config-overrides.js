// const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { override, addLessLoader } = require('customize-cra');
module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: true,
    // }),
    addLessLoader({
        javascriptEnabled: true,
    }),
);
