// import devtools from '@vue/devtools'

import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

// devtools vuejs
/* if (process.env.NODE_ENV === 'development') {
  devtools.connect('localhost', '8098');
} */

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  // BootstrapVue,
  // IconsPlugin,
  render: h => h(App)
}).$mount('#app')
