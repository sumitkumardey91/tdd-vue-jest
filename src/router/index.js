import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/LoginPage/login/LoginPage.vue";
import Success from "../views/LoginPage/Success.vue";
import Error from "../views/LoginPage/Error.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
