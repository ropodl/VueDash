import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'us': {
        dashboard: 'Dashboard',
        default: 'Default',
        analytics: 'Analytics',
        ecommerce: 'E-Commerce',
        social: 'Social',
        crypto: 'Crypto',
        pages: 'Pages',
        profile: 'Profile',
        settings: 'Settings',
        clients: 'Clients',
        projects: 'Projects',
        list: 'List',
        details: 'Details',
        invoice: 'Invoice',
        pricing: 'Pricing',
        tasks: 'Tasks',
        chat: 'Chat',
        blankpage: 'Blank Page',
        auth: 'Authentication',
        signin: 'Log In',
        signup: 'Sign Up',
        resetpassword: 'Reset Password',
        fourofour: '404 Page',
        fiveoo: '500 Page',
        table: 'Tables',
        help: 'Help',
        signout: 'Sign Out',
    },
    'np': {
        dashboard: 'ड्यासबोर्ड',
        default: 'पूर्वनिर्धारित',
        analytics: 'विश्लेषण',
        ecommerce: 'इ-वाणिज्य',
        social: 'सामाजिक',
        crypto: 'क्रिप्टो',
        pages: 'पृष्ठहरु',
        profile: 'प्रोफाइल',
        settings: 'सेटिंग्स',
        clients: 'ग्राहकहरु',
        projects: 'प्रोजेक्टहरू',
        list: 'सूची',
        detail: 'विवरण',
        invoice: 'चलानी',
        pricing: 'मूल्य निर्धारण',
        tasks: 'कार्यहरू',
        chat: 'कुराकानी',
        blankpage: 'खाली पृष्ठ',
        auth: 'प्रामाणिक',
        signin: 'लग - इन',
        signup: 'साइन अप',
        resetpassword: 'पासवर्ड रिसेट',
        fourofour: '४०४ पृष्ठ',
        fiveoo: '५०० पृष्ठ',
        table: 'तालिका',
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