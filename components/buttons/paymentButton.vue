<template>
  <div>
    <button class="paymentButton">
      決済
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
  height: 75px;
  width: 210px;
  color: #3f6060;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 38px;
}
</style>
