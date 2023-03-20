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

import { useTheme } from "vuetify";

app.config.globalProperties.$isDark = computed(() => {
  return useTheme().global.current.value.dark;
});
app.mount("#app");
