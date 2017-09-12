import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import marquee from 'vue-marquee'


import 'common/stylus/index.styl'
//字体
import 'common/font/iconfont.css'
import 'common/font/iconfont.js'
import 'base/api/rem'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/img/default.png')
})
new Vue({
  el: "#app",
  render: h => h(App),
  router
})
