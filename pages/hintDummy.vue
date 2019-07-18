<template>
  <div class="wrapper">
    <div>
      <hint-drawer :hints="demo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HintDrawer from '~/layouts/drawers/hintDrawer.vue'

export default Vue.extend({
  components: {
    'hint-drawer': HintDrawer
  },
  data() {
    return {
      demo: ['hoge', '', '']
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #0d0d36;
  width: 100vw;
  height: 100vh;

  div {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>
