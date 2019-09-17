<template>
  <div>
    <div class="wrap">
      <search />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Search from '~/layouts/search.vue'

export default Vue.extend({
  components: {
    search: Search
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: #0a2e41;
  display: flex;
  justify-content: center;
}
</style>
