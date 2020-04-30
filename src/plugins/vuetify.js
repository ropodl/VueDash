import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
    theme:{
        dark: true,
        themes: {
            // light: {
            //     primary: '#d64937'
            // },
            // dark: {
            //     primary: '#d64937'
            // }
        }
    }
}

export default new Vuetify(opts);