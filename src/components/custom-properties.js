/**
 * Generates CSS Custom Properties for colors, fonts and size scale
 *
 * @param {Object} config
 * @returns {String}
 */
module.exports = config => {
  let response = '';
  const tokenKeys = [
    {key: 'colors', prefix: 'color'},
    {key: 'fonts', prefix: 'font'},
    {key: 'sizeScale', prefix: 'size'}
  ];

  if (!config.generateCustomProperties) {
    return response;
  }

  // Loops each option and if that config exists, it generates custom properties
  tokenKeys.forEach(tokenKey => {
    if (config.hasOwnProperty(tokenKey.key)) {
      Object.keys(config[tokenKey.key]).forEach(key => {
        response += `--${tokenKey.prefix}-${key}: ${config[tokenKey.key][key]};`;
      });
    }
  });

  // If we generated some props, wrap them in a :root selector
  if (response.length) {
    response = `:root {
      ${response}
    }`;
  }

  return response;
};
