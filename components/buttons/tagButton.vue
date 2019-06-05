<template>
    <button
      class="tagButton"
      @click="onClick"
      v-bind:class="{
        active: isActive
      }"
    >
      {{ name }}
    </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: String,
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
.active {
  color: #000;
  background: #fff;
  border-color: #000;
}
</style>
