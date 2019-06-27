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
        <ais-refinement-list
          attribute="isScreening"
          transformItems="items => items.filter(item => item.isScreening === true)"
        />
        <ais-search-box :value="inputValue" />
        <div class="search-wrapper">
          <div v-if="isActive" @click="handleBlur" class="closer">
            <close-button />
          </div>
          <div class="search-box-wrapper">
            <div class="search-box">
              <input @focus="handleFocus" v-model="inputValue" />
              <div class="search-mark">
                <font-awesome-icon icon="search" />
              </div>
            </div>
          </div>
          <div v-if="isActive">
            <div class="genre-wrapper">
              <div v-for="genre in genres" :key="genre.value" class="genre">
                <tag-button :name="genre.text" />
              </div>
            </div>
            <div class="screening-status">
              <screening-status-bar :handleChange="handleChangeStatus" />
            </div>
            <div>
              <ais-hits>
                <div slot="item" slot-scope="{ item }" class="movie-list">
                  <movie-thumbnail
                    :isScreening="item.isScreening"
                    :thumbUrl="'https://image.tmdb.org/t/p/w500/' + item.cover"
                    :thumbName="item.title"
                  />
                </div>
              </ais-hits>
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
import CloseButton from '~/components/buttons/closeButton.vue'
import TagButton from '~/components/buttons/tagButton.vue'
import MovieThumbnail from '~/layouts/movieThumbnail.vue'
import InstantSearch from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(InstantSearch)
library.add({ faSearch })

export default Vue.extend({
  components: {
    'screening-status-bar': ScreeningStatusBar,
    'close-button': CloseButton,
    'tag-button': TagButton,
    'movie-thumbnail': MovieThumbnail,
    'font-awesome-icon': FontAwesomeIcon
  },
  data: function() {
    return {
      isActive: false,
      genres: [
        {
          value: 'action',
          text: 'アクション'
        },
        {
          value: 'action',
          text: 'ホラー'
        },
        {
          value: 'action',
          text: 'サスペンス'
        },
        {
          value: 'action',
          text: 'コメディ'
        },
        {
          value: 'action',
          text: 'SF'
        },
        {
          value: 'action',
          text: 'アニメ'
        },
        {
          value: 'action',
          text: 'ドキュメンタリー'
        },
        {
          value: 'action',
          text: 'ラブロマンス'
        }
      ],
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID as string,
        process.env.ALGOLIA_API_KEY as string
      ),
      inputValue: '',
      selectedStatus: 'all'
    }
  },
  methods: {
    handleFocus: function() {
      this.isActive = true
    },
    handleBlur: function() {
      this.isActive = false
    },
    handleChangeStatus: function(status: string) {
      this.selectedStatus = status
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  transition: all 800ms ease;

  .search-wrapper {
    transition: all 800ms ease;

    .closer {
      position: absolute;
      transform: translate(80px, 30px);
    }

    .genre-wrapper {
      display: flex;
      margin: 25px 0;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      .genre {
        margin: 0 15px;
      }
    }

    .search-box-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;

      .search-box {
        width: 722px;
        height: 66px;
        border: solid 2px #fff;
        border-radius: 38px;
        margin-top: 30px;
        display: flex;
        align-items: center;

        input {
          font-size: 30px;
          padding: 20px;
          width: 100%;
          height: 100%;
          border-radius: 38px;
          background: transparent;
          color: #fff;
          border: none;
        }

        .search-mark {
          width: 38px;
          height: 38px;
          font-size: 38px;
          color: #fff;
          margin: 20px;
          transform: translateY(-5px);
        }
      }
    }

    .screening-status {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 30px 0;
    }
  }
}

.active {
  width: 1440px;
  height: 762px;

  .search-wrapper {
    width: 1440px;
    height: 762px;
    border-radius: 53px;
    background-color: #377793;
  }
}

.inactive {
  width: 722px;
  height: 66px;

  .search-wrapper {
    width: 100%;
    height: 66px;
    border-radius: 53px;
  }
}
</style>
