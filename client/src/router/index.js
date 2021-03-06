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
// @ts-ignore
import DemoHouse from "../views/DemoHouse.vue";


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
      path: "/houses",
      name: "houses",
      component: Houses
    },
    {
      path: "/demohouse",
      name: "demohouse",
      component: DemoHouse
    },
    {
      path: "/house/:id",
      name: "house",
      component: House
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
