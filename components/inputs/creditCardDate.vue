<template>
  <div>
    <div class="entire">
      <div class="input-box">
        <input type="text" value="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.entire {
  display: flex;
  width: 56px;

  .input-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }

  input {
    width: 100%;
    font-size: 29px;
    border: none;
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
    padding: 0 10px;
    transition: all 300ms ease;
    background: transparent;
    color: #fff;
  }

  input:focus {
    outline: rgba(0, 0, 0, 0);
    border-bottom: solid 1px rgba(255, 255, 255, 1);
  }
}
</style>
