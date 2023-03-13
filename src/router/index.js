// Composables
import { createRouter, createWebHistory } from "vue-router";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

const routes = [
  {
    path: "",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/Dashboard/dashboardDefault"),
      },
      {
        path: "/analytics",
        name: "Analytics",
        component: () => import("@/views/Dashboard/dashboardAnalytics"),
      },
      {
        path: "/ecommerce",
        name: "Ecommerce",
        component: () => import("@/views/Dashboard/dashboardEcommerce"),
      },
      {
        path: "/social",
        name: "Social",
        component: () => import("@/views/Dashboard/dashboardSocial"),
      },
      {
        path: "/crypto",
        name: "Crypto",
        component: () => import("@/views/Dashboard/dashboardCrypto"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/Pages/Profile"),
      },
      {
        path: "/settings",
        name: "Settings",
        component: () => import("@/views/Pages/Settings"),
      },
      {
        path: "/clients",
        name: "Clients",
        component: () => import("@/views/Pages/Clients"),
      },
      {
        path: "/list",
        name: "List",
        component: () => import("@/views/Pages/List"),
      },
      {
        path: "/detail",
        name: "Detail",
        component: () => import("@/views/Pages/Detail"),
      },
      {
        path: "/invoice",
        name: "Invoice",
        component: () => import("@/views/Pages/Invoice"),
      },
      {
        path: "/pricing",
        name: "Pricing",
        component: () => import("@/views/Pages/Pricing"),
      },
      {
        path: "/tasks",
        name: "Tasks",
        component: () => import("@/views/Pages/Tasks"),
      },
      {
        path: "/chat",
        name: "Chat",
        component: () => import("@/views/Pages/Chat"),
      },
      {
        path: "/blank-page",
        name: "Blank Page",
        component: () => import("@/views/Pages/BlankPage"),
      },
      {
        path: "/signin",
        name: "SignIn",
        component: () => import("@/views/Auth/SignIn"),
      },
      {
        path: "/signup",
        name: "SignUp",
        component: () => import("@/views/Auth/SignUp"),
      },
      {
        path: "/reset-password",
        name: "Reset Password",
        component: () => import("@/views/Auth/ResetPassword"),
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/Auth/404Page"),
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/Auth/500Page"),
      },
      {
        path: "/introduction",
        name: "Introduction",
        component: () => import("@/views/Documentation/Introduction"),
      },
      {
        path: "/getting-started",
        name: "GettingStarted",
        component: () => import("@/views/Documentation/GettingStarted"),
      },
      {
        path: "/plugins",
        name: "Plugins",
        component: () => import("@/views/Documentation/Plugins"),
      },
      {
        path: "/changelog",
        name: "Changelog",
        component: () => import("@/views/Documentation/Changelog"),
      },
      {
        path: "/alerts",
        name: "Alerts",
        component: () => import("@/views/Elements/Alerts"),
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: () => import("@/views/Elements/Buttons"),
      },
      {
        path: "/Cards",
        name: "Cards",
        component: () => import("@/views/Elements/Cards"),
      },
      {
        path: "/carousel",
        name: "Carousel",
        component: () => import("@/views/Elements/Carousel"),
      },
      {
        path: "/embed-video",
        name: "EmbedVideo",
        component: () => import("@/views/Elements//embedVideo"),
      },
      {
        path: "/general",
        name: "General",
        component: () => import("@/views/Elements/General"),
      },
      {
        path: "/grid",
        name: "Grid",
        component: () => import("@/views/Elements/Grid"),
      },
      {
        path: "/modals",
        name: "Modals",
        component: () => import("@/views/Elements/Modals"),
      },
      {
        path: "/tabs",
        name: "Tabs",
        component: () => import("@/views/Elements/Tabs"),
      },
      {
        path: "/typography",
        name: "Typography",
        component: () => import("@/views/Elements/Typography"),
      },
      {
        path: "/mdi",
        name: "Mdi",
        component: () => import("@/views/Icons/Mdi"),
      },
      {
        path: "/fa5",
        name: "Fa5",
        component: () => import("@/views/Icons/Fa5"),
      },
      {
        path: "/layouts",
        name: "Layouts",
        component: () => import("@/views/Forms/Layouts"),
      },
      {
        path: "/basic-inputs",
        name: "BasicInputs",
        component: () => import("@/views/Forms/BasicInputs"),
      },
      {
        path: "/input-groups",
        name: "InputGroups",
        component: () => import("@/views/Forms/InputGroups"),
      },
      {
        path: "/tables",
        name: "Tables",
        component: () => import("@/views/Tables/Tables"),
      },
      {
        path: "/advanced-inputs",
        name: "Advanced Inputs",
        component: () => import("@/views/FormPlugins/AdvancedInputs"),
      },
      {
        path: "/editors",
        name: "Editors",
        component: () => import("@/views/FormPlugins/Editors"),
      },
      {
        path: "/validation",
        name: "Validation",
        component: () => import("@/views/FormPlugins/Validation"),
      },
      {
        path: "/wizard",
        name: "Wizard",
        component: () => import("@/views/FormPlugins/Wizard"),
      },
      {
        path: "/responsive-tables",
        name: "Responsive Tables",
        component: () => import("@/views/DataTables/ResponsiveTables"),
      },
      {
        path: "/table-buttons",
        name: "Table with Buttons",
        component: () => import("@/views/DataTables/TableWithButtons"),
      },
      {
        path: "/column-search",
        name: "Column Search",
        component: () => import("@/views/DataTables/ColumnSearch"),
      },
      {
        path: "/multi-selection",
        name: "Multi Selection",
        component: () => import("@/views/DataTables/MultiSelection"),
      },
      {
        path: "/ajax-sourced-data",
        name: "Ajax Source Data",
        component: () => import("@/views/DataTables/AjaxSourcedData"),
      },
      {
        path: "/chartjs",
        name: "Chart.js",
        component: () => import("@/views/Charts/ChartJs"),
      },
      {
        path: "/apexcharts",
        name: "ApexCharts",
        component: () => import("@/views/Charts/ApexCharts"),
      },
      {
        path: "/notifications",
        name: "Notifications",
        component: () => import("@/views/Notifications/Notifications"),
      },
      {
        path: "/google-maps",
        name: "Google Maps",
        component: () => import("@/views/Maps/GoogleMaps"),
      },
      {
        path: "/vector-maps",
        name: "Vector Maps",
        component: () => import("@/views/Maps/VectorMaps"),
      },
      {
        path: "/calendar",
        name: "Calendar",
        component: () => import("@/views/Calendar/Calendar"),
      },
    ],
  },
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
