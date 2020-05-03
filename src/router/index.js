import Vue from "vue";
import VueRouter from "vue-router";
import game from '@/views/Game.vue';
// import main from '@/views/Main.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path:"/",
  //   name:"main",
  //   component:main
  // },
  {
    path:"/",
    name:"Game",
    component:game
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
