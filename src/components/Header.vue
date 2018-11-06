<template>
  <div class="header">
    <div class="headerBox">
      <div class="leftBox">
        <div class="btnBox" @click = 'cUser'>
          <div class="btnTab">
            <i class="icon-xuanxiang"></i>
          </div>
          <div class="headImgBox">
            <div class="headImg"></div>
          </div>
        </div>
      </div>
      <div class="middleBox">
        <img  v-show='ftActive === 0' src="../public/img/BILIBILI_LOGO.png">
        <span v-show='ftActive !== 0'>{{titleMap[ftActive]}}</span>
      </div>
      <div class="rightBox">
        <div class="download">
          <i class="iconfont icon-xiazai"></i>
        </div>
        <div class="seach">
          <i class="iconfont icon-sousuo" @click='changeSearch' ></i>
        </div>
      </div>
    </div>
    <Search v-if='isShowSearch' @cSearch='changeSearch'></Search>
  </div>
</template>

<script>
import Search from '@/components/Search'
const titleMap = ['', '频道', '动态', '消息']
export default {
  props: ['ftActive'],
  data() {
    return {
      titleMap: titleMap,
      isShowSearch: false
    }
  },
  methods: {
    cUser() {
      this.$emit('cUser')
    },
    changeSearch() {
      this.isShowSearch = !this.isShowSearch
    }
  },
  components: {
    Search
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.header
  width: 100%
  height: 53px
  background-color: #fb7299
  overflow: hidden
  i
    color: #fff
    font-size: 25px
  .headerBox
    height: 45px
    display: flex
    margin-top: 8px
    .leftBox
      flex: 2
      position: relative
      div
        line-height: 45px
        display: inline-block
      .btnTab
        position: absolute
        height: 100%
        left: -12px
        top: 0px
        i
          font-size: 18px
          vertical-align: middle
      .headImgBox
        height: 100%
        width: 25px
        margin-left: 20px
        .headImg
          display: inline-block
          background: url('../public/img/music_portrait_placeholder.png')
          background-size: 100%
          width: 25px
          height: 25px
          border-radius: 50%
          vertical-align: middle
    .middleBox
      flex: 1
      height: 100%
      text-align: center
      line-height: 45px
      img
        height: 60%
        margin-top: 7px
      span
        font-size: 16px
        color: #fff
        margin-right: 15px
        font-weight: 700
    .rightBox
      text-align: right
      padding-right: 10px
      flex: 2
      i
        vertical-align: middle
      div
        line-height: 45px
        margin-left: 12px
        display: inline-block
        &:first-child
          margin-left: 0
</style>
