import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

import store from './store';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
