<template>
  <div>
    <div class="wrap">
      <div>
        <div class="stepper-wrap">
          <stepper :step="page" :handleChange="changePage" />
        </div>
        <div class="form">
          <div class="contents" v-if="page === 1">
            <movie-theater-selector />
            <div class="people-input-wrap">
              <people-input type="adult" value="0" />
              <people-input type="kids" value="0" />
            </div>
            <screening-date-selector />
            <screening-time-selector />
          </div>
          <div class="contents" v-if="page === 2">
            <div class="seats-wrap">
              <div class="seats" v-for="(seat, index) in seats" :key="index">
                <seat-selecter-button
                  :value="seat.seat"
                  :selectedSeatIndex="index"
                  :handleClick="openSeatsDrawer"
                />
              </div>
            </div>
            <p>クリックして座席を選択</p>
          </div>
          <div class="contents" v-if="page === 3">
            <div @click="openCreditCardDrawer">
              <pay-button />
            </div>
          </div>
        </div>
        <div class="page-nav-wrap">
          <div class="page-nav">
            <div v-if="page !== 1" @click="backPage">
              <back-button />
            </div>
            <div v-if="page !== 3" @click="nextPage">
              <next-button />
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="drawer">
      <div v-if="isOpenCreditCardDrawer" class="drawer">
        <credit-card-drawer :handleClose="closeCreditCardDrawer" />
      </div>
    </transition>
    <transition name="drawer">
      <div v-if="isOpenSeatsDrawer" class="drawer">
        <seats-drawer
          :handleClose="closeSeatsDrawer"
          :handleSelect="onSelect"
          :selectedIndex="selectedSeatIndex"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Stepper from '~/layouts/stepper.vue'
import MovieTheaterSelector from '~/components/selector/movieTheaterSelector.vue'
import PeopleInput from '~/components/selector/peopleInput.vue'
import ScreeningDateSelector from '~/components/selector/screeningDateSelector.vue'
import ScreeningTimeSelector from '~/components/selector/screeningTimeSelector.vue'
import PayButton from '~/components/buttons/payButton.vue'
import BackButton from '~/components/buttons/backButton.vue'
import NextButton from '~/components/buttons/nextButton.vue'
import CreditCardDrawer from '~/layouts/drawers/creditCardDrawer.vue'
import SeatsDrawer from '~/layouts/drawers/seatsDrawer.vue'
import SeatSelectorButton from '~/components/buttons/seatSelecterButton.vue'

export default Vue.extend({
  components: {
    stepper: Stepper,
    'movie-theater-selector': MovieTheaterSelector,
    'back-button': BackButton,
    'next-button': NextButton,
    'people-input': PeopleInput,
    'screening-date-selector': ScreeningDateSelector,
    'screening-time-selector': ScreeningTimeSelector,
    'pay-button': PayButton,
    'credit-card-drawer': CreditCardDrawer,
    'seats-drawer': SeatsDrawer,
    'seat-selecter-button': SeatSelectorButton
  },
  data: function() {
    return {
      page: 1,
      isOpenCreditCardDrawer: false,
      isOpenSeatsDrawer: false,
      seats: [
        {
          isSelected: false,
          seat: ''
        },
        {
          isSelected: false,
          seat: ''
        },
        {
          isSelected: false,
          seat: ''
        }
      ],
      selectedSeatIndex: 0
    }
  },
  methods: {
    changePage: function(page: number) {
      this.page = page
    },
    nextPage: function() {
      this.page = this.page + 1
    },
    backPage: function() {
      this.page = this.page - 1
    },
    openCreditCardDrawer: function() {
      this.isOpenCreditCardDrawer = true
    },
    closeCreditCardDrawer: function() {
      this.isOpenCreditCardDrawer = false
    },
    openSeatsDrawer: function(selectedIndex: number) {
      this.selectedSeatIndex = selectedIndex
      this.isOpenSeatsDrawer = true
    },
    closeSeatsDrawer: function() {
      this.isOpenSeatsDrawer = false
    },
    onSelect: function(seat: string, selectedIndex: number) {
      this.seats[selectedIndex] = {
        isSelected: true,
        seat
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: #0d0d36;
  display: flex;
  justify-content: center;
  align-items: center;

  .stepper-wrap {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .form {
    display: flex;
    justify-content: center;
    margin: 50px 0;

    .contents {
      height: 300px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;

      .seats-wrap {
        width: 500px;
        display: flex;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;

        .seats {
          margin-right: 40px;
        }
      }

      p {
        color: #fff;
        font-size: 40px;
      }
    }

    .people-input-wrap {
      display: flex;
    }
  }

  .page-nav-wrap {
    display: flex;
    justify-content: center;

    .page-nav {
      width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 400ms ease;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
}

.drawer-enter {
  transform: translateX(100%);
}

.drawer-enter-to {
  transform: translateX(0);
}

.drawer-leave-to {
  transform: translateX(100%);
}
</style>
