import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import routes from '../router/'

Vue.use(VueAnalytics, {
    id: 'UA-167286605-1',
    checkDuplicatedScript: true,
    routes,
    autoTracking: {
        screenview: true
    }
})

export default VueAnalytics