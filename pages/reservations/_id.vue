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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfirmedReservation from '~/layouts/reservations/confirmedBooking.vue'
import ShowReservation from '~/layouts/reservations/showReservation.vue'
import ShowSecretReservation from '~/layouts/reservations/showSecretReservation.vue'
import { IReserve } from '@/store/reservations'

export default Vue.extend({
  components: {
    'confirmed-reservation': ConfirmedReservation,
    'show-reservation': ShowReservation,
    'show-secret-reservation': ShowSecretReservation
  },
  data: function() {
    return {
      reservationId: this.$route.params.id,
      isOpenSeats: false,
      isOpenCreditCard: false
    }
  },

  computed: {
    reservation(): IReserve {
      return this.$store.state.reservations.reservation
    },
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
  },
  created: function() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'reservations/chatsData') {
        const genre = this.reservation.genre
        this.$store.dispatch('reservations/requestHints', genre)
      }
    })
  },
  layout: 'base'
})
</script>

<style lang="scss" scoped></style>
