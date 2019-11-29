import Vue from 'vue'
import ContactApp from './ContactApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ContactApp),
}).$mount('#app')
