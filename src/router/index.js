import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardDefault from '../views/dashboardDefault'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'DashboardDefault',
    component: DashboardDefault
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
