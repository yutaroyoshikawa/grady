<template>
  <div>
    <div class="wrap">
      <go-to-watch-drawer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GoToWatchDrawer from '../layouts/drawers/goToWatchDrawer.vue'

export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer
  }
})
</script>

<style lang="scss" scoped></style>
