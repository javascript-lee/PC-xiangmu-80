import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

import Welcome from '@/views/welcome'
import Home from '@/views/hoem'

import Howd from '@/views/404'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/',
      component: Home,
      children: [
        { path: '/', name: 'wecom', component: Welcome }
      ]
    },
    { path: '*', name: '404', component: Howd }
  ]
})
export default router
