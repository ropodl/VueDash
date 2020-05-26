import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            dark: localStorage.getItem('dark')
        }
    }
}

export default new Vuetify(opts);