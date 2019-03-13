import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Router from '../router.js';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes: Router
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
