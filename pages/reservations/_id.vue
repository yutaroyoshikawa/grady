<template>
  <div>
    <div>
      <confirmed-reservation />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfirmedReservation from '~/layouts/reservations/confirmedBooking.vue'

export default Vue.extend({
  components: {
    'confirmed-reservation': ConfirmedReservation
  },
  data: function() {
    return {
      reservationId: this.$route.params.id,
      isOpenSeats: false,
      isOpenCreditCard: false
    }
  }
})
</script>

<style lang="scss" scoped></style>
