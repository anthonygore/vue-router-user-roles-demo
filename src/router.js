import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Protected from "./views/Protected.vue";
import Profile from "./views/Profile.vue";
import { USER_TYPE_GUEST, USER_TYPE_REGISTERED, ROUTE_NAME_HOME, ROUTE_NAME_PROFILE, ROUTE_NAME_PROTECTED } from "./constants";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: ROUTE_NAME_HOME,
      component: Home
    },
    {
      path: "/protected",
      name: ROUTE_NAME_PROTECTED,
      component: Protected,
      meta: {
        permissions: [
          {
            type: USER_TYPE_GUEST,
            access: false,
            redirect: ROUTE_NAME_HOME
          }
        ]
      }
    },
    {
      path: "/profile/:id",
      name: ROUTE_NAME_PROFILE,
      component: Profile,
      meta: {
        permissions: [
          {
            type: USER_TYPE_REGISTERED,
            access: (user, to) => user.id === to.params.id,
            redirect: ROUTE_NAME_HOME
          },
          {
            type: USER_TYPE_GUEST,
            access: false,
            redirect: ROUTE_NAME_HOME
          }
        ]
      }
    }
  ]
});

export default router;
