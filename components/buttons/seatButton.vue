<template>
  <div>
    <button class="seat-button">
      A1
    </button>
  </div>
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
.seat-button {
  color: #fff;
  border: 3px solid #fff;
  border-radius: 20px;
}

@media screen and (min-width: 1024px) {
  .seat-button {
    height: 69px;
    width: 69px;
    font-size: 31px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .seat-button {
    height: 58px;
    width: 58px;
    font-size: 25px
  }
}

@media screen and (max-width: 767px) {
  .seat-button {
    height: 35px;
    width: 35px;
    font-size: 13px;
  }
}
</style>
