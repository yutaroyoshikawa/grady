<template>
  <div>
    <div v-if="loadMovieData === 'loading'" class="wrap">loading...</div>
    <div class="wrap" v-if="loadMovieData === 'done'">
      <div class="cover-back-wrap">
        <vue-load-image>
          <img
            :src="
              'https://image.tmdb.org/t/p/w1400_and_h450_face' + movie.coverBack
            "
            alt="coverBack"
            slot="image"
            class="cover-back"
          />
          <div slot="preloader" class="cover-back" />
          <div slot="error" class="cover-back" />
        </vue-load-image>
      </div>
      <section class="main-content">
        <div class="top-content">
          <div>
            <movie-thumbnail
              :isScreening="true"
              :thumbName="movie.title"
              :thumbUrl="'https://image.tmdb.org/t/p/w500/' + movie.cover"
            />
          </div>
          <div class="top-right-content">
            <div class="reserve-button">
              <div class="empty-space"></div>
            </div>
            <div class="movie-title-wrap">
              <movie-title :title="movie.title" />
              <screening-year :year="movie.releaseDate" />
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content-left">
            <vue-qrcode :value="reservationId" :options="{ width: 222 }" />
          </div>
          <div class="content-right">
            <movie-theater-selector
              :theaters="theaters"
              :value="reservation.theater"
              :isReadOnly="true"
            />
            <div class="people-wrap">
              <people-input
                type="adult"
                :value="reservation.adult"
                :isReadOnly="true"
              />
              <people-input
                type="kids"
                :value="reservation.kids"
                :isReadOnly="true"
              />
            </div>
            <screening-date-selector
              :dates="dates"
              :value="reservation.date"
              :isReadOnly="true"
            />
            <screening-time-selector
              :times="times"
              :value="reservation.time"
              :isReadOnly="true"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import * as moment from 'moment'
import VueLoadImage from 'vue-load-image'
import { IMovie, IReserve } from '~/store/reservations'
import MovieThumbnail from '~/layouts/movieThumbnail.vue'
import MovieTitle from '~/components/texts/movieTitle.vue'
import ScreeningYear from '~/components/texts/screeningYear.vue'
import PeopleInput from '~/components/selector/peopleInput.vue'
import MovieTheaterSelector from '~/components/selector/movieTheaterSelector.vue'
import ScreeningDateSelector from '~/components/selector/screeningDateSelector.vue'
import ScreeningTimeSelector from '~/components/selector/screeningTimeSelector.vue'

export default Vue.extend({
  components: {
    'vue-load-image': VueLoadImage,
    'movie-thumbnail': MovieThumbnail,
    'movie-title': MovieTitle,
    'screening-year': ScreeningYear,
    'people-input': PeopleInput,
    'movie-theater-selector': MovieTheaterSelector,
    'screening-date-selector': ScreeningDateSelector,
    'screening-time-selector': ScreeningTimeSelector,
    'vue-qrcode': VueQrcode
  },
  data: function() {
    return {
      reservationId: this.$route.params.id,
      selectedTab: '概要',
      movieId: this.$route.params.id,
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
      ]
    }
  },
  computed: {
    movie(): IMovie {
      return this.$store.state.reservations.movie
    },
    reservation(): IReserve {
      return this.$store.state.reservations.reservation
    },
    loadMovieData(): string {
      return this.$store.state.reservations.loadMovieData
    }
  },
  mounted: function() {
    this.$store.dispatch(
      'reservations/requestGetMovie',
      this.reservation.movieId
    )
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: #0d0d36;

  .cover-back-wrap {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 450px;

    .cover-back {
      width: 100vw;
      height: 450px;
      background: rgba(255, 255, 255, 0.3);
      object-fit: cover;
      filter: blur(5px);
    }
  }

  .main-content {
    width: 919px;
    margin: 0 auto;
    transform: translateY(-200px);

    .top-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .top-right-content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-direction: column;

        .reserve-button {
          margin: 100px 0 40px 0;

          .empty-space {
            @media screen and (min-width: 1024px) {
              width: 415px;
              height: 86px;
            }

            @media screen and (min-width: 768px) and (max-width: 1024px) {
              width: 296px;
              height: 61px;
            }

            @media screen and (max-width: 767px) {
              width: 218px;
              height: 45px;
            }
          }
        }

        .movie-title-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 45px;

      .content-right {
        display: flex;
        height: 253px;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;

        .people-wrap {
          display: flex;
        }
      }

      .content-left {
        width: 253px;
        height: 253px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
