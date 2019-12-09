<template>
  <div>
    <header v-if="!isSecret">
      <h1>{{ movieTitle }}</h1>
    </header>
    <header v-if="isSecret">
      <h1>シークレット映画</h1>
      <h2>{{ reservation.genre | filterGenre }}</h2>
    </header>
    <div class="wrap">
      <div>
        <div class="stepper-wrap">
          <stepper :step="page" :handleChange="changePage" />
        </div>
        <div class="form" v-if="loadSeatData === 'done'">
          <div class="contents" v-if="page === 1">
            <movie-theater-selector
              :theaters="theaters"
              :value="reservation.theater"
              :isReadOnly="true"
            />
            <div class="people-input-wrap">
              <div>
                <people-input
                  type="adult"
                  :value="reservation.adult"
                  :isReadOnly="true"
                />
              </div>
              <div>
                <people-input
                  type="kids"
                  :value="reservation.kids"
                  :isReadOnly="true"
                />
              </div>
            </div>
            <screening-date-selector
              :dates="dates"
              :value="new Date(reservation.date)"
              :isReadOnly="true"
            />
            <screening-time-selector
              :times="times"
              :value="reservation.time"
              :isReadOnly="true"
            />
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
            <!-- <div class="applepay" /> -->
            <div @click="requestPayment">
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
      <div v-if="isOpenSeatsDrawer" class="drawer">
        <seats-drawer
          :handleClose="closeSeatsDrawer"
          :handleSelect="onSelect"
          :selectedIndex="selectedSeatIndex"
          :seats="reservation.sheets"
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
import SeatsDrawer from '~/layouts/drawers/seatsDrawer.vue'
import SeatSelectorButton from '~/components/buttons/seatSelecterButton.vue'
import { IReserve } from '~/store/reservations'
import * as moment from 'moment'

interface ISheet {
  isSelected: boolean
  seat: string
}

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
    'seats-drawer': SeatsDrawer,
    'seat-selecter-button': SeatSelectorButton
  },
  data: function() {
    return {
      page: 1,
      isOpenSeatsDrawer: false,
      seats: [] as ISheet[],
      selectedSeatIndex: 0,
      theaters: [
        {
          name: 'ぴよぴよ映画館',
          value: 'ぴよぴよ映画館'
        },
        {
          name: 'ふがふが映画館',
          value: 'ふがふが映画館'
        },
        {
          name: 'ほげほげ映画館',
          value: 'ほげほげ映画館'
        }
      ],
      times: [
        {
          finish: moment()
            .hour(14)
            .minute(0)
            .toDate(),
          start: moment()
            .hour(12)
            .minute(0)
            .toDate()
        },
        {
          finish: moment()
            .hour(17)
            .minute(0)
            .toDate(),
          start: moment()
            .hour(15)
            .minute(0)
            .toDate()
        }
      ],
      dates: [
        moment()
          .add(1, 'day')
          .toDate(),
        moment()
          .add(2, 'day')
          .toDate(),
        moment()
          .add(3, 'day')
          .toDate(),
        moment()
          .add(4, 'day')
          .toDate(),
        moment()
          .add(5, 'day')
          .toDate(),
        moment()
          .add(6, 'day')
          .toDate(),
        moment()
          .add(7, 'day')
          .toDate(),
        moment()
          .add(8, 'day')
          .toDate(),
        moment()
          .add(9, 'day')
          .toDate(),
        moment()
          .add(10, 'day')
          .toDate(),
        moment()
          .add(11, 'day')
          .toDate(),
        moment()
          .add(12, 'day')
          .toDate(),
        moment()
          .add(13, 'day')
          .toDate(),
        moment()
          .add(14, 'day')
          .toDate()
      ],
      isApplePay: false
    }
  },
  computed: {
    reservation(): IReserve {
      return this.$store.state.reservations.reservation
    },
    loadSeatData(): string {
      return this.$store.state.reservations.loadSeatData
    },
    movieTitle(): string {
      return this.$store.state.reservations.movie.title
    },
    isSecret(): boolean {
      return this.$store.state.reservations.isSecret
    }
  },
  filters: {
    filterGenre(genre: string): string {
      switch (genre) {
        case 'Action':
          return 'アクション'
        case 'Adventure':
          return 'アドベンチャー'
        case 'Animation':
          return 'アニメ'
        case 'Comedy':
          return 'コメディ'
        case 'Crime':
          return '極道'
        case 'Documentary':
          return 'ドキュメンタリー'
        case 'Drama':
          return 'ドラマ'
        case 'Family':
          return 'ファミリー'
        case 'Fantasy':
          return 'ファンタジー'
        case 'History':
          return '歴史'
        case 'Horror':
          return 'ホラー'
        case 'Music':
          return '音楽'
        case 'Mystery':
          return 'ミステリー'
        case 'Romance':
          return 'ロマンス'
        case 'Science Fiction':
          return 'SF'
        case 'TV Movie':
          return 'テレビ番組'
        case 'Thriller':
          return 'スリラー'
        case 'War':
          return '戦争'
        case 'Western':
          return '西部劇'
        default:
          return ''
      }
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
    openSeatsDrawer: function(selectedIndex: number) {
      this.selectedSeatIndex = selectedIndex
      this.isOpenSeatsDrawer = true
    },
    closeSeatsDrawer: function() {
      this.isOpenSeatsDrawer = false
    },
    onSelect: function(seat: string, selectedIndex: number) {
      if (this.seats[selectedIndex].isSelected === true) {
        this.$store.dispatch(
          'reservations/requestCanselSeat',
          this.seats[selectedIndex].seat
        )
      }
      this.seats[selectedIndex] = {
        isSelected: true,
        seat
      }
    },
    requestPayment: function() {
      this.$store.dispatch('reservations/requestPayment', {
        reservationId: this.$route.params.id,
        adult: this.reservation.adult,
        kids: this.reservation.kids,
        sheets: this.reservation.sheets
      })
    }
  },
  mounted() {
    this.$store.dispatch('reservations/requestGetSeatsData', {
      date: this.reservation.date,
      time: this.reservation.time,
      theater: this.reservation.theater,
      movieId: this.reservation.movieId
    })
    for (let loop = 0; loop < this.reservation.adult; loop++) {
      this.seats.push({
        isSelected: false,
        seat: ''
      })
    }
    for (let loop = 0; loop < this.reservation.kids; loop++) {
      this.seats.push({
        isSelected: false,
        seat: ''
      })
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 38px;
  }

  h2 {
    color: #fff;
    font-size: 38px;
    position: absolute;
    right: 100px;
  }
}
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

      .applepay {
        -webkit-appearance: -apple-pay-button;
        -apple-pay-button-type: plain;
        -apple-pay-button-style: black;
      }

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

      div {
        margin-right: 50px;
      }
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

      div {
        margin: 0 20px;
      }
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
