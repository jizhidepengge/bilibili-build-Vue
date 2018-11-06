<template>
  <div class="dynView">
    <login-com v-if='isLogin ===false' @changeLogin='changeLogin'></login-com>
  </div>
</template>

<script>
import noLoginBody from '@/widget/noLoginBody'
export default {
  props: ['isLogin'],
  components: {
    'login-com': noLoginBody
  },
  methods: {
    changeLogin() {
      this.$emit('changeLogin')
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
