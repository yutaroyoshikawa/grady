<template>
  <div>
    <div class="wrap">
      <go-to-watch-drawer />
    </div>
    <div>
      <loading-mark />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GoToWatchDrawer from '../layouts/drawers/goToWatchDrawer.vue'
import LoadingMark from '../components/marks/loadingMark.vue'

export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer,
    'loading-mark': LoadingMark
  }
})
</script>

<style lang="scss" scoped></style>
