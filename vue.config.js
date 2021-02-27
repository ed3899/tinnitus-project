module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    proxy: {
      "^/recaptcha": {
        target: "https://www.google.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
