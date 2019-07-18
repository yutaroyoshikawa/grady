<template>
  <div>
    <div class="wrap">
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
              :isScreening="movie.isScreening"
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
        <div class="middle-content"></div>
        <div class="content">
          <div class="content-left">
            <vue-qrcode :value="reservationId" :options="{ width: 253.15 }" />
          </div>
          <div class="content-right">
            <movie-theater-selector
              :theaters="theaters"
              :handleChange="handleChangeTheater"
              :value="formDatas.theater"
            />
            <people-input
              type="adult"
              :handleChange="handleChangeAdult"
              :value="formDatas.adult"
            />
            <people-input
              type="kids"
              :handleChange="handleChangeKids"
              :value="formDatas.kids"
            />
            <screening-date-selector
              :dates="dates"
              :handleChange="handleChangeDate"
              :value="formDatas.date"
            />
            <screening-time-selector
              :times="times"
              :handleChange="handleChangeTime"
              :value="formDatas.time"
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
import moment from 'moment'
import VueLoadImage from 'vue-load-image'
import { IMovie } from '~/store/movies'
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
  computed: {
    movie(): IMovie {
      return this.$store.state.movies.movie
    }
  },
  created: function() {
    this.$store.dispatch('movies/requestGetMovie', this.movieId)
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

    .middle-content {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 35px 0 10px 0;
    }

    .content {
      display: flex;

      .content-left {
        width: 297px;
        height: 300px;
        background-color: white;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .content-right {
        background-color: red;
      }
    }
  }
}
</style>
