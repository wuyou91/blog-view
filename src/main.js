import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/iconfont/iconfont.css';


Vue.use(VueLazyload, {
  loading: '@/assets/loading.gif',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
