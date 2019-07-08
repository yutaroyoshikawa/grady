<template>
  <div>
    <div class="wrap">
      <span>{{ year | filterYear }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    year: String
  },
  filters: {
    filterYear: function(date: string) {
      return date.slice(0, 4)
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  span {
    font-size: 25px;
    color: #fff;
  }
}
</style>
