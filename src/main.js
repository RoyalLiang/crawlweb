import Vue from 'vue'
import './plugins/vuetify'
import router from './router'

import BootstrapVue from "bootstrap-vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
import Apps from './Layout/Wrappers/appLayout.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(ElementUI)

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);
Vue.component('apps-layout', Apps);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
