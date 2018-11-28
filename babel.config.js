module.exports = function(api) {
  const presets = ['@babel/env', '@babel/react', '@babel/preset-flow'];
  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-flow-strip-types'];
  api.cache(true);
  return {
    
    presets,
    plugins
  };
};
