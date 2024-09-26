import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import commonJs from './assets/common.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
const moment = require('moment')
require('moment/locale/zh-cn')

Vue.use(require('vue-moment'), {
  moment
})
router.beforeEach((to, from, next) => {
  typeof to.meta.pageTitle !== undefined && commonJs.setTitle(to.meta.pageTitle)
  next()
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
