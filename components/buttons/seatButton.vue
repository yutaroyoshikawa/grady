<template>
  <button class="seatButton">
    A1
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.seatButton {
  color: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 20px;
}

@media screen and (min-width: 1024px) {
  .seatButton {
    height: 69px;
    width: 69px;
    font-size: 31px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .seatButton {
    height: 58px;
    width: 58px;
    font-size: 25px
  }
}

@media screen and (min-width: 300px) {
  .seatButton {
    height: 35px;
    width: 35px;
    font-size: 13px;
  }
}
</style>
