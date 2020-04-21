import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';



Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
