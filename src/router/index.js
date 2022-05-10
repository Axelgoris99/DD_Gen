import Vue from "vue";
import VueRouter from "vue-router";
import home from "../presenter/homePresenter.vue";
import store from "../store/index.js";
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

router.beforeEach((to, from, next) => {
  if (to.name == "output" && !store.getters["current/ready"]) {
    next({ name: "home" });
  } else if (to.name == "changes" && !store.getters["current/ready"]) {
    if (!store.getters["options/races"][0]) {
      store
        .dispatch("options/init")
        .then(() => store.dispatch("current/init"))
        .then(() => next({ name: "changes" }))
        .catch(() => router.push({ name: "home" }));
    } else {
      store;
      store
        .dispatch("current/init")
        .then(() => next({ name: "changes" }))
        .catch(() => router.push({ name: "home" }));
    }
  } else {
    next();
  }
});

export default router;
