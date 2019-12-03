<template>
  <div>
    <div
      class="wrap"
      :class="{
        active: isActive,
        inactice: !isActive
      }"
    >
      <ais-instant-search :search-client="searchClient" index-name="movies">
        <ais-configure :facetFilters="filters" :tagFilters="selectedGenres" />
        <ais-search-box :value="inputValue" />
        <div class="search-wrapper">
          <div class="search-box-wrapper">
            <div class="logo-wrap">
              <logo />
            </div>
            <div class="search-box">
              <input v-model="inputValue" />
              <div class="search-mark">
                <font-awesome-icon icon="search" />
              </div>
            </div>
          </div>
          <div>
            <div class="genre-wrapper">
              <div v-for="genre in genres" :key="genre.value" class="genre">
                <tag-button
                  :name="genre.text"
                  :value="genre.value"
                  :handleActive="handleActiveGenre"
                  :handleInactive="handleInactiveGenre"
                />
              </div>
            </div>
            <div class="screening-status">
              <screening-status-bar :handleChange="handleChangeStatus" />
            </div>
          </div>
        </div>
        <div class="hits-list-wrap" v-if="selectedStatus !== 'secret'">
          <ais-hits>
            <div slot="item" slot-scope="{ item }" class="movie-list">
              <nuxt-link :to="'/movies/' + item.objectID">
                <movie-thumbnail
                  :isScreening="item.isScreening"
                  :thumbUrl="'https://image.tmdb.org/t/p/w500/' + item.cover"
                  :thumbName="item.title"
                />
              </nuxt-link>
            </div>
          </ais-hits>
        </div>
        <div class="hits-list-wrap" v-if="selectedStatus === 'secret'">
          <div class="ais-Hits-list">
            <div
              v-for="genre in isSecretMovieGenres"
              :key="genre.value"
              class="ais-Hits-item"
            >
              <secret-card :text="genre.text" :genre="genre.genre" />
            </div>
          </div>
        </div>
      </ais-instant-search>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ScreeningStatusBar from '~/layouts/screeningStatusBar.vue'
import TagButton from '~/components/buttons/tagButton.vue'
import MovieThumbnail from '~/layouts/movieThumbnail.vue'
import SecretCard from '~/layouts/secretCard.vue'
import Logo from '~/components/marks/logo.vue'
import InstantSearch from 'vue-instantsearch'
import * as algoliasearch from 'algoliasearch/lite'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(InstantSearch)
library.add({ faSearch })

