const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new Dotenv({ safe: true, systemvars: true }),
  ],
};