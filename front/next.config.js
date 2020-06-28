const compressionPlugin = require('compression-webpack-plugin');

module.exports = {
  distDir: '.next',
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [
        ...config.plugins,
    ]
    if(prod){
       plugins.push(prod && new compressionPlugin());
    }
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
}