export default Vue.extend({
  components: {
    'screening-status-bar': ScreeningStatusBar,
    'tag-button': TagButton,
    'movie-thumbnail': MovieThumbnail,
    'font-awesome-icon': FontAwesomeIcon,
    'secret-card': SecretCard,
    logo: Logo
  },
  data: function() {
    return {
      isActive: false,
      genres: [
        {
          value: '28',
          text: 'アクション',
          genre: 'Action'
        },
        {
          value: '12',
          text: 'アドベンチャー',
          genre: 'Adventure'
        },
        {
          value: '16',
          text: 'アニメ',
          genre: 'Animation'
        },
        {
          value: '35',
          text: 'コメディ',
          genre: 'Comedy'
        },
        {
          value: '80',
          text: '極道',
          genre: 'Crime'
        },
        {
          value: '99',
          text: 'ドキュメンタリー',
          genre: 'Documentary'
        },
        {
          value: '18',
          text: 'ドラマ',
          genre: 'Drama'
        },
        {
          value: '10751',
          text: 'ファミリー',
          genre: 'Family'
        },
        {
          value: '14',
          text: 'ファンタジー',
          genre: 'Fantasy'
        },
        {
          value: '36',
          text: '時代劇',
          genre: 'Historical drama'
        },
        {
          value: '27',
          text: 'ホラー',
          genre: 'Horror'
        },
        {
          value: '10402',
          text: 'ミュージック',
          genre: 'Music'
        },
        {
          value: '9648',
          text: 'ミステリー',
          genre: 'Mystery'
        },
        {
          value: '10749',
          text: 'ロマンス',
          genre: 'Romance'
        },
        {
          value: '878',
          text: 'SF',
          genre: 'Science Fiction'
        },
        {
          value: '10770',
          text: 'バラエティ',
          genre: 'Variety'
        },
        {
          value: '53',
          text: 'スリラー',
          genre: 'Thriller'
        },
        {
          value: '10752',
          text: '戦争',
          genre: 'War'
        },
        {
          value: '37',
          text: 'ウェスタン',
          genre: 'Western'
        }
      ],
      isSecretMovieGenres: [],
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID as string,
        process.env.ALGOLIA_API_KEY as string,
        undefined
      ),
      inputValue: '',
      selectedStatus: 'all',
      selectedGenres: [] as string[],
      filters: [] as string[]
    }
  },
  computed: {
    SecretMovie(): [] {
      return this.$store.state.movies.isSecretMovie
    }
  },
  watch: {
    SecretMovie() {
      this.$nextTick(() => {
        const isSecretMovie = this.$store.state.movies.isSecretMovie

        this.isSecretMovieGenres = this.genres.filter(genre => {
          return isSecretMovie.includes(genre.genre)
        })
      })
    }
  },
  layout: '',
  methods: {
    handleActiveGenre: function(genre: string) {
      this.selectedGenres.push(genre)
    },
    handleInactiveGenre: function(genre: string) {
      const index = this.selectedGenres.findIndex(item => item === genre)
      this.selectedGenres.splice(index, 1)
    },
    handleChangeStatus: function(status: string) {
      this.selectedStatus = status
      switch (status) {
        case 'all':
          this.filters = []
          break
        case 'screening':
          this.filters = ['isScreening: true']
          break
        case 'screened':
          this.filters = ['isScreening: false']
          break
        case 'secret':
          this.filters = []
          break
      }
    }
  },
  created(): void {
    this.$store.dispatch('movies/requestGetSecretGenre')
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  overflow-y: scroll;
  background: #377793;
  .search-wrapper {
    position: fixed;
    background: #377793;

    .genre-wrapper {
      display: flex;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .search-box-wrapper {
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;

      .logo-wrap {
        width: 76px;
        height: 76px;
      }

      .search-box {
        border: solid 2px #fff;
        display: flex;
        align-items: center;

        input {
          width: 100vw;
          height: 100%;
          background: transparent;
          color: #fff;
          border: none;

          &:focus {
            outline: rgba(0, 0, 0, 0);
          }
        }

        .search-mark {
          color: #fff;
          transform: translateY(-10px);
        }
      }
    }

    .screening-status {
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrap {
    width: 100vw;
    background: #377793;

    .search-wrapper {
      width: 100%;

      .closer {
        transform: translate(80px, 30px);
      }

      .genre-wrapper {
        margin: 25px 0;

        .genre {
          margin: 0 15px;
        }
      }

      .search-box-wrapper {
        margin-top: 30px;

        .logo-wrap {
          transform: translateX(-200px);
        }

        .search-box {
          width: 722px;
          height: 66px;
          border-radius: 38px;

          input {
            font-size: 30px;
            padding: 20px;
            border-radius: 38px;
          }

          .search-mark {
            width: 38px;
            height: 38px;
            font-size: 38px;
            margin: 20px;
            transform: translateY(-5px);
          }
        }
      }

      .screening-status {
        margin: 30px 0;
      }
    }
    .hits-list-wrap {
      margin: 0 0 0 35px;
      padding-top: 250px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrap {
    .search-wrapper {
      .closer {
        transform: translate(30px, 20px);
      }

      .genre-wrapper {
        margin: 25px 0;

        .genre {
          margin: 0 15px;
        }
      }

      .search-box-wrapper {
        .search-box {
          width: 353px;
          height: 47px;
          border-radius: 47px;
          margin-top: 30px;

          input {
            font-size: 30px;
            padding-left: 15px;
            border-radius: 38px;
          }

          .search-mark {
            width: 28px;
            height: 28px;
            font-size: 28px;
            margin: 15px;
            transform: translateY(-3px);
          }
        }
      }

      .screening-status {
        margin: 30px 0;
      }

      .secret-list-wrap {
        margin-left: 35px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .wrap {
    .search-wrapper {
      .closer {
        transform: translate(10px, 10px);
      }

      .genre-wrapper {
        margin: 15px 0;

        .genre {
          margin: 0 10px;
        }
      }

      .search-box-wrapper {
        .search-box {
          width: 188px;
          height: 36px;
          border-radius: 36px;
          margin-top: 30px;

          input {
            font-size: 30px;
            padding: 20px;
            border-radius: 38px;
          }

          .search-mark {
            width: 22px;
            height: 22px;
            font-size: 22px;
            margin: 10px;
            transform: translateY(-3px);
          }
        }
      }

      .screening-status {
        margin: 15px 0;
      }

      .secret-list-wrap {
        margin-left: 35px;
      }
    }
  }
}
</style>
