module.exports = api => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');

  const presets = ['@babel/env', '@babel/typescript', '@babel/react'];

  const plugins = ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'];

  if (process.env.NODE_ENV === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return {
    presets,
    plugins,
  };
};
