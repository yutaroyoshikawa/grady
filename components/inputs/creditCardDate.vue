<template>
  <div>
    <div class="wrap">
      <input
        type="number"
        min="1"
        max="31"
        placeholder="日"
        v-model.number="inputValue"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: Number,
    handleChange: Function
  },
  computed: {
    inputValue: {
      get(): number | null {
        return this.value ? this.value : null
      },
      set(value: number) {
        this.handleChange(value)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  width: 73px;
  height: 47px;
  border-bottom: solid 2px #fff;
  transition: all 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  input {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 29px;
    border: none;
    padding: 0 10px;
    transition: all 300ms ease;
    background: transparent;
    color: #fff;
  }
}
</style>
