<template>
  <div>
    <div class="wrap">
      <select
        name="cardExpirationMonth"
        class="monthData"
        v-model.number="selectorValue"
      >
        <option value="default" disabled selected>月</option>
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
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
    selectorValue: {
      get(): number | string {
        return this.value ? this.value : 'default'
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
  border-bottom: solid 2px #fff;
  transition: all 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  select {
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
@media screen and (min-width: 1024px) {
  .wrap {
    width: 73px;
    height: 47px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    width: 56px;
    height: 40.5px;
  }
}
@media screen and (max-width: 767px) {
  .wrap {
    width: 34.42px;
    height: 24.9px;
  }
}
</style>
