import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入全局样式表
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
