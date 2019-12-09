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
    color: #fff;
  }
}
@media screen and (min-width: 1024px) {
  .wrap {
    span {
      font-size: 25px;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    span {
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 768px) {
  .wrap {
    span {
      font-size: 14px;
    }
  }
}
</style>
