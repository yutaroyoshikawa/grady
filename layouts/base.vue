<template>
  <div>
    <header>
      <nuxt-link to="/">
        <div class="logo-wrap">
          <logo />
        </div>
      </nuxt-link>
      <div class="search-wrap">
        <search />
      </div>
      <div v-if="isVisibleAnimation === 'loading'">
        <div class="loading-wrap">
          <loading-mark />
        </div>
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
      return this.$store.state.reservations.loadState
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
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 666;
    background-color: rgba(000, 000, 000, 0.8);
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
