import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'us': {
        vuetify: 'Vuetify',
        // navigation bar
        // Dashboard
        dashboard: 'Dashboard',
        default: 'Default',
        analytics: 'Analytics',
        ecommerce: 'E-Commerce',
        social: 'Social',
        crypto: 'Crypto',
        // Pages
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
        // Authentication
        auth: 'Authentication',
        signin: 'Log In',
        signup: 'Sign Up',
        resetpassword: 'Reset Password',
        fourofour: '404 Page',
        fiveoo: '500 Page',
        // Documentation
        documentation: 'Documentation',
        introduction: 'Introduction',
        gettingstarted: 'Getting Started',
        plugins: 'Plugins',
        changelog: 'Changelog',
        // next category
        // next category
        toolsandcomponents: 'Tools and Components',
        //UI Elements
        uielements: 'UI Elements',
        alerts: 'Icons',
        buttons: 'Buttons',
        cards: 'Cards',
        carousel: 'Carousel',
        embedvideo: 'Embed Video',
        general: 'General',
        grid: 'Grid',
        modals: 'Modals',
        tabs: 'Tabs',
        typography: 'Typography',
        //icons
        icons: 'Icons',
        //forms
        forms: 'Forms',
        layouts: 'Layouts',
        basicinputs: 'Basic Inputs',
        inputgroups: 'Input Groups',
        //tables
        tables: 'Tables',
        help: 'Help',
        signout: 'Sign Out',
    },
    'np': {
        vuetify: 'भ्युटिफाई',
        // navigation bar
        // Dashboard
        dashboard: 'ड्यासबोर्ड',
        default: 'पूर्वनिर्धारित',
        analytics: 'विश्लेषण',
        ecommerce: 'इ-वाणिज्य',
        social: 'सामाजिक',
        crypto: 'क्रिप्टो',
        // Pages
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
        // Authentication
        auth: 'प्रामाणिक',
        signin: 'लग - इन',
        signup: 'साइन अप',
        resetpassword: 'पासवर्ड रिसेट',
        fourofour: '४०४ पृष्ठ',
        fiveoo: '५०० पृष्ठ',
        // Documentation
        documentation: 'कागजात',
        introduction: 'परिचय',
        gettingstarted: 'सुरु गर्दै',
        plugins: 'प्लगइनहरू',
        changelog: 'परिवर्तनहरू',
        // next category
        toolsandcomponents: 'उपकरण र घटकहरू',
        //UI Elements
        uielements: 'UI तत्वहरु',
        alerts: 'सुचना',
        buttons: 'बटन',
        cards: 'कार्ड',
        carousel: '',
        embedvideo: 'इम्बेड भिडियो',
        general: 'सामान्य',
        grid: 'ग्रिड',
        modals: 'मोडल',
        tabs: 'ट्याब',
        typography: 'टाइपोग्राफी',
        //icons
        icons: 'आइकन',
        //forms
        forms: 'फारम',
        layouts: 'लेआउट',
        basicinputs: 'आधारभूत इनपुट',
        inputgroups: 'इनपुट समूह',
        //tables
        tables: 'तालिका',
        // App bar
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