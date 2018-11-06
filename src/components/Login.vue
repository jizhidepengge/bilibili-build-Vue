<template>
  <div class="login">
    <div class="loginHeader">
      <div class="btn" @click='$emit("cLogin")'></div>
      <span>登录</span>
    </div>
    <div class="logo">
      <div class="leftImg" ref='left'></div>
      <div class="midImg"></div>
      <div class="rightImg" ref='right'></div>
    </div>
    <div class="inpBox">
      <div class="box" ref='box1'>
        <img src="../public/img/login_people.png">
        <input type="text" placeholder="你的手机号/邮箱" ref='user'>
      </div>
    </div>
    <div class="inpBox">
      <div class="box" ref='box2'>
        <img src="../public/img/login_lock.png">
        <input type="password" placeholder="请输入密码" ref='passwd'>
      </div>
    </div>
    <div class="btnBox">
      <button @click='fnLogin'>注册账号</button>
      <button @click='fnLogin'>登录</button>
      <p v-if = 'showDanger'>登录服务器维护中!</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let userDom = this.$refs.user
    let box1 = this.$refs.box1
    userDom.addEventListener('focus', () => {
      box1.style.borderBottom = '1px solid #fb7299'
    })
    userDom.addEventListener('blur', () => {
      box1.style.borderBottom = '1px solid #CCC'
    })
    let pwdDom = this.$refs.passwd
    let box2 = this.$refs.box2
    pwdDom.addEventListener('focus', () => {
      box2.style.borderBottom = '1px solid #fb7299'
      this.$refs.left.className = 'leftImg action'
      this.$refs.right.className = 'rightImg action'
    })
    pwdDom.addEventListener('blur', () => {
      box2.style.borderBottom = '1px solid #CCC'
      this.$refs.left.className = 'leftImg'
      this.$refs.right.className = 'rightImg'
    })
  },
  data() {
    return {
      showDanger: false
    }
  },
  methods: {
    fnLogin() {
      setTimeout(() => {
        this.showDanger = true
      }, 1000)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

.login
  position: fixed
  left: 0
  top: 0
  bottom: 0
  right: 0
  z-index: 9999
  background-color: rgb(250,250,250)
  .loginHeader
    height: 53px
    background-color: #fb7299
    color: #fff
    font-size: 14px
    display: flex
    .btn
      height: 53px
      width: 53px
      background-image: url('../public/img/left.png')
      background-size: 60%
      background-repeat: no-repeat
      background-position: center
      flex: 0 0 53px
    span
      height: 53px
      line-height: 53px
  .logo
    padding-top: 30px
    background-color: rgb(245,245,245)
    height: 70px
    display: flex
    .leftImg
      flex: 1
      background-size: 100%
      background-image: url('../public/img/login_1.png')
      height: 100%
      &.action
        background-image: url('../public/img/login_1_hide.png')
    .midImg
      background-size: auto 100%
      background-repeat: no-repeat
      background-position: center
      height: 40px
      flex: 2
      background-image: url('../public/img/bili_logo.png')
    .rightImg
      flex: 1
      background-size: 100%
      height: 100%
      background-image: url('../public/img/login_2.png')
      &.action
        background-image: url('../public/img/login_2_hide.png')
  .inpBox
    margin-top: 20px
    text-align: center
    .box
      display: inline-block
      padding: 5px 0
      border-bottom: 1px solid #CCC
      img
        width: 20px
        vertical-align: bottom
        margin-right: 15px
      input
        background-color: transparent
        border: none
        outline: none
  .btnBox
    margin-top: 10px
    text-align: center
    button
      border-radius: 3px
      padding: 5px 10px
      color: #fff
      width: 100px
      background-color: #fb7299
      outline: none
      border: 1px solid #fb7299
      &:first-child
        background-color: transparent
        color: #fb7299
  p
    margin-top: 20px
    color: #fb7299
</style>
