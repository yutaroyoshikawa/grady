<template>
  <div>
    <div class="wrap">
      <div class="drawer-wrap">
        <seats-drawer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SeatsDrawer from '~/layouts/drawers/seatsDrawer.vue'
export default Vue.extend({
  components: {
    'seats-drawer': SeatsDrawer
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: #0d0d36;
  color: #fff;
}
</style>
