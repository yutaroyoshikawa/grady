<template>
  <div>
    <div class="wrap">
      <span>上映中</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.wrap {
  span {
    display: flex;
    background-color: #860b52;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    span {
      width: 132px;
      height: 49px;
      font-size: 22px;
      border-radius: 19px 5px 5px 5px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    span {
      width: 97px;
      height: 36px;
      font-size: 17px;
      border-radius: 19px 3px 3px 3px;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    span {
      width: 57px;
      height: 21px;
      font-size: 10px;
      border-radius: 10px 2px 2px 2px;
    }
  }
}
</style>
