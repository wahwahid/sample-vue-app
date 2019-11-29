import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactApp from './ContactApp.vue'
import routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(ContactApp),
  router
}).$mount('#app')
