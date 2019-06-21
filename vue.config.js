const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  /*  configureWebpack: {
        plugins: [
            new SpriteLoaderPlugin()
        ]
    },*/
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');
        const inlineSvgRule = config.module.rule('inline-svg');

        svgRule
            .exclude
            .add(/inline\.(.*)\.svg/)
            .end()

        inlineSvgRule
            .test(/inline\.(.*)\.svg/)
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    }

};
