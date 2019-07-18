<template>
  <div>
    <button class="pay-button">
      クレジットカード
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.pay-button {
  color: #0d0d36;
  background: #ffffff;
  border: 1px solid #707070;
}
@media screen and (min-width: 1024px) {
  .pay-button {
    font-size: 40px;
    height: 85px;
    width: 391px;
    border-radius: 60px;
  }
}

@media screen and (max-width: 767px) {
  .pay-button {
    font-size: 21px;
    height: 21px;
    width: 180px;
    border-radius: 21px;
  }
}
</style>
