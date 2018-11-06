// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import './public/fonts/style.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueLazyload, {
  error: './static/img/music_icon_menu_isoff.png',
  loading: './static/img/ic_upper_comment_default.png'
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.push('/home')
