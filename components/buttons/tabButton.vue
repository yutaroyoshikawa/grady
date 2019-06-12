<template>
  <button
    class="tab"
    :class="{
      active: isActive,
      inactive: !isActive
    }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: Boolean,
    text: String
  }
})
</script>

<style scoped lang="scss">
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.tab {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  border: none;
  font-size: 25px;
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
  color: #ffffff;
}
.active {
  width: 100px;
  height: 40px;
  border-radius: 40px;
  background-color: #ffffff;
  border: solid 1px #707070;
  color: #585858;
  transition: background-color 0.1ms;
}
</style>
