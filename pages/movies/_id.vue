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
            <div class="reserve-button" v-if="movie.isScreening">
              <go-to-watch-button :handleClick="requestOpenDrawer" />
            </div>
            <div class="movie-title-wrap">
              <movie-title :title="movie.title" />
              <screening-year :year="movie.releaseDate" />
            </div>
          </div>
        </div>
        <div class="middle-content">
          <movie-details-tab :handleChangeSelected="setSelectedTab" />
        </div>
        <div class="content">
          <div class="overview" v-if="selectedTab === '概要'">
            <p v-if="movie.story === ''">準備中</p>
            <p v-else>{{ movie.story }}</p>
          </div>
          <div class="overview" v-if="selectedTab === '出演者'">
            <p v-if="movie.castName.length === 0">準備中</p>
            <div v-else>
              <p>出演者</p>
              <ul
                v-for="(castName, index) in movie.castName"
                v-bind:key="castName + index"
              >
                <li>{{ castName }}</li>
              </ul>
            </div>
          </div>
          <div class="overview" v-if="selectedTab === 'スタッフ'">
            <p v-if="movie.staff.length === 0">準備中</p>
            <div v-else>
              <p>スタッフ</p>
              <ul
                v-for="(staff, index) in movie.staff"
                v-bind:key="staff + index"
              >
                <li>{{ staff.name }} ({{ staff.job }})</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <transition name="drawer">
      <div v-if="isOpenDrawer" class="drawer">
        <go-to-watch-drawer
          :handleClose="requestCloseDrawer"
          :handleSubmit="requestTemporaryReservation"
          :movieId="movieId"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import { IMovie, loadStates, IReservationForm } from '~/store/movies'
import GoToWatchDrawer from '~/layouts/drawers/goToWatchDrawer.vue'
import MovieThumbnail from '~/layouts/movieThumbnail.vue'
import GoToWatchButton from '~/components/buttons/goToWatchButton.vue'
import MovieDetailsTab from '~/layouts/tabs/movieDetailsTab.vue'
import MovieTitle from '~/components/texts/movieTitle.vue'
import ScreeningYear from '~/components/texts/screeningYear.vue'
import VueLoadImage from 'vue-load-image'

export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer,
    'movie-thumbnail': MovieThumbnail,
    'vue-load-image': VueLoadImage,
    'go-to-watch-button': GoToWatchButton,
    'movie-details-tab': MovieDetailsTab,
    'movie-title': MovieTitle,
    'screening-year': ScreeningYear
  },
  data: function() {
    return {
      selectedTab: '概要',
      movieId: this.$route.params.id
    }
  },
  computed: {
    movie(): IMovie {
      return this.$store.state.movies.movie
    },
    isOpenDrawer(): boolean {
      return this.$store.state.movies.isOpenDrawer
    },
    loadState(): loadStates {
      return this.$store.state.movies.loadState
    }
  },
  created: function() {
    this.$store.dispatch('movies/requestGetMovie', this.movieId)
  },
  methods: {
    ...mapActions({
      requestOpenDrawer: 'movies/requestOpenDrawer',
      requestCloseDrawer: 'movies/requestCloseDrawer'
    }),
    setSelectedTab: function(selected: string) {
      this.selectedTab = selected
    },
    requestTemporaryReservation: function(form: IReservationForm) {
      this.$store.dispatch('movies/requestTemporaryReservation', form)
    }
  },
  layout: 'base'
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: #3f6060;

  .cover-back-wrap {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    width: 100vw;

    .cover-back {
      width: 100vw;
      background: rgba(255, 255, 255, 0.3);
      object-fit: cover;
      filter: blur(5px);
    }
  }

  .main-content {
    margin: 0 auto;
    transform: translateY(-200px);

    .top-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .top-right-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

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
      .overview {
        color: #fff;
        text-align: justify;
        height: 200px;
        overflow-y: scroll;
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

@media screen and (min-width: 1024px) {
  .cover-back-wrap {
    height: 450px;

    .cover-back {
      height: 450px;
    }
  }

  .main-content {
    width: 919px;

    .reserve-button {
      margin: 100px 0 40px 0;
    }
    .content {
      .overview {
        font-size: 25px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .cover-back-wrap {
    height: 390.82px;
    .cover-back {
      height: 390.82px;
    }
  }

  .main-content {
    width: 577.09px;
  }
  .reserve-button {
    margin: 100px 0 40px 0;
  }
  .top-content {
    margin-top: 5%;
  }

  .content {
    .overview {
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 768px) {
  .cover-back-wrap {
    height: 300px;
    .cover-back {
      height: 300px;
    }
  }
  .top-content {
    margin-top: 30%;
    width: 250px;
  }
  .top-right-content {
    margin-top: 30%;
  }
  .main-content {
    width: 275px;
    .content {
      .overview {
        font-size: 15px;
      }
    }
  }
  .reserve-button {
    position: relative;
    bottom: -480px;
    z-index: 2;
    margin-right: 70%;
  }
}
</style>
