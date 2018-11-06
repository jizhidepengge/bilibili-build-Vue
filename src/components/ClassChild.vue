<template>
  <div class="ClassChild">
    <div class="header">
      <div class="btnBack" @click='comeBack'></div>
      <span>{{mapJson.title}}</span>
    </div>
    <div class="nav" ref = 'nav'>
      <div class="navContainer" ref = 'navC'>
        <div class="navBox" v-for='(item, index) in mapJson.topTList' :key='index' @click='changeNav(index)' ref='navBox'>
          <span :class="navActiveNum === index?'active':''">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="bodyScroll" ref='bodyScroll'>
      <div class="childBody">
        <div class="title">{{mapJson.topTList[navActiveNum].name}}</div>
        <div class="videoList">
          <div class="videoBox" v-for="(item, index) in showData" :key='index' @click='goPlay(item)'>
            <div class="imgBox">
              <img :src='item.pic' ref='aImg'>
            </div>
            <div class="right">
             <div class="videoTitle">{{item.title}}</div>
              <div class="bottomBox">
                <div class="aut">{{item.author}}</div>
                <div class="view">
                  <i class="icon-bofangnum"></i>
                  <span>{{item.stat.view}}</span>
                  <i class="icon-danmu"></i>
                  <span>{{item.video_review}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getAniList} from '@/api/animation'
export default {
  props: {
    mapJson: {
      type: Object,
      required: true
    }
  },
  created() {
    for (var i = 0; i < this.mapJson.topTList.length; i++) {
      let tid = this.mapJson.topTList[i].tid
      getAniList(tid, this.mapJson)
        .then((res) => {
          this.allData.push(res.data.archives)
          this.showData = this.allData[0]
        })
    }
  },
  mounted() {
    let aNavBox = this.$refs.navBox
    let w = 0
    let maxW = window.innerWidth
    for (var i = 0; i < aNavBox.length; i++) {
      w += aNavBox[i].offsetWidth
    }

    this.$refs.navC.style.width = w + 'px'
    if (w > maxW) {
      let oNav = this.$refs.nav
      this.navScroll = new BScroll(oNav, {
        click: true,
        scrollX: true
      })
    }

    this.$nextTick(() => {
      setTimeout(() => {
        let h = window.innerWidth * 0.5 / 2
        for (var i = 0; i < this.$refs.aImg.length; i++) {
          this.$refs.aImg[i].style.height = h + 'px'
        }
        let oBodyScroll = this.$refs.bodyScroll
        this.bodyScroll = new BScroll(oBodyScroll, {
          click: true
        })
      }, 500)
    })
  },
  data() {
    return {
      navActiveNum: 0,
      allData: [],
      showData: {}
    }
  },
  methods: {
    comeBack() {
      this.$emit('changeChild')
    },
    changeNav(i) {
      this.navActiveNum = i
      this.showData = this.allData[i]
    },
    goPlay(obj) {
      this.$router.push({name: 'PlayView', params: {obj: obj}})
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.ClassChild
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: #fff
  z-index: 100
  .header
    width: 100%
    height: 53px
    background-color: #fb7299
    overflow: hidden
    .btnBack
      display: inline-block
      margin-top: 8px
      height: 45px
      width: 45px
      background-image: url('../public/img/left.png')
      background-size: 75%
      background-position: center
    span
      display: inline-block
      margin-left: 10px
      margin-top: 8px
      height: 45px
      vertical-align: top
      line-height: 45px
      color: #fff
  .nav
    height: 30px
    background-color: #fb7299
    width: 100%
    .navContainer
      white-space: nowrap
      .navBox
        display: inline-block
        padding: 0 10px
        font-size: 12px
        color: #EEE
        line-height: 30px
        text-align: center
        span
          display: inline-block
          box-sizing: border-box
          height: 30px
          line-height: 30px
          &.active
            border-bottom: 2px solid #fff
            color: #fff
  .bodyScroll
    position: fixed
    top: 83px
    bottom: 0
    left: 0
    right: 0
    overflow: hidden
    background-color: rgb(245,245,245)
    -moz-box-shadow: 0px 5px 15px rgba(200,200,200,.7) inset
    box-shadow: 0px 5px 15px rgba(200,200,200,.7) inset
    .childBody
      padding: 0 15px
      .title
        padding: 15px 0
        font-size: 13px
      .videoList
        .videoBox
          display: flex
          margin-bottom: 10px
          .imgBox
            font-size: 0
            display: inline-block
            width: 45%
            border-radius: 3px
            overflow: hidden
            img
              width: 100%
          .right
            flex: 1
            position: relative
            padding: 3px 0
            padding-left: 10px
            .videoTitle
              font-size: 14px
              line-height: 16px
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 2
              -webkit-box-orient: vertical
            .bottomBox
              position: absolute
              bottom: 0
              font-size: 12px
              color: #999
              .aut
                margin-bottom: 3px
              .view
                i
                  font-size: 13px
                  vertical-align: middle
                span
                  vertical-align: middle
                  margin-right: 8px
</style>
