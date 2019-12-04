module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    // options: {
    //   presets: [
    //     ["react-app", { flow: false, typescript: true }],
    //     "@emotion/babel-preset-css-prop"
    //   ]
    // }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
