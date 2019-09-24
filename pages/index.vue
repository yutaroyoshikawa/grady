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
              v-for="genre in genres"
              :key="genre.value"
              class="ais-Hits-item"
            >
              <secret-card :text="genre.text" :value="genre.value" />
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
          text: 'アクション'
        },
        {
          value: '12',
          text: 'アドベンチャー'
        },
        {
          value: '16',
          text: 'アニメ'
        },
        {
          value: '35',
          text: 'コメディ'
        },
        {
          value: '80',
          text: '極道'
        },
        {
          value: '99',
          text: 'ドキュメンタリー'
        },
        {
          value: '18',
          text: 'ドラマ'
        },
        {
          value: '10751',
          text: 'ファミリー'
        },
        {
          value: '14',
          text: 'ファンタジー'
        },
        {
          value: '36',
          text: '時代劇'
        },
        {
          value: '27',
          text: 'ホラー'
        },
        {
          value: '10402',
          text: 'ミュージック'
        },
        {
          value: '9648',
          text: 'ミステリー'
        },
        {
          value: '10749',
          text: 'ロマンス'
        },
        {
          value: '878',
          text: 'SF'
        },
        {
          value: '10770',
          text: 'バラエティ'
        },
        {
          value: '53',
          text: 'スリラー'
        },
        {
          value: '10752',
          text: '戦争'
        },
        {
          value: '37',
          text: 'ウェスタン'
        }
      ],
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID as string,
        process.env.ALGOLIA_API_KEY as string,
        {}
      ),
      inputValue: '',
      selectedStatus: 'all',
      selectedGenres: [] as string[],
      filters: [] as string[]
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
