<template>
  <div>
    <button class="payment-button">決済</button>
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
.payment-button {
  color: #3f6060;
  background: #ffffff;
  border: 1px solid #707070;
}
@media screen and (min-width: 1024px) {
  .payment-button {
    font-size: 40px;
    height: 75px;
    width: 210px;
    color: #3f6060;
    background: #ffffff;
    border: 1px solid #707070;
    border-radius: 38px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .payment-button {
    font-size: 80px;
    font-size: 17px;
    height: 46.1px;
    width: 129.09px;
    border-radius: 38px;
  }
}

@media screen and (max-width: 767px) {
  .payment-button {
    font-size: 17px;
    height: 46.1px;
    width: 129.09px;
    border-radius: 38px;
  }
}
</style>
