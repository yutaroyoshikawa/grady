<template>
  <div class="wrap">
    <div class="lines">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.wrap {
  width: 240px;
  height: 260px;
  z-index: 999;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #222222;

  .lines {
    height: 240px;
    display: flex;
    justify-content: space-evenly;

    .line1 {
      width: 15%;
      height: 100%;
      border-radius: 20px;
      animation-name: loding;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      background-color: #ffffff;
      animation-delay: -0s;
    }
    .line2 {
      width: 15%;
      height: 100%;
      border-radius: 20px;
      animation-name: loding;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-delay: -0.2s;
      background-color: #ffffff;
    }
    .line3 {
      width: 15%;
      height: 100%;
      border-radius: 20px;
      animation-name: loding;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-delay: -0.4s;
      background-color: #ffffff;
    }
    .line4 {
      width: 15%;
      height: 100%;
      border-radius: 20px;
      animation-name: loding;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-delay: -0.6s;
      background-color: #ffffff;
    }
  }
}
@keyframes loding {
  0% {
    height: 0%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
</style>
