<template>
  <div class="classView">
    <div class="myClass">
      <div class="title">我的频道</div>
      <div class="toLoginBox">
        <p>登录后查看已订阅的频道哦~</p>
        <div class="btn" @click='$emit("changeLogin")'>登录</div>
      </div>
    </div>
    <div class="classTab">
      <div class="classBox" v-for='(item, index) in listMap' :key='index' @click='goChild(item)'>
        <img :src=arrTabImg[index]>
        <p>{{item.title}}</p>
      </div>
    </div>
    <transition name='child'>
     <classchild-com :mapJson='mapJson' v-if='showChild' @changeChild='changeChild'></classchild-com>
    </transition>
  </div>
</template>

<script>
import {TopList} from '@/public/js/listMap'
import ClassChild from '@/components/ClassChild'
const arrTabImg = [ require('../public/img/视频.png'),
                    require('../public/img/电视.png'),
                    require('../public/img/国创.png'),
                    require('../public/img/耳机.png'),
                    require('../public/img/扇子02.png'),
                    require('../public/img/飞碟.png'),
                    require('../public/img/游戏 游戏厅 游戏机 游戏手柄 面性.png'),
                    require('../public/img/魔法棒.png'),
                    require('../public/img/鬼畜.png')
                  ]
export default {
  created() {
    this.$emit('nowActive', 1)
  },
  data() {
    return {
      listMap: TopList,
      arrTabImg: arrTabImg,
      mapJson: {},
      showChild: false
    }
  },
  methods: {
    goChild(json) {
      this.mapJson = json
      this.showChild = true
    },
    changeChild() {
      this.showChild = false
    }
  },
  components: {
    'classchild-com': ClassChild
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.classView
  .myClass
    padding: 10px
    border-bottom: 1px solid #EEE
    .title
      font-size: 14px
      font-weight: 700
    .toLoginBox
      margin-top: 15px
      text-align: center
      p
       font-size: 12px
       color: #999
      .btn
        display: inline-block
        padding: 5px 15px
        margin-top: 15px
        margin-bottom: 10px
        font-size: 13px
        border-radius: 4px
        color: white
        background-color: #fb7299
  .classTab
    overflow: hidden
    .classBox
      float: left
      width: 25%
      text-align: center
      margin-top: 15px
      margin-bottom: 15px
      img
        width: 40px
        height: 40px
      p
      font-size: 12px
      letter-spacing: 2px
      line-height: 14px
  .child-enter-active, .child-leave-active
    transition: all 0.5s
  .child-enter, .child-leave-to
    transform: translate(100%)
</style>
