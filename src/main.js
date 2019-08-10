/*
 * @Description:
 * @Author: dongshen
 * @Date: 2019-05-10 10:10:51
 * @LastEditors: dongshen
 * @LastEditTime: 2019-08-10 22:29:58
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

// 本地开始模式才开启mock
console.log(process.env.NODE_ENV)
// integrate for mock ,production for deploy
if (process.env.NODE_ENV === 'integrate') {
  // 这里采用同步加载的模式
  var mock = require('./mock')
  mock.default()
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
