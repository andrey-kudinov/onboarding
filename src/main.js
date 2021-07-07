import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "/src/assets/style/style.css";

import { Swiper, EffectCoverflow, Pagination } from "swiper";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import VueMeta from "vue-meta";

Swiper.use([EffectCoverflow, Pagination]);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMeta)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
