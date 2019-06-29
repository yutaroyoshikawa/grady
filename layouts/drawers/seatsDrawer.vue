<template>
  <div>
    <div class="wrap">
      <div class="close-wrap">
        <close-button />
      </div>
      <div>
        <seat-button />
      </div>
      <div>
        <reserved-seat-mark :isReserve="true" />
        <reserved-seat-mark :isReserve="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CloseButton from '~/components/buttons/closeButton.vue'
import ReservedSeatMark from '~/components/marks/reservedSeatMark.vue'
import SeatButton from '~/components/buttons/seatButton.vue'

export default Vue.extend({
  components: {
    'close-button': CloseButton,
    'reserved-seat-mark': ReservedSeatMark,
    'seat-button': SeatButton
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 768px;
  height: 100vh;
  min-height: 1080px;
  background: #3f6060;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
}
</style>
