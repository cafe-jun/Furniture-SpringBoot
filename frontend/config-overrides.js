const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@payload": path.resolve(__dirname, "src/lib/payload"),
    "@api": path.resolve(__dirname, "src/lib/api"),
    "@lib": path.resolve(__dirname, "src/lib"),
    "@hook": path.resolve(__dirname, "src/hook"),
    "@common": path.resolve(__dirname, "src/common"),
    "@components": path.resolve(__dirname, "src/components"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@constrant": path.resolve(__dirname, "src/constraint"),
    "@": path.resolve(__dirname, "src"),
  })
);
