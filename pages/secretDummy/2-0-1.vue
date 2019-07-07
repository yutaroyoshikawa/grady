<template>
  <div class="wrapper">
    <div class="head-wrapper"></div>
    <main class="main-wrapper">
      <div class="stepper-wrapper">
        <stepper />
      </div>
      <div class="input-wrapper" v-if="nowPage === 0">
        <div class="material-wrapper">
          <movie-theater-selector
            :theaters="theaters"
            :handleChange="handleChangeTheater"
            :value="formDatas.theater"
          />
        </div>
        <div class="material-wrapper">
          <screening-date-selector
            :dates="dates"
            :handleChange="handleChangeDate"
            :value="formDatas.date"
          />
        </div>
        <div class="material-wrapper">
          <screening-time-selector
            :times="times"
            :handleChange="handleChangeTime"
            :value="formDatas.time"
          />
        </div>
      </div>
    </main>
    <div class="footer-wrapper">
      <next-button />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NextButton from '~/components/buttons/nextButton'
import Stepper from '~/layouts/stepper'
import MovieTheaterSelector from '~/components/selector/movieTheaterSelector.vue'
import ScreeningDateSelector from '~/components/selector/screeningDateSelector.vue'
import ScreeningTimeSelector from '~/components/selector/screeningTimeSelector.vue'
import moment from 'moment'
export default Vue.extend({
  components: {
    'next-button': NextButton,
    stepper: Stepper,
    'movie-theater-selector': MovieTheaterSelector,
    'screening-date-selector': ScreeningDateSelector,
    'screening-time-selector': ScreeningTimeSelector
  },
  props: {
    handleClose: Function,
    handleSubmit: Function,
    movieID: String
  },
  data: function() {
    return {
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
      nowPage: 0,
      formDatas: {
        theater: '',
        date: 0,
        time: 0,
        adult: 0,
        kids: 0,
        email: ''
      }
    }
  },
  methods: {
    handleNext: function() {
      this.nowPage++
    },
    handleBack: function() {
      this.nowPage--
    },
    handleChangeTheater: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.formDatas.theater = e.target.value
      }
    },
    handleChangeDate: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.formDatas.date = Number(e.target.value)
      }
    },
    handleChangeTime: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.formDatas.time = Number(e.target.value)
      }
    },
    handleChangeAdult: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.$set(this.formDatas, 'adult', Number(e.target.value))
      }
    },
    handleChangeKids: function(e: Event) {
      if (e.target instanceof HTMLSelectElement) {
        this.$set(this.formDatas, 'kids', Number(e.target.value))
      }
    },
    handleChangeEmail: function(value: string) {
      this.formDatas.email = value
    },
    handleSend: function(e: Event) {
      if (e.target instanceof HTMLFormElement) {
        e.preventDefault()
        this.handleSubmit({
          // movieId: this.movieId,
          theater: this.formDatas.theater,
          date: moment(this.dates[this.formDatas.date - 1]).format(
            'YYYY-MM-DD'
          ),
          time: `${moment(this.times[this.formDatas.time - 1].start).format(
            'HH:mm'
          )}-${moment(this.times[this.formDatas.time - 1].finish).format(
            'HH:mm'
          )}`,
          adult: this.formDatas.adult,
          kids: this.formDatas.kids,
          email: this.formDatas.email
        })
      }
    }
  }
})
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #0d0d36;

  .head-wrapper {
    height: 244px;
    width: 100vw;
    background-color: lightgreen;
  }

  .main-wrapper {
    height: 618px;
    width: 100vw;
    background-color: lightblue;

    .stepper-wrapper {
      background-color: lightseagreen;

      width: 100vw;
      height: 90px;
    }

    .input-wrapper {
      .material-wrapper {
        width: 728px;
        background-color: lightpink;

        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      }
    }
  }

  .footer-wrapper {
    height: 218px;
    width: 100vw;
    background-color: lightcoral;

    display: flex;
    justify-content: center;
  }
}
</style>
