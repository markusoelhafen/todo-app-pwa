module.exports = {
  docs: ["docs/**/*.md"],
  entry: ['.lib/**/demo.js'],
  mount: "@patternplate/render-react/mount",
  render: './patternplate.render.js'
};
