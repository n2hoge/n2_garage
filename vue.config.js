module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "n2_Garage",
    }
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
}
