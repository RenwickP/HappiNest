import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Landing from "../views/Landing.vue";
// @ts-ignore
import Login from "../views/Login.vue";
// @ts-ignore
import Register from "../views/Register.vue";
// @ts-ignore
import Houses from "../views/Houses.vue";
// @ts-ignore
import House from "../views/House.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/houses/:profileId",
      name: "houses",
      props: true,
      component: Houses
    },
    {
      path: "/house",
      name: "house",
      component: House
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
