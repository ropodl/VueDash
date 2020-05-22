//alpha
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './langs/en.json'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'np', // set fallback locale
    messages: {
        en
    }
})

export default i18n