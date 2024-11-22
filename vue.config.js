//vue.config.js
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "David Serrano";
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      new DotenvWebpackPlugin({
        systemvars: true,
        path: "./.env",
      }),
    ],
  },
};
