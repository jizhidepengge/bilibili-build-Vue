<template>
  <div class="PlayView">
    <div class="videoBox" @click='isShowCon=!isShowCon'>
      <div class="controls" v-show='isShowCon'>
        <div class="bg" @click='firstPlay' v-if='bgShow'></div>
        <div class="backBtnBox">
          <div class="btnBack" @click = 'goBack'></div>
          <span class="avNum">{{av}}</span>
        </div>
        <div class="controlsbtnBox" ref='conBox'>
          <div class="btnStopStart" :class='isPlay?"":"Stop"' ref='startOrStop' @click='changePlay'></div>
          <div class="currentBox" ref='curBox'>
            <div class="currentBur" ref='curBur'></div>
            <div class="currentAfterBur" ref='afterBur'></div>
            <div class="currentBtn" ref='curBtn'></div>
          </div>
          <div class="time">
            <span class="now" ref='nowTime'>0</span> /
            <span class="all">{{sToM(videoObj.duration)}}</span></div>
          <div class="max" @click = 'toMax'></div>
        </div>
      </div>
      <video  ref='vid'  preload="auto" load="loaded" webkit-playsinline playsinline></video>
    </div>
    <div class="barrage">
      <input type="text" placeholder="发个友善的弹幕见证当下" @click='goRating'>
    </div>
    <div class="synopsis">
      <div class="title">
        <div><span :class="isSyno?'active':''">简介</span></div>
        <div><span :class="isSyno?'':'active'" @click='goRating'>评论</span></div>
      </div>
      <div class="content">
        <div class="contentBox">
          <synopsis-com v-if='isSyno' :videoObj='videoObj' :isLogin='isLogin'></synopsis-com>
        </div>
      </div>
    </div>
    <transition name='login'>
      <Login v-if='loginShow' @cLogin='changeLogin'></Login>
    </transition>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Synopsis from '@/components/Synopsis'
import {getPlayer} from '@/api/player.js'
export default {
  props: ['isLogin'],
  created() {
    let videoObj = this.$route.params.obj
    this.videoObj = videoObj
    this.av = 'av' + videoObj.aid
    getPlayer(videoObj.aid).then((res) => {
      let oVideo = this.$refs.vid
      oVideo.src = res.durl[0].url
      oVideo.addEventListener('timeupdate', () => {
        let allLong = oVideo.duration
        let nowLong = oVideo.currentTime
        this.$refs.nowTime.innerHTML = this.sToM(nowLong)
        let scale = nowLong / allLong
        this.$refs.afterBur.style.width = scale * 100 + '%'
        let w = this.$refs.curBox.offsetWidth - this.$refs.curBtn.offsetWidth
        this.$refs.curBtn.style.left = w * scale + 'px'
      })
      oVideo.addEventListener('ended', () => {
          this.isPlay = false
      })
      this.$refs.curBox.addEventListener('click', (ev) => {
        let allW = this.$refs.curBox.offsetWidth
        let scale = (ev.pageX - 50) / allW
        this.$refs.vid.currentTime = scale * this.videoObj.duration
        this.$refs.afterBur.style.width = scale * 100 + '%'
        let w = this.$refs.curBox.offsetWidth - this.$refs.curBtn.offsetWidth
        this.$refs.curBtn.style.left = w * scale + 'px'
      })
      this.$refs.conBox.onclick = function(ev) {
        ev.cancelBubble = true
        ev.stopPropagation()
      }
    })
  },
  data() {
    return {
      av: '',
      isSyno: true,
      videoObj: {},
      loginShow: false,
      bgShow: true,
      isPlay: true,
      isShowCon: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    changeLogin() {
      this.loginShow = !this.loginShow
    },
    goRating() {
      if (!this.isLogin) {
        this.changeLogin()
      } else {
        this.isSyno = false
      }
    },
    firstPlay() {
      this.$refs.vid.play()
      this.bgShow = false
    },
    sToM(t) {
      let s = parseInt(t % 60)
      let m = parseInt(t / 60)
      if (s < 10) {
        s += ''
        s = 0 + s
      }
      let str = m + ':' + s
      return str
    },
    changePlay() {
      if (this.isPlay) {
        this.$refs.vid.pause()
        this.isPlay = false
      } else {
        this.$refs.vid.play()
        this.isPlay = true
      }
    },
    toMax() {
      this.$refs.vid.webkitRequestFullScreen()
    }
  },
  components: {
    'synopsis-com': Synopsis,
    Login
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.PlayView
  font-size: 0
  background-color: #fff
  .videoBox
    position: relative
    .controls
      box-shadow: 0px 0px 150px #666 inset
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      .bg
        position: absolute
        width: 100%
        height: 100%
        z-index: 2
        background-color: #666
        background-image: url('../public/img/ic_tv_play.png')
        background-repeat: no-repeat
        background-position: center
      .backBtnBox
        position: absolute
        z-index: 3
        top: 15px
        left: 15px
        color: #fff
        font-size: 14px
        height: 20px
        line-height: 20px
        .btnBack
          display: inline-block
          width: 20px
          height: 20px
          background-position: center
          background-size: 150%
          background-image: url('../public/img/left.png')
        span
          display: inline-block
          line-height: 20px
          vertical-align: top
          margin-left: 10px
      .controlsbtnBox
        height: 40px
        width: 100%
        position: absolute
        bottom: 0
        .btnStopStart
          width: 30px
          height: 30px
          margin-top: 5px
          background-image: url('../public/img/stop.png')
          background-size: 60%
          background-repeat: no-repeat
          background-position: center
          &.Stop
            background-image: url('../public/img/开始.png')
        .currentBox
          position: absolute
          height: 20px
          left: 50px
          right: 100px
          top: 10px
          .currentBur
            background-color: #AAA
            height: 2px
            width: 100%
            position: absolute
            top: 9px
            border-radius: 4px
          .currentBtn
            position: absolute
            top: 5px
            height: 10px
            width: 14px
            background-image: url('../public/img/小电视.png')
            background-size: 100%
            background-repeat: no-repeat
            background-position: center
          .currentAfterBur
            background-color: #fb7299
            height: 4px
            width: 0%
            position: absolute
            top: 8px
            border-radius: 4px
      .time
        position: absolute
        right: 30px
        color: #fff
        top: 15px
        font-size: 12px
      .max
        position: absolute
        width: 20px
        height: 20px
        top: 10px
        right: 0px
        background-image: url('../public/img/全屏.png')
        background-size: 70%
        background-position: center
        background-repeat: no-repeat
    video
      width: 100%
  .barrage
    width: 100%
    height: 32px
    background-color: #444
    text-align: center
    input
      width: 90%
      height: 24px
      margin-top: 4px
      box-sizing: border-box
      outline: none
      border: 0
      border-radius: 40px
      padding-left: 20px
      font-size: 12px
      background-color: #AAA
  .synopsis
    width: 100%
    line-height: 30px
    text-align: center
    .title
      color: #777
      font-size: 12px
      width: 100%
      height: 30px
      display: flex
      -moz-box-shadow: 0px 2px 5px #EEE
      box-shadow: 0px 2px 5px #EEE
      div
        flex: 1
        span
          display: inline-block
          height: 100%
          &.active
            color: #fb7299
            border-bottom: 2px solid #fb7299
  .login-enter-active, .login-leave-active
      transition: all 0.5s
  .login-enter, .login-leave-to
      transform: translateX(100%)
</style>
