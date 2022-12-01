import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Order from "@/views/Order.vue";
import Basket from "@/views/Basket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
