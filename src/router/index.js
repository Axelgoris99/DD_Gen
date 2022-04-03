import Vue from "vue";
import VueRouter from "vue-router";
import home from "../vue/homePresenter.vue";
import register from "../view/registerView.vue";
import login from "../view/loginView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/input",
    name: "input",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../vue/inputPresenter.vue"),
  },
  {
    path: "/changes",
    name: "changes",
    component: () => import("../vue/changesPresenter.vue"),
  },
  {
    path: "/output",
    name: "output",
    component: () => import("../vue/outputPresenter.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
