<template>
  <div class="noLoginBody">
      <div class="box">
          <ul>
            <li><img src="../public/img/img_home_no_login.png">
            <li><span>您还没有登录哦~</span></li>
            <li><span>赶快登录打开新世界的大门</span></li>
            <li><div class="btn" @click='changeLogin'>登录</div></li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  methods: {
    changeLogin() {
      this.$emit('changeLogin')
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.noLoginBody
  position: fixed
  z-index: 999
  top: 53px
  bottom: 46px
  left: 0
  right: 0
  background-color: rgb(250,250,250)
  text-align: center
  .box
    width: 100%
    text-align: center
    img
      margin-top: 100px
      width: 70%
      margin-bottom: 20px
    span
      font-size: 14px
      color: #888
    .btn
      margin-top: 20px
      display: inline-block
      width: 130px
      height: 40px
      line-height: 40px
      text-align: center
      background-color: #fb7299
      color: #fff
      border-radius: 4px
</style>
