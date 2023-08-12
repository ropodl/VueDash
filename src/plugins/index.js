// Plugins
import VueApexCharts from "vue3-apexcharts";
import router from "../router";
import i18n from "./i18n";
import vuetify from "./vuetify";
import { loadFonts } from "./webfontloader";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(i18n).use(VueApexCharts);
  // .use(autoAnimatePlugin)
}
