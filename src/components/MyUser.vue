<template>
  <div class="myUser">
    <div class="userHeader">
      <div class="headImg" @click='toLogin'></div>
      <p>点击头像登录</p>
    </div>
    <div class="userContent">
      <div :class='actChild===index?"active":""' class='userItem' v-for='(item,index) in contArr' :key='index'>
        <i :class='item.iconClass'></i>
        <span>{{item.txt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const contArr = [
  {txt: '首页', iconClass: 'icon-shouye'},
  {txt: '历史记录', iconClass: 'icon-lishi'},
  {txt: '离线缓存', iconClass: 'icon-hauncun'},
  {txt: '我的收藏', iconClass: 'icon-xingxing2'}
]
export default {
  props: ['actChild'],
  data() {
    return {
      contArr: contArr
    }
  },
  methods: {
    toLogin() {
      this.$emit('cUser')
      this.$emit('cLogin')
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.myUser
  position: fixed
  width: 100%
  left: 0
  top: 0
  z-index: 10000
  width: 75%
  height: 100%
  background-color: rgb(245,245,245)
  .userHeader
    width: 100%
    height: 120px
    background-color: #fb7299
    background-image: url('../public/img/bili_drawerbg_logined.png')
    background-size: auto 90%
    background-repeat: no-repeat
    background-position: right bottom
    color: #fff
    overflow: hidden
    font-size: 12px
    .headImg
      margin: 18px
      width: 50px
      height: 50px
      background-image: url('../public/img/music_portrait_placeholder.png')
      background-size: 100%
    p
     padding-left: 10px
  .userContent
    .userItem
      color: #666
      height: 40px
      line-height: 40px
      font-size: 14px
      padding-left: 15px
      margin: 5px 0
      span
        padding-left: 20px
      &.active
        background-color: rgb(230,230,230)
        color: #fb7299
</style>
