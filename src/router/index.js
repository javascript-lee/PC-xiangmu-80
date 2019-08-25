import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

import Home from '../views/hoem/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/', name: 'home', component: Home }
  ]
})
export default router
