<template>
  <div class="indexBody" ref='iBody'>
    <div class="indexBodyBox">
      <div class="videoBox" v-for='(item,index) in arrData' :key='index' @click='goPlay(item)' >
          <div class="imgBox" ref='imgBox'>
            <img v-lazy="item.pic">
            <div class="detail">
              <div class="insideBox">
                  <i class="icon-bofangnum"></i>
                  <span>{{item.play}}</span>
                  <i class="icon-danmu"></i>
                  <span>{{item.video_review}}</span>
                  <span class="time">{{sToM(item.duration)}}</span>
              </div>
            </div>
          </div>
          <div class="titleBox"><span class="title">{{item.title}}</span></div>
          <span class="type">{{item.tname}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {TopList} from '@/public/js/listMap.js'
import {getAniList} from '@/api/animation'
import BScroll from 'better-scroll'
export default {
  props: {
    activeNavNum: {
      type: Number,
      required: true
    }
  },
  mounted() {
      let tid = TopList[this.activeNavNum].topTList[2].tid
      let id = TopList[this.activeNavNum].id
      getAniList(tid, id).then((res) => {
        this.arrData = res.data.archives
        this.$nextTick(() => {
          let aImgBox = this.$refs.imgBox
          let h = aImgBox[0].offsetWidth / 2
          for (var i = 0; i < aImgBox.length; i++) {
            aImgBox[i].style.height = h + 'px'
          }
          let domIBody = this.$refs.iBody
          this.iBodyScroll = new BScroll(domIBody, {
            click: true
          })
        })
      })
  },
  data() {
    return {
        arrData: []
    }
  },
  methods: {
    goPlay(obj) {
      this.$router.push({name: 'PlayView', params: {obj: obj}})
    },
    sToM(t) {
      let s = t % 60
      let m = parseInt(t / 60)
      if (s < 10) {
        s += ''
        s = 0 + s
      }
      let str = m + ':' + s
      return str
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.indexBody
  overflow: hidden
  background-color: rgb(240,240,240)
  position: fixed
  top: 87px
  bottom: 46px
  .indexBodyBox
    .videoBox
      display: inline-block
      margin: 0 2%
      margin-top: 10px
      padding-bottom: 8px
      border-radius: 4px
      overflow: hidden
      width: 45%
      background-color: #fff
      text-align: center
      .imgBox
        position: relative
        width: 100%
        height: 70px
        overflow: hidden
        img
          width: 100%
        &::nth-child(even)
          float: right
        .detail
          position: absolute
          top: 0
          width: 100%
          height: 100%
          z-index: 2
          -moz-box-shadow: 0px -10px 40px 0px #666 inset
          box-shadow: 0px -10px 40px 0px #666 inset
          .insideBox
            position: absolute
            padding-left: 5px
            text-align: left
            font-size: 12px
            width: 100%
            bottom: 5px
            color: #fff
            i
              font-size: 14px
              vertical-align: bottom
            span
              margin-bottom: 1px
              display: inline-block
              vertical-align: bottom
            .time
              position: absolute
              right: 10px
              bottom: 0px
      .titleBox
        box-sizing: border-box
        padding: 0 5%
        margin-top: 6px
        .title
          display: inline-block
          width: 100%
          height: 32px
          font-size: 13px
          line-height: 16px
          overflow: hidden
          text-overflow: ellipsis
          text-align: left
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
      .type
        margin-top: 10px
        padding-left: 5%
        width: 100%
        display: inline-block
        text-align: left
        font-size: 12px
        color: #999
</style>
