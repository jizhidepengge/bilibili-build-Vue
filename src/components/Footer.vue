<template>
  <div class="footer">
    <div class="router" :class='ftActive === index?"active":""' v-for='(item, index) in arrRouter' :key='index' @click='changeRouter(index)'>
      <i class='icon' :class='item.icon'></i>
      <p>{{item.txt}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['ftActive', 'arrRouter'],
  data() {
    return {

    }
  },
  methods: {
    changeRouter(i) {
      this.$emit('cRouter', i)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.footer
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 45px
  text-align: center
  display: flex
  border-top: 1px solid #DDD
  background: #FFF
  .router
    flex: 1
    color: #888
    &.active
      color: #fb7299
    i
      display: inline-block
      margin: 4px 0
      font-size: 20px
    p
      font-size: 12px
</style>
