import Vue from 'vue'
import 'bootswatch/dist/flatly/bootstrap.css';

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
