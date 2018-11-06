<template>
  <div id="app">
    <router-view :isLogin='isLogin'/>
  </div>
</template>

<script>

// const arrActiveChild = ['index', 'history', 'download', 'collect']
export default {
  name: 'App',
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
