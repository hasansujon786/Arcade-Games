import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './sass/main.scss'

Vue.config.productionTip = false

// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
