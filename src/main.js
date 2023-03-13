// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);
//     this.lang = localStorage.getItem("lang") === "en"
//     this.$i18n.locale = "en"
app.mount("#app");
