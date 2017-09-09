import Vue from "vue";
import VueRouter from "vue-router";
import { HomeComponent } from "./components/home";

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: "/", component: HomeComponent },
    // { path: "/about", component: AboutComponent },
    // { path: "/list", component: ListComponent },
  ],
});

new Vue({
  el: "#app-main",
  router: router,
  // components: {
  //   navbar: NavbarComponent,
  // },
});
