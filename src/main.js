import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  devtools.connect('localhost', '8098');
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
