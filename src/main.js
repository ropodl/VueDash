// Components
import App from "./App.vue";
// Composables
import { createApp, computed } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { registerSW } from "virtual:pwa-register";

registerSW({
  onOfflineReady() {},
});

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
