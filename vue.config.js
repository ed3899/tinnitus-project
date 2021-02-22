module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/home", "/about", "/support", "/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
