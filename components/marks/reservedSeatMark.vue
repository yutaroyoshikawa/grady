<template>
  <div class="wrap">
    <div 
      class="reservedSeatMark"
      :class="{
        active: isReserve,
        inactive: !isReserve
      }"
    />
    <p class="reservedText" v-if="isReserve">予約済み</p>
    <p class="reservedText" v-else-if="!isReserve">予約可能</p>
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

<style lang="scss">
.wrap {
  width: 209px;
  height: 68px;
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;

  .reservedSeatMark {
    color: #ffffff;
    border-radius: 22px;
    border: 3px solid #ffffff;
  }

  @media screen and (min-width: 1024px) {
   .reservedSeatMark {
      height: 69px;
      width: 69px;
      font-size: 31px;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1024px) {
    .reservedSeatMark {
      height: 58.81px;
      width: 58.81px;
      font-size: 26px;
    }
  }

@media screen and (min-width: 300px) {
   .reservedSeatMark {
      height: 35.08px;
      width: 35.08px;
      font-size: 15px;
  }
}
  .active {
    background: #ffffff;
  }
  .inactive {
    background: unset;
  }
  .reservedText {
      font-size: 31px;
  }
}
</style>
