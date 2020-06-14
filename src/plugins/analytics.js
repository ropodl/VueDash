import Vue from 'vue'
import VueGtag from "vue-gtag"

import routes from '../router/'

Vue.use(VueGtag, {
    config: {
        id: 'UA-167286605-1',
    },
    appName: 'VuetifyDash',
    pageTrackerScreenviewEnabled: true,
}, routes)

export default VueGtag