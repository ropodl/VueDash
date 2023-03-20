import { createI18n } from "vue-i18n";

import us from "./langs/us.json";
import np from "./langs/np.json";

const i18n = createI18n({
  locale: "us",
  legacy: false,
  allowComposition: true,
  fallbackLocale: "np",
  messages: {
    us,
    np,
  },
});

export default i18n;
