<template>
  <div class="detail" @click='cUser'>
  </div>
</template>

<script>

export default {
  methods: {
    cUser() {
      this.$emit('cUser')
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.detail
  position: fixed
  z-index: 9999
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-color: rgba(130,130,130,.5)
</style>
