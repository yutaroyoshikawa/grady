<template>
  <div class="wrap">
   <select name="cardExpirationYear" class="yearData">
    <option value="2019" selected="selected">1</option>
    <option value="2020">2</option>
    <option value="2021">3</option>
    <option value="2022">4</option>
    <option value="2023">5</option>
    <option value="2024">6</option>
    <option value="2025">7</option>
    <option value="2026">8</option>
    <option value="2027">9</option>
    <option value="2028">10</option>
    <option value="2029">11</option>
    <option value="2030">12</option>
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
  .yearData {
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