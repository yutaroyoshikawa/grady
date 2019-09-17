<template>
  <div>
    <button class="paymentButton">
      支払う
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
.paymentButton {
  font-size: 40px;
  height: 85px;
  width: 391px;
  color: #0d0d36;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 60px;
}
</style>
