<template>
  <div class="wrap">
    <div class="reservedSeatMark">
    </div>
    <p class="reservedText">予約済み</p>
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
  color: #FFF;
  justify-content: flex-start;
  align-items: center;
  .reservedSeatMark {
    height: 69px;
    width: 69px;
    font-size: 31px;
    color: #ffffff;
    background: #ffffff;
    border-radius: 20px;
    border: 3px solid #ffffff;
  }
  .reservedText {
      font-size: 31px;
  }
}
</style>
