const path = require('path');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.output.filename = 'static/js/main.js';
    config.output.chunkFilename = 'static/js/[name].chunk.js';
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'MiniCssExtractPlugin'
    );
  }
  return config;
};