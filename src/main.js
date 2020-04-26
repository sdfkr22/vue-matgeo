import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate"
import VueRouter from 'vue-router'
import {routes} from "./routes"
import VueKatex from 'vue-katex';

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueKatex, {
  globalOptions: {
    //... Define globally applied KaTeX options here
  }
});

const router = new VueRouter({
  routes,
  mode : 'hash'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
