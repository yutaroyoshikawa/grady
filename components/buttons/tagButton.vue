<template>
    <button class="tagButton">サスペンス</button>
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
.tagButton {
  font-size: 17px;
  height: 29px;
  width: 114px;
  border-radius: 29px;
  border: 1px solid #ffffff;
  color: #ffffff;
  &:active {
    background: #ffffff;
    color: #000000;
  }
}
</style>
