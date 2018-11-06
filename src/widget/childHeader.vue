<template>
  <div class="childHeader">
    <div class="comeBackBtn" @click='changeChildShow'></div>
    <div class="childTitle">{{childrenTitle}}</div>
  </div>
</template>

<script>

export default {
  props: ['childrenTitle'],
  methods: {
    changeChildShow() {
      this.$emit('changeChildShow')
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.childHeader
  height: 53px
  background-color: #fb7299
  .comeBackBtn
    background-image: url('../public/img/left.png')
    height: 100%
    width: 53px
    background-size: 70%
    background-position: center
    display: inline-block
  .childTitle
    margin-left: 10px
    margin-top: 2px
    color: #fff
    line-height: 53px
    vertical-align: top
    height: 100%
    display: inline-block
</style>
