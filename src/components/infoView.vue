<template>
  <div class="infoView">
    <div class="infomation">
      <div class="infoItem" v-for = '(item, index) in infomationMap' @click='toInfoChild(index)' :key='index'>
         <div :class='item.imgClass'></div>
         <p>{{item.txt}}</p>
      </div>
    </div>
    <div class="chatList">
      <div class="title">聊天列表</div>
      <div class="chatBox" v-for ='(item, index) in chatMap' :key = 'index'>
        <img src="@/public/img/ic_im_notice.png">
        <span>{{item.txt}}</span>
      </div>
    </div>
    <child-com :isLogin='isLogin' :childrenTitle='childrenTitle' v-if='childrenShow' @changeChildShow='toInfoChild' @changeLogin='changeLogin'></child-com>
  </div>
</template>

<script>
import infoChild from '@/components/infoChild'
const infomationMap = [
  {txt: '回复我的', imgClass: 'info'},
  {txt: '@我', imgClass: 'at'},
  {txt: '收到的赞', imgClass: 'good'},
  {txt: '系统通知', imgClass: 'notice'}
]
const chatMap = [
  {txt: '应援团消息助手'}
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
      infomationMap: infomationMap,
      chatMap: chatMap,
      childrenShow: false,
      childrenTitle: ''
    }
  },
  methods: {
    toInfoChild(i) {
      if (i !== 5) {
        this.childrenTitle = infomationMap[i].txt
      }
      this.childrenShow = !this.childrenShow
    },
    changeLogin() {
      this.$emit('changeLogin')
    }
  },
  components: {
    'child-com': infoChild
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.infoView
  height: 100%
  position: fixed
  left: 0
  right: 0
  top: 53px
  bottom: 45px
  background-color: rgb(245,245,245)
  .infomation
    display:  flex
    .infoItem
      flex: 1
      height: 60px
      background-color: #fff
      padding: 10px 0
      font-size: 12px
      text-align: center
      color: #888
      div
        display: inline-block
        width: 30px
        height: 30px
        background-size: 100%
        margin-top: 5px
        margin-bottom: 10px
        &.info
          background-image: url('../public/img/info.png')
        &.at
          background-image: url('../public/img/at.png')
        &.good
          background-image: url('../public/img/good.png')
        &.notice
          background-image: url('../public/img/ic_system_notice.png')
  .chatList
    background-color: #fff
    margin-top: 15px
    .title
      padding: 5px 10px
      font-size: 14px
      border-bottom: 1px solid #EEE
    .chatBox
      padding: 10px 15px
      display: table
      img
        width: 40px
        height: 40px
        margin-right: 10px
      span
        font-size: 14px
        display: table-cell
        vertical-align: middle
</style>
