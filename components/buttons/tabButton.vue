<template>
  <button
    class="tab"
    :class="{
      active: isActive,
      inactive: !isActive
    }"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: Boolean,
    text: String,
    onClick: Function
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
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
  color: #ffffff;
}

.tab {
  font-family: 'TsukuBRdGothic-Regular', sans-serif;
  color: #ffffff;
  display: flex;
  justify-content: center;
  border: none;
}

.active {
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

@media screen and (min-width: 1024px) {
  .tab {
    width: 125px;
    height: 40px;
    border-radius: 40px;
    font-size: 25px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .tab {
    width: 102px;
    height: 40px;
    border-radius: 40px;
    font-size: 25px;
  }
}

@media screen and (max-width: 767px) {
  .tab {
    width: 74px;
    height: 29px;
    border-radius: 40px;
    font-size: 18px;
  }
}
</style>
