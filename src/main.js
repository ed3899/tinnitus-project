import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import "./validation/veeValidation.js";

// Install vee-validation components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

// Adding recaptcha
Vue.use(VueReCaptcha, {
  siteKey: process.env.VUE_APP_CAPTCHA_V3_SITE_KEY,
  // loaderOptions: {
  //   autoHideBadge: true,
  // },
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
