/**
 * Takes the config an optional array of targets and an
 * optional prefix which generates a CSS string of
 * utility classes
 *
 * @param {Object} config The goron config object
 * @param {Array} targets
 * @param {String} prefix=''
 * @returns {String}
 */
module.exports = (config, targets, prefix = '') => {
  let response = '';

  Object.keys(config.utilities).forEach(key => {
    const data = config.utilities[key];

    if (targets.includes(data.output)) {
      Object.keys(data.items).forEach(itemKey => {
        response += `
        .${prefix}${key}-${itemKey} {
          ${data.property}: ${data.items[itemKey]}; 
        }`.trim();
      });
    }
  });

  return response;
};
