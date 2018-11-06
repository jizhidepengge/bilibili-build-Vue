<template>
  <div>
    <header-com @cUser='changeUser' :ftActive='ftActive'></header-com>
    <router-view :isLogin='isLogin' @changeLogin='changeLogin' @nowActive='nowActive'></router-view>
    <footer-com :ftActive='ftActive'  :arrRouter='arrRouter' @cRouter = 'changeRouter'></footer-com>
    <transition name = 'user'>
      <myuser-com :actChild='actChild' v-if='showUser' @cLogin='changeLogin' @cUser='changeUser'></myuser-com>
    </transition>
    <detail-com v-if='showDetail' @cUser='changeUser'></detail-com>
    <transition name = 'login'>
      <login-com v-if='showLogin' @cLogin='changeLogin'></login-com>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MyUser from '@/components/MyUser'
import Detail from '@/components/Detail'
import Login from '@/components/Login'

const arrRouter = [
  {txt: '首页', icon: 'icon-shouye', url: '/home'},
  {txt: '频道', icon: 'icon-pindao', url: '/home/classBlock'},
  {txt: '动态', icon: 'icon-dongtai', url: '/home/dyn'},
  {txt: '消息', icon: 'icon-qipao', url: '/home/info'}
]
export default {
  props: {
    isLogin: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      ftActive: 0,
      arrRouter: arrRouter,
      actChild: 0,
      showUser: false,
      showDetail: false,
      showLogin: false
    }
  },
  methods: {
    changeRouter(i) {
      this.ftActive = i
      let urlStr = arrRouter[i].url
      this.$router.push({path: urlStr})
    },
    changeUser() {
      this.showUser = !this.showUser
      this.showDetail = !this.showDetail
    },
    changeLogin() {
      this.showLogin = !this.showLogin
    },
    nowActive(num) {
      this.ftActive = num
    }
  },
  components: {
    'header-com': Header,
    'footer-com': Footer,
    'myuser-com': MyUser,
    'detail-com': Detail,
    'login-com': Login
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.user-enter-active, .user-leave-active
      transition: all 0.5s
.user-enter, .user-leave-to
      transform: translateX(-100%)
.login-enter-active, .login-leave-active
      transition: all 0.5s
.login-enter, .login-leave-to
      transform: translateX(100%)
</style>
