module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [];

  if (process.env.NODE_ENV === 'test') {
    // Plugins to apply when running tests
    plugins.push(['@babel/plugin-transform-private-methods', { loose: true }]);
  }

  return {
    presets,
    plugins,
  };
};