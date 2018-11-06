<template>
  <div class="indexView">
    <div class="navContainer" ref = 'navScroll'>
      <div class="nav" ref = 'nav'>
        <div class="navBox" v-for="(item, index) in TopList" :key='index' @click='changeActNum(index)' :class='index===activeNavNum?"active":""' ref='navBox'>
          {{item.title}}
        </div>
      </div>
    </div>
    <ibody-com v-if='showIBody' :activeNavNum='activeNavNum'></ibody-com>
  </div>
</template>

<script>
import {TopList} from '@/public/js/listMap.js'
import BScroll from 'better-scroll'
import IndexBody from './indexBody'
const $ = require('jquery')
export default {
  created() {
    this.$nextTick(() => {
      let aNavBox = this.$refs.navBox
      let w = 0
      for (var i = 0; i < aNavBox.length; i++) {
        w += parseInt($(aNavBox[i]).outerWidth(true))
      }
      this.$refs.nav.style.width = w + 'px'
      let domNav = this.$refs.navScroll
      this.btScroll = new BScroll(domNav, {
        click: true,
        scrollX: true
      })
    })
    this.$emit('nowActive', 0)
  },
  data() {
    return {
      TopList: TopList,
      activeNavNum: 0,
      showIBody: true
    }
  },
  methods: {
    changeActNum(i) {
      this.activeNavNum = i
      this.showIBody = false
      setTimeout(() => {
        this.showIBody = true
      }, 50)
    }
  },
  components: {
    'ibody-com': IndexBody
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.indexView
  .navContainer
    overflow: hidden
    width: 100%
    border-bottom: 1px solid #EEE
    .nav
      width: 480px
      .navBox
        display: inline-block
        padding: 10px 6px
        margin: 0 6px
        font-size: 13px
        &.active
          color: red
          border-bottom: 2px solid #fb7299
</style>
