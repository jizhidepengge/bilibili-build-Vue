<template>
  <div class="Synopsis">
    <div class="author">
      <div class="authorInfo">
        <img :src="videoObj.face">
        <span>{{videoObj.author}}</span>
      </div>
      <div class="btn">
        <div class="btnBox" @click ='care'>
          <b>+</b>
          <span>关注</span>
        </div>
      </div>
    </div>
    <div class="videoDetail" @click='changeShowMore'>
      <div class="left">
        <div class="videoTitle" :class='isShowMore?"":"hidden"'>{{videoObj.title}}</div>
        <div class="count">
          <i class='icon-bofangnum'></i>
          <span>{{videoObj.play}}</span>
          <i class='icon-danmu'></i>
          <span>{{videoObj.video_review}}</span>
          <span>{{createTime}}</span>
        </div>
        <div class="syno" v-if='isShowMore&&videoObj.description.length>1'><pre>{{videoObj.description}}</pre></div>
      </div>
      <div class="right">
        <div class="btnMore">
          <i :class='isShowMore?"icon-shangjiantou":"icon-xiajiantouo"'></i>
        </div>
      </div>
    </div>
    <div class="btnLike">
      <div class="btnBox" @click='toLike(0)'>
        <i class="icon-zan"></i><p>{{videoObj.stat.like}}</p>
      </div>
      <div class="btnBox" @click='toLike(1)'>
        <i class="icon-cai"></i><p>差评</p>
      </div>
      <div class="btnBox" @click='toLike(2)'>
        <i class="icon-yingbi"></i><p>{{videoObj.stat.coin}}</p>
      </div>
      <div class="btnBox" @click='toLike(3)'>
        <i class="icon-xingxing"></i><p>{{videoObj.stat.favorite}}</p>
      </div>
      <div class="btnBox" @click='toLike(4)'>
        <i class="icon-zhuanfa"></i><p>{{videoObj.stat.share}}</p>
      </div>
    </div>
    <div class="dynamic" >
      <div class="dynBox" v-for='(item, index) in arrDynamic' :key='index'>
        {{item}}
      </div>
    </div>
    <div class="more" v-for='(item, index) in dataMore' :key='index' @click='toMore'>
      <div class="moreBox">
        <div class="moreLeft">
          <img :src="item.pic">
        </div>
        <div class="moreRight">
          <div class="title">{{item.title}}</div>
          <div class="tname">{{item.tname}}</div>
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
export default {
  created() {
    this.axios.get('/api/moreData')
      .then((res) => {
        this.dataMore = res.data
      })
  },
  props: {
    videoObj: {
      type: Object,
      required: true
    },
    isLogin: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isShowMore: false,
      dataMore: [],
      loginShow: false
    }
  },
  methods: {
    changeShowMore() {
      this.isShowMore = !this.isShowMore
    },
    changeLogin() {
      this.loginShow = !this.loginShow
    },
    toLike(index) {
      if (!this.isLogin) {
        this.changeLogin()
      }
    },
    care() {
      if (!this.isLogin) {
        this.changeLogin()
      }
    },
    toMore() {
      if (!this.isLogin) {
        this.changeLogin()
      }
    }
  },
  computed: {
    createTime() {
      let t = this.videoObj.create
      let res = t.split(' ')[0]
      return res
    },
    arrDynamic() {
      let arr = this.videoObj.dynamic.split('#')
      let arrRes = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          arrRes.push(arr[i])
        }
      }
      return arrRes
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.Synopsis
  .author
    display: flex
    line-height: 50px
    vertical-align: middle
    .authorInfo
      flex: 1
      text-align: left
      padding-left: 15px
      img
        display: inline-block
        margin-right: 10px
        height: 30px
        width: 30px
        border-radius: 50%
        border: 1px solid #CCC
        vertical-align: middle
      span
        vertical-align: middle
        display: inline-block
        line-height: 30px
        font-size: 13px
    .btn
      flex: 1
      text-align: right
      line-height: 50px
      .btnBox
        display: inline-block
        padding: 2px 13px
        margin-top: 12px
        margin-right: 10px
        overflow: hidden
        height: 20px
        font-size: 13px
        color: #fff
        background-color: #fb7299
        border-radius: 2px
        b
          display: inline-block
          font-size: 16px
          line-height: 20px
          vertical-align: top
        span
          display: inline-block
          line-height: 20px
          vertical-align: top
  .videoDetail
    width: 100%
    overflow: hidden
    .left
      float: left
      width: 90%
      padding: 0 10px
      text-align: left
      box-sizing: border-box
      .videoTitle
        font-size: 14px
        line-height: 24px
        color: #555
        &.hidden
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
      .count
        color: #888
        i
          font-size: 14px
          vertical-align: middle
        span
          display: inline-block
          margin-right: 10px
          margin-left: 3px
          font-size: 12px
          vertical-align: middle
      .syno
        margin-top: 3px
        padding-left: 2px
        font-size: 12px
        color: #888
        line-height: 16px
    .right
      float: right
      width: 10%
      font-size: 14px
      color: #BBB
  .btnLike
    display: flex
    margin-top: 8px
    padding-bottom: 8px
    border-bottom: 1px solid #EEE
    .btnBox
      flex: 1
      color: #666
      i
        font-size: 20px
        vertical-align: middle
      p
        font-size: 12px
        line-height: 12px
  .dynamic
    padding: 10px
    padding-left: 10px
    font-size: 13px
    text-align: left
    .dynBox
      line-height: 13px
      display: inline-block
      padding: 7px 10px
      margin-right: 10px
      border-radius: 30px
      background-color: #EEE
  .more
    padding: 10px
    .moreBox
      display: flex
      .moreLeft
        flex: 1
        overflow: hidden
        img
          width: 100%
      .moreRight
        box-sizing: border-box
        position: relative
        padding-left: 10px
        flex: 2
        font-size: 13px
        text-align: left
        .title
          line-height: 16px
        .tname
          position: absolute
          bottom: 5px
          font-size: 12px
          color: #999
  .login-enter-active, .login-leave-active
      transition: all 0.5s
  .login-enter, .login-leave-to
      transform: translateX(100%)
</style>
