import { createI18n } from "vue-i18n";

import en from "./langs/en.json";
import np from "./langs/np.json";

const i18n = createI18n({
  locale: "en", // set locale
  legacy: false,
  allowComposition: true,
  fallbackLocale: "en", // set fallback locale
  messages: {
    en,
    np,
  },
});

export default i18n;
