import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        profile: 'Profile',
        analytics: 'Analytics',
        settings: 'Settings',
        help: 'Help',
        signout: 'Sign Out',
    },
    'np': {
        profile: 'प्रोफाइल',
        analytics: 'विश्लेषण',
        settings: 'सेटिंग्स',
        help: 'मद्दत',
        signout: 'साइन आउट गर्नुहोस्',
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'np', // set fallback locale
    messages, // set locale messages
});

export default i18n;
