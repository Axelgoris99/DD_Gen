import Vue from "vue";
import VueRouter from "vue-router";
import home from "../presenter/homePresenter.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
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
    component: () => import("../presenter/inputPresenter.vue"),
  },
  {
    path: "/changes",
    name: "changes",
    component: () => import("../presenter/changesPresenter.vue"),
  },
  {
    path: "/output",
    name: "output",
    component: () => import("../presenter/outputPresenter.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../presenter/registerPresenter.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../presenter/loginPresenter.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../presenter/profilePresenter.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
