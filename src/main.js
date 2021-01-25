import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
