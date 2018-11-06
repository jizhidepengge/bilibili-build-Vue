<template>
  <div class="search">
    <div class="searchHeader">
      <div class="inputBox">
        <input type="text" placeholder="暂未获得搜索api" v-model='inputVal'>
        <i class="icon-sousuo"></i>
      </div>
      <div class="comeBack" @click='$emit("cSearch")'>取消</div>
    </div>
    <div class="hotSearch">
      <div class="titleBox">
        <div class="title">大家都在搜</div>
        <div class="showMoreBtn" @click='isShow = !isShow'>{{isShow?'收起':'展开'}}</div>
      </div>
      <div class="searchBody" :class='isShow?"":"hidden"'>
        <div class="box" v-for='(item, index) in arrList' :key='index' @click='changeInp(item.keyword)'>
          {{item.keyword}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {AllSearch} from '@/api/ALLsearch'
export default {
  data() {
    return {
      arrList: AllSearch.list,
      inputVal: '',
      isShow: false
    }
  },
  methods: {
    changeInp(val) {
      this.inputVal = val
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.search
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  background-color: rgb(250,250,250)
  z-index: 9999
  .searchHeader
    width: 100%
    height: 40px
    overflow: hidden
    background-color: #fb7299
    display: flex
    .inputBox
      margin-left: 10px
      box-sizing: border-box
      flex: 4
      height: 26px
      margin-top: 7px
      background-color: #fff
      padding-left: 40px
      border-radius: 30px
      position: relative
      i
        position: absolute
        left: 10px
        top: 5px
        color: #CCC
      input
        color: #666
        padding-top: 2px
        box-sizing: border-box
        height: 26px
        border: 0
        outline: none
    .comeBack
      flex: 1
      text-align: center
      line-height: 40px
      color: #fff
      font-size: 14px
  .hotSearch
      .titleBox
        border-bottom: 1px solid #EEE
        position: relative
        font-size: 12px
        padding: 10px 10px
        flex: 5
        .title
          color:#333
        .showMoreBtn
          color: #CCC
          position: absolute
          right: 10px
          top: 10px
      .searchBody
        padding: 0 10px
        &.hidden
          height: 84px
          overflow: hidden
        .box
          margin-top: 10px
          padding: 10px 10px
          background-color: #EEE
          border-radius: 4px
          display: inline-block
          font-size: 12px
          margin-right: 10px
</style>
