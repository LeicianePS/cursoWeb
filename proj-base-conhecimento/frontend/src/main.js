import 'font-awesome/css/font-awesome.css';
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false

// Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlNvdXphIiwiZW1haWwiOiJzb3V6YUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA1NjgwMDIyLCJleHAiOjE3MDU5MzkyMjJ9.H9jseQvP22f9v2vdP9x02rokc1kM_j1CStfLHkAQCAM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')