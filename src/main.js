import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './directives/scrollanimation'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)
Vue.directive('scrollanimation', ScrollAnimation)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
