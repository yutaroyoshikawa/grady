<template>
  <body>
    <button
      class="tab"
      :class="{
        active: isActive,
        inactive: !isActive
      }"
    >
      {{ text }}
    </button>
  </body>
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
body {
  background-color: #0d0d36;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.tab {
  border: none;
}
.active {
  width: 100px;
  height: 40px;
  border-radius: 40px;
  background-color: #ffffff;
  border: solid 1px #707070;
  color: #585858;
}
</style>
