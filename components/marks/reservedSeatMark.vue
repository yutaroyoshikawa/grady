<template>
  <div>
    <div class="wrap">
      <div
        class="reserved-seat-mark"
        :class="{
          active: isReserve,
          inactive: !isReserve
        }"
      />
      <p class="reserved-text" v-if="isReserve">予約済み</p>
      <p class="reserved-text" v-else-if="!isReserve">予約可能</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isReserve: Boolean
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 209px;
  height: 68px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;

  .reserved-seat-mark {
    color: #fff;
    border-radius: 22px;
    border: 3px solid #fff;
  }

  @media screen and (min-width: 1024px) {
    .reserved-seat-mark {
      height: 69px;
      width: 69px;
      font-size: 31px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .reserved-seat-mark {
      height: 58.81px;
      width: 58.81px;
      font-size: 26px;
    }
  }

  @media screen and (max-width: 767px) {
    .reserved-seat-mark {
      height: 35.08px;
      width: 35.08px;
    }
  }
  .active {
    background: #ffffff;
  }
  .inactive {
    background: unset;
  }
  .reserved-text {
    font-size: 31px;
  }
}
</style>
