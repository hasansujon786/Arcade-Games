import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Layout from './layouts/default.vue'

import './sass/main.scss'

Vue.config.productionTip = false

// layout
Vue.component('Layout', Layout)

// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
