module.exports = () => {
  const presets = ['@babel/env', '@babel/typescript', '@babel/react'];

  const plugins = ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'];

  return {
    presets,
    plugins,
  };
};
