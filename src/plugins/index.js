// Plugins
import router from "../router";
import i18n from "./i18n";
import vuetify from "./vuetify";
import { loadFonts } from "./webfontloader";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(i18n);
  // .use(autoAnimatePlugin)
}
