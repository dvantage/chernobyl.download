import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Interfaces
import {ICustomWindow} from './interfaces';

Vue.config.productionTip = false;


declare var window: ICustomWindow;


window.vueInstance = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#main');

