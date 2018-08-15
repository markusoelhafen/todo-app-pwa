const renderStyledComponents = require('@patternplate/render-styled-components/render');

module.exports = render;

async function render(input) {
  return renderStyledComponents(input);
}
