// Components
import App from "./App.vue";
// Composables
import { createApp, computed } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

import { useTheme } from "vuetify";

app.config.globalProperties.$isDark = computed(() => {
  return useTheme().global.current.value.dark;
});
//     this.lang = localStorage.getItem("lang") === "en"
//     this.$i18n.locale = "en"
app.mount("#app");
