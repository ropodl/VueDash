import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'us': {
        dashboard: 'Dashboard',
        profile: 'Profile',
        analytics: 'Analytics',
        settings: 'Settings',
        help: 'Help',
        signout: 'Sign Out',
    },
    'np': {
        dashboard: 'ड्यासबोर्ड',
        profile: 'प्रोफाइल',
        analytics: 'विश्लेषण',
        settings: 'सेटिंग्स',
        help: 'मद्दत',
        signout: 'साइन आउट गर्नुहोस्',
    }
};

const i18n = new VueI18n({
    locale: 'us', // set locale
    fallbackLocale: 'np', // set fallback locale
    messages, // set locale messages
});

export default i18n;
