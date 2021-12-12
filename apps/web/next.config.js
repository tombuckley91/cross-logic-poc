const withTM = require("next-transpile-modules")(["ui", "react-sdk"], {
  resolveSymlinks: true,
});

module.exports = withTM({
  reactStrictMode: true,
});
