import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home";
import Login from "@/pages/login/login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
