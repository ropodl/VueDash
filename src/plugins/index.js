// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
import i18n from "./i18n";
import VueApexCharts from "vue3-apexcharts";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(i18n).use(VueApexCharts);
}
