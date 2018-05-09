import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouterPermissions from "vue-router-permissions";
import { USER_ROLE_GUEST } from "./constants";

Vue.use(VueRouterPermissions, router);

Vue.config.productionTip = false;

// This would usually be an AJAX call to the server or a cookie check
let getUser = Promise.resolve({ role: USER_ROLE_GUEST });

getUser.then(user => {
  Vue.prototype.$user.set(user);
  new Vue({
    render: h => h(App),
    router
  }).$mount("#app");
});




