import Vue from 'vue'
import VueRouter from 'vue-router'

// Dashboard
import DashboardDefault from '../views/Dashboard/dashboardDefault'
import DashboardAnalytics from '../views/Dashboard/dashboardAnalytics'
import DashboardEcommerce from '../views/Dashboard/dashboardEcommerce'
import DashboardSocial from '../views/Dashboard/dashboardSocial'
import DashboardCrypto from '../views/Dashboard/dashboardCrypto'
// Pages
import Profile from '../views/Pages/Profile'
import Settings from '../views/Pages/Settings'
import Clients from '../views/Pages/Clients'
import Invoice from '../views/Pages/Invoice'
import Pricing from '../views/Pages/Pricing'
import Tasks from '../views/Pages/Tasks'
import BlankPage from '../views/Pages/BlankPage'
//Auth
import SignIn from '../views/Auth/SignIn'
import SignUp from '../views/Auth/SignUp'
import ResetPassword from '../views/Auth/ResetPassword'
import fourofourPage from '../views/Auth/404Page'
import fiveooPage from '../views/Auth/500Page'
//Documentation
import Introduction from '../views/Documentation/Introduction'
import GettingStarted from '../views/Documentation/GettingStarted'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'DashboardDefault',
  component: DashboardDefault
}, {
  path: '/dashboardanalytics',
  name: 'DashboardAnalytics',
  component: DashboardAnalytics
}, {
  path: '/dashboardecommerce',
  name: 'DashboardEcommerce',
  component: DashboardEcommerce
}, {
  path: '/dashboardsocial',
  name: 'DashboardSocial',
  component: DashboardSocial
}, {
  path: '/dashboardcrypto',
  name: 'DashboardCrypto',
  component: DashboardCrypto
}, {
  path: '/profile',
  name: 'Profile',
  component: Profile
}, {
  path: '/settings',
  name: 'Settings',
  component: Settings
}, {
  path: '/clients',
  name: 'Clients',
  component: Clients
}, {
  path: '/invoice',
  name: 'Invoice',
  component: Invoice
}, {
  path: '/pricing',
  name: 'Pricing',
  component: Pricing
}, {
  path: '/tasks',
  name: 'Tasks',
  component: Tasks
}, {
  path: '/blank-page',
  name: 'Blank Page',
  component: BlankPage
}, {
  path: '/signin',
  name: 'SignIn',
  component: SignIn,
  meta: {
    hidenav: true
  }
}, {
  path: '/signup',
  name: 'SignUp',
  component: SignUp,
  meta: {
    hidenav: true
  }
}, {
  path: '/reset-password',
  name: 'Reset Password',
  component: ResetPassword,
  meta: {
    hidenav: true
  }
}, {
  path: '/404',
  name: '404',
  component: fourofourPage,
  meta: {
    hidenav: true
  }
}, {
  path: '/500',
  name: '500',
  component: fiveooPage,
  meta: {
    hidenav: true
  }
}, {
  path: '/introduction',
  name: 'Introduction',
  component: Introduction
}, {
  path: '/getting-started',
  name: 'GettingStarted',
  component: GettingStarted
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router