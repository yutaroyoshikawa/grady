<template>
  <div>
    <header v-on="openAndCloseAnimation()">
      <nuxt-link to="/">
        <div class="logo-wrap">
          <logo />
        </div>
      </nuxt-link>
      <div class="search-wrap">
        <search />
      </div>
      <div class="loading-wrap" v-if="isVisibleAnimation">
        <loading-mark />
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/marks/logo.vue'
import Search from '~/layouts/search.vue'
import LoadingMark from '~/components/marks/loadingMark.vue'

export default Vue.extend({
  components: {
    logo: Logo,
    search: Search,
    'loading-mark': LoadingMark
  },
  computed: {
    isVisibleAnimation(): string {
      return this.$store.state.base.isVisibleLoading
    }
  },
  methods: {
    openAndCloseAnimation: function() {
      this.$store.subscribe(mutation => {
        // eslint-disable-next-line no-console
        console.log('StoreState:', this.$store.state.base.isVisibleLoading)
        // eslint-disable-next-line no-console
        console.log(mutation.type)
        if (mutation.type === 'movies/setMovieInfo') {
          // eslint-disable-next-line no-console
          console.log('見ているぞ')
          while (this.$store.state.movies.loadStates !== 'none') {
            if (
              this.$store.state.movies.loadStates === 'loading' &&
              this.$store.state.movies.loadStates === 'none'
            ) {
              this.$store.dispatch('base/openLoadingAction')
            }
            this.$store.dispatch('base/closeLoadingAction')
            break
          }
        } else if (mutation.type === 'secret/requestTemporaryReservation') {
          // eslint-disable-next-line no-console
          console.log('見ているぞ２')
          while (this.$store.state.secret.loadStates === !'loading' && 'none') {
            this.$store.dispatch('base/openLoadingAction')
          }
          this.$store.dispatch('base/closeLoadingAction')
        } else if (mutation.type === 'reservations/setReservationInfo') {
          // eslint-disable-next-line no-console
          console.log('見ているぞ３')
          while (this.$store.state.reservations.loadStates !== 'loading') {
            this.$store.dispatch('base/openLoadingAction')
          }
          this.$store.dispatch('base/closeLoadingAction')
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  .logo-wrap {
    width: 76px;
    height: 76px;
    position: fixed;
    top: 33px;
    left: 154px;
    z-index: 11;
  }

  .search-wrap {
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
    z-index: 11;
  }

  .loading-wrap {
    background-color: aqua;
  }
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
