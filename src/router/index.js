// Composables
import { createRouter, createWebHistory } from "vue-router";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// Dashboard
import DashboardDefault from "../views/Dashboard/dashboardDefault";
import DashboardAnalytics from "../views/Dashboard/dashboardAnalytics";
import DashboardEcommerce from "../views/Dashboard/dashboardEcommerce";
import DashboardSocial from "../views/Dashboard/dashboardSocial";
import DashboardCrypto from "../views/Dashboard/dashboardCrypto";
// // Pages
import Profile from "../views/Pages/Profile";
import Settings from "../views/Pages/Settings";
import Clients from "../views/Pages/Clients";
import List from "../views/Pages/List";
import Detail from "../views/Pages/Detail";
import Invoice from "../views/Pages/Invoice";
import Pricing from "../views/Pages/Pricing";
import Tasks from "../views/Pages/Tasks";
import Chat from "../views/Pages/Chat";
import BlankPage from "../views/Pages/BlankPage";
//Auth
import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import ResetPassword from "../views/Auth/ResetPassword";
import fourofourPage from "../views/Auth/404Page";
import fiveooPage from "../views/Auth/500Page";
//Documentation
import Introduction from "../views/Documentation/Introduction";
import GettingStarted from "../views/Documentation/GettingStarted";
import Plugins from "../views/Documentation/Plugins";
import Changelog from "../views/Documentation/Changelog";
//UI Elements
import Alerts from "../views/Elements/Alerts";
import Buttons from "../views/Elements/Buttons";
import Cards from "../views/Elements/Cards";
import Carousel from "../views/Elements/Carousel";
import embedVideo from "../views/Elements/embedVideo";
import General from "../views/Elements/General";
import Grid from "../views/Elements/Grid";
import Modals from "../views/Elements/Modals";
import Tabs from "../views/Elements/Tabs";
import Typography from "../views/Elements/Typography";
//Icons
import Mdi from "../views/Icons/Mdi";
import Fa from "../views/Icons/Fa5";
//Forms
import Layouts from "../views/Forms/Layouts";
import BasicInputs from "../views/Forms/BasicInputs";
import InputGroups from "../views/Forms/InputGroups";
//Table
import Table from "../views/Tables/Tables";
//Form Plugins
import AdvancedInputs from "../views/FormPlugins/AdvancedInputs";
import Editors from "../views/FormPlugins/Editors";
import Validation from "../views/FormPlugins/Validation";
import Wizard from "../views/FormPlugins/Wizard";
// // //Data Tables
import ResponsiveTables from "../views/DataTables/ResponsiveTables";
import TablewButtons from "../views/DataTables/TableWithButtons";
import ColumnSearch from "../views/DataTables/ColumnSearch";
import MultiSelection from "../views/DataTables/MultiSelection";
import AjaxSourcedData from "../views/DataTables/AjaxSourcedData";
//Chart
import Chartjs from "../views/Charts/ChartJs";
import ApexCharts from "../views/Charts/ApexCharts";
//Notifications
import Notifications from "../views/Notifications/Notifications";
//Maps
import GoogleMaps from "../views/Maps/GoogleMaps";
import VectorMaps from "../views/Maps/VectorMaps";
//Calendar
import Calendar from "../views/Calendar/Calendar";
//Multi Level

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Dashboard/dashboardDefault"),
  },
  // {
  //   path: "/analytics",
  //   name: "Analytics",
  //   component: DashboardAnalytics,
  // },
  // {
  //   path: "/ecommerce",
  //   name: "Ecommerce",
  //   component: DashboardEcommerce,
  // },
  // {
  //   path: "/social",
  //   name: "Social",
  //   component: DashboardSocial,
  // },
  // {
  //   path: "/crypto",
  //   name: "Crypto",
  //   component: DashboardCrypto,
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   component: Settings,
  // },
  // {
  //   path: "/clients",
  //   name: "Clients",
  //   component: Clients,
  // },
  // {
  //   path: "/list",
  //   name: "List",
  //   component: List,
  // },
  // {
  //   path: "/detail",
  //   name: "Detail",
  //   component: Detail,
  // },
  // {
  //   path: "/invoice",
  //   name: "Invoice",
  //   component: Invoice,
  // },
  // {
  //   path: "/pricing",
  //   name: "Pricing",
  //   component: Pricing,
  // },
  // {
  //   path: "/tasks",
  //   name: "Tasks",
  //   component: Tasks,
  // },
  // {
  //   path: "/chat",
  //   name: "Chat",
  //   component: Chat,
  // },
  // {
  //   path: "/blank-page",
  //   name: "Blank Page",
  //   component: BlankPage,
  // },
  // {
  //   path: "/signin",
  //   name: "SignIn",
  //   component: SignIn,
  //   meta: {
  //     hidenav: true,
  //   },
  // },
  // {
  //   path: "/signup",
  //   name: "SignUp",
  //   component: SignUp,
  //   meta: {
  //     hidenav: true,
  //   },
  // },
  // {
  //   path: "/reset-password",
  //   name: "Reset Password",
  //   component: ResetPassword,
  //   meta: {
  //     hidenav: true,
  //   },
  // },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: fourofourPage,
  //   meta: {
  //     hidenav: true,
  //   },
  // },
  // {
  //   path: "/500",
  //   name: "500",
  //   component: fiveooPage,
  //   meta: {
  //     hidenav: true,
  //   },
  // },
  // {
  //   path: "/introduction",
  //   name: "Introduction",
  //   component: Introduction,
  // },
  // {
  //   path: "/getting-started",
  //   name: "GettingStarted",
  //   component: GettingStarted,
  // },
  // {
  //   path: "/plugins",
  //   name: "Plugins",
  //   component: Plugins,
  // },
  // {
  //   path: "/changelog",
  //   name: "Changelog",
  //   component: Changelog,
  // },
  // {
  //   path: "/alerts",
  //   name: "Alerts",
  //   component: Alerts,
  // },
  // {
  //   path: "/buttons",
  //   name: "Buttons",
  //   component: Buttons,
  // },
  // {
  //   path: "/Cards",
  //   name: "Cards",
  //   component: Cards,
  // },
  // {
  //   path: "/carousel",
  //   name: "Carousel",
  //   component: Carousel,
  // },
  // {
  //   path: "/embed-video",
  //   name: "EmbedVideo",
  //   component: embedVideo,
  // },
  // {
  //   path: "/general",
  //   name: "General",
  //   component: General,
  // },
  // {
  //   path: "/grid",
  //   name: "Grid",
  //   component: Grid,
  // },
  // {
  //   path: "/modals",
  //   name: "Modals",
  //   component: Modals,
  // },
  // {
  //   path: "/tabs",
  //   name: "Tabs",
  //   component: Tabs,
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   component: Typography,
  // },
  // {
  //   path: "/mdi",
  //   name: "Mdi",
  //   component: Mdi,
  // },
  // {
  //   path: "/fa5",
  //   name: "Fa5",
  //   component: Fa,
  // },
  // {
  //   path: "/layouts",
  //   name: "Layouts",
  //   component: Layouts,
  // },
  // {
  //   path: "/basic-inputs",
  //   name: "BasicInputs",
  //   component: BasicInputs,
  // },
  // {
  //   path: "/input-groups",
  //   name: "InputGroups",
  //   component: InputGroups,
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Table,
  // },
  // {
  //   path: "/advanced-inputs",
  //   name: "Advanced Inputs",
  //   component: AdvancedInputs,
  // },
  // {
  //   path: "/editors",
  //   name: "Editors",
  //   component: Editors,
  // },
  // {
  //   path: "/validation",
  //   name: "Validation",
  //   component: Validation,
  // },
  // {
  //   path: "/wizard",
  //   name: "Wizard",
  //   component: Wizard,
  // },
  // {
  //   path: "/responsive-tables",
  //   name: "Responsive Tables",
  //   component: ResponsiveTables,
  // },
  // {
  //   path: "/table-buttons",
  //   name: "Table with Buttons",
  //   component: TablewButtons,
  // },
  // {
  //   path: "/column-search",
  //   name: "Column Search",
  //   component: ColumnSearch,
  // },
  // {
  //   path: "/multi-selection",
  //   name: "Multi Selection",
  //   component: MultiSelection,
  // },
  // {
  //   path: "/ajax-sourced-data",
  //   name: "Ajax Source Data",
  //   component: AjaxSourcedData,
  // },
  // {
  //   path: "/chartjs",
  //   name: "Chart.js",
  //   component: Chartjs,
  // },
  // {
  //   path: "/apexcharts",
  //   name: "ApexCharts",
  //   component: ApexCharts,
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   component: Notifications,
  // },
  // {
  //   path: "/google-maps",
  //   name: "Google Maps",
  //   component: GoogleMaps,
  // },
  // {
  //   path: "/vector-maps",
  //   name: "Vector Maps",
  //   component: VectorMaps,
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   component: Calendar,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//     NProgress.start();
//   }
//   next();
// });

// router.afterEach(() => {
//   NProgress.done();
// });

// export default router;
