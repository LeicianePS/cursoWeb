import 'font-awesome/css/font-awesome.css';
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false

// Temporario
//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlNvdXphIiwiZW1haWwiOiJzb3V6YUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA2MDE5MTIxLCJleHAiOjE3MDYyNzgzMjF9.6ytDeIfmkfZikQEX0Utx6OCkmOzZaGymAzr1zN4kBBI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')