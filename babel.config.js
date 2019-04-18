module.exports = api => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');

  const presets = ['@babel/env', '@babel/typescript', '@babel/react'];

  const plugins = ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread', 'react-hot-loader/babel'];

  return {
    presets,
    plugins,
  };
};
