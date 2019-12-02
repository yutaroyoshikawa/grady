<template>
  <div>
    <div>
      <div v-if="loadState === 'done'">
        <div v-if="!paymentMethod">
          <confirmed-reservation />
        </div>
        <div v-if="paymentMethod">
          <div v-if="!isSecret">
            <show-reservation />
          </div>
          <div v-if="isSecret">
            <show-secret-reservation />
          </div>
        </div>
      </div>
      <div v-if="loadState === 'loading'">
        <div class="loading-warp">
          <loading-mark />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfirmedReservation from '~/layouts/reservations/confirmedBooking.vue'
import ShowReservation from '~/layouts/reservations/showReservation.vue'
import ShowSecretReservation from '~/layouts/reservations/showSecretReservation.vue'
import LoadingMark from '~/components/marks/loadingMark.vue'

export default Vue.extend({
  components: {
    'confirmed-reservation': ConfirmedReservation,
    'show-reservation': ShowReservation,
    'show-secret-reservation': ShowSecretReservation,
    'loading-mark': LoadingMark
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
    },
    isSecret(): boolean {
      return this.$store.state.reservations.isSecret
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

<style lang="scss" scoped>
.loading-warp {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 300;
  background-color: rgba(000, 000, 000, 0.8);
}
</style>
