import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardDefault from '../views/Dashboard/dashboardDefault'
import DashboardAnalytics from '../views/Dashboard/dashboardAnalytics'
import DashboardEcommerce from '../views/Dashboard/dashboardEcommerce'
import DashboardSocial from '../views/Dashboard/dashboardSocial'
import DashboardCrypto from '../views/Dashboard/dashboardCrypto'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'DashboardDefault',
    component: DashboardDefault
  },{
    path: '/dashboardanalytics',
    name: 'DashboardAnalytics',
    component: DashboardAnalytics
  },{
    path: '/dashboardecommerce',
    name: 'DashboardEcommerce',
    component: DashboardEcommerce
  },{
    path: '/dashboardsocial',
    name: 'DashboardSocial',
    component: DashboardSocial
  },{
    path: '/dashboardcrypto',
    name: 'DashboardCrypto',
    component: DashboardCrypto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router