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
  font-size: 10px;
  height: 17px;
  width: 82px;
  border-radius: 82px;
  border: 1px solid;
  &:active {
    background: #ffffff;
  }
}
</style>
