<template>
  <button
    class="tagButton"
    :class="{
      active: isActive
    }"
    @click="onClick"
  >
    {{ name }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: String
  },
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    onClick: function() {
      this.isActive = !this.isActive
    }
  }
})
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

.tagButton:active {
  background: #ffffff;
  color: #000000;
}

.active {
  color: #000;
  background: #fff;
  border-color: #000;
}

@media screen and (min-width: 1024px) {
  .tagButton {
    font-size: 17px;
    height: 29px;
    width: 114px;
    border-radius: 29px;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .tagButton {
    font-size: 17px;
    height: 29px;
    width: 114px;
    border-radius: 29px;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
}

@media screen and (min-width: 300px) {
  .tagButton {
    width: 84.83px;
    height: 21.58px;
    font-size: 12px;
    border-radius: 61px; 
  }
}
</style>
