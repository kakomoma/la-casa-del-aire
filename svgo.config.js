module.exports = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions', 
    {
      name: 'removeAttrs',
      params: { attrs: '(fill|stroke|xmlns)' }, 
    },
  ],
};
