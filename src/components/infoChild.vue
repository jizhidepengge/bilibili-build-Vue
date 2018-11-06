<template>
  <div class="infoChild">
    <header-com :childrenTitle='childrenTitle' @changeChildShow='changeChildShow'></header-com>
    <noLogin-com :isLogin='isLogin' @changeLogin='changeLogin' v-if='isLogin===false'></noLogin-com>
    <child-com v-if='isLogin===true'></child-com>
  </div>
</template>

<script>
import childHeader from '@/widget/childHeader'
import noLoginBody from '@/widget/noLoginBody'
import childBody from '@/components/childBody'
export default {
  props: ['isLogin', 'childrenTitle'],
  components: {
    'header-com': childHeader,
    'noLogin-com': noLoginBody,
    'child-com': childBody
  },
  methods: {
    changeChildShow() {
      this.$emit('changeChildShow', 5)
    },
    changeLogin() {
      this.$emit('changeLogin')
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.infoChild
  position: fixed
  z-index: 900
  width: 100%
  top: 0
</style>
