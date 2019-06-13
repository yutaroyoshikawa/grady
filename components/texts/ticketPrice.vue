<template>
  <div>
    <p class="wrap">
      ¥{{ price ? price.toLocaleString() : 0 }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    price: Number
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  text-align: right;
  display: inline-block;
  color: #fff;
  margin: 0;
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 170px;
    font-size: 40px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 170px;
    font-size: 40px;
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    width: 100px;
    font-size: 23px;
  }
}
</style>
