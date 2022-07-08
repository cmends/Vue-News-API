import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GlobalView from '../views/GlobalView.vue'
import BusinessView from '../views/BusinessView.vue'
import HealthView from '../views/HealthView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/technology',
    name: 'technology',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/global',
    name: 'global',
    component:GlobalView
  },
  {
    path: '/business',
    name: 'business',
    component:BusinessView
  },
  {
    path: '/health',
    name: 'health',
    component:HealthView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
