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
  transition: background-color 200ms ease;
}
.tab {
  display: flex;
  justify-content: center;
  width: 125px;
  height: 40px;
  border-radius: 40px;
  border: none;
  font-size: 25px;
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
  color: #ffffff;
}
.active {
  width: 125px;
  height: 40px;
  border-radius: 40px;
  background-color: #ffffff;
  border: solid 1px #707070;
  color: #585858;
}
.inactive {
  &:hover {
    border: solid 1px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
