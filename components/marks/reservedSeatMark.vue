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
  display: flex;
  color: #ffffff;
  justify-content: flex-start;
  align-items: center;
  .reservedSeatMark {
    height: 69px;
    width: 69px;
    font-size: 31px;
    color: #ffffff;
    border-radius: 20px;
    border: 3px solid #ffffff;
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
