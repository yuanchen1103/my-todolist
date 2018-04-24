// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BackToTop from 'vue-backtotop';
import App from './App';

Vue.use(BackToTop);
Vue.config.productionTip = false;


/* eslint-disable no-new */
// eslint-disable-next-line
export const bus = new Vue();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
