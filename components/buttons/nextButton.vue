<template>
  <button class="nextButton">
    &gt;
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
.nextButton {
  font-size: 40px;
  border-radius: 50%;
  border: 1px solid;
  height: 96px;
  width: 96px;
  background: #ffffff;
  color: #444444;
}
</style>
