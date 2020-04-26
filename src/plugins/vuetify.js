import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
// import np from './translations/np'

const opts = {
    theme:{
        dark: true
    }
}

export default new Vuetify(opts);