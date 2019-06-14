<template>
  <div class="wrap">
   <select name="cardExpirationMonth" class="monthData">
    <option value="1" selected="selected">01</option>
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
   <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
select {
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
}
.wrap {
  display: flex;
  width: 56px;
  
  }
  select {
    width: 100%;
    font-size: 29px;
    border: none;
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
    padding: 0 10px;
    transition: all 300ms ease;
    background: transparent;
    color: #fff;
  }
  option {
    color: #000000;
  }
</style>