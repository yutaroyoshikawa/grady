<template>
  <div>
    <div>
      <div v-if="loadState === 'done'">
        <div v-if="!paymentMethod">
          <confirmed-reservation />
        </div>
        <div v-if="paymentMethod">
          <show-reservation />
        </div>
      </div>
      <div v-if="loadState === 'loading'">
        <div>loading...</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfirmedReservation from '~/layouts/reservations/confirmedBooking.vue'
import ShowReservation from '~/layouts/reservations/showReservation.vue'

export default Vue.extend({
  components: {
    'confirmed-reservation': ConfirmedReservation,
    'show-reservation': ShowReservation
  },
  data: function() {
    return {
      reservationId: this.$route.params.id,
      isOpenSeats: false,
      isOpenCreditCard: false
    }
  },
  computed: {
    loadState(): string {
      return this.$store.state.reservations.loadState
    },
    paymentMethod(): boolean {
      return this.$store.state.reservations.reservation.paymentMethod
    }
  },
  mounted: function() {
    this.$store.dispatch(
      'reservations/requestGetReservation',
      this.reservationId
    )
  }
})
</script>

<style lang="scss" scoped></style>
