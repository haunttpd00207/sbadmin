import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'

import {
  securedAxiosInstance,
  plainAxiosInstance
} from './backend/axios'
import './main.css' // tailwind

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  components: {
    App
  },
  template: '<App/>'
})
