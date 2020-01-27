<template>
  <div>
    <div class="wrap">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.wrap {
  .logo-wrap {
    width: 76px;
    height: 76px;
    position: absolute;
    top: 60px;
    left: 100px;
    z-index: 100;
  }
}
</style>
