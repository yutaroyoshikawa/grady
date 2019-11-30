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
      <transition name="toast">
        <div v-if="isActiveToast" class="toast-massage-wrap">
          <toast-massage massage="送信中" />
        </div>
      </transition>
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/marks/logo.vue'
import Search from '~/layouts/search.vue'
import ToastMassage from '~/components/texts/toastMassage.vue'

export default Vue.extend({
  components: {
    logo: Logo,
    search: Search,
    toastMassage: ToastMassage
  },
  computed: {
    isActiveToast(): boolean {
      const slicePath: any = this.$route.path //  .matchに適用されているRegExpMatchArrayの型がどうすればいいかわからないです……
      const pathName = slicePath.match(/movies|secret|\/$/)
      if (pathName[0] === 'movies') {
        return this.$store.state.movies.isActiveToast
      } else if (pathName[0] === 'secret') {
        return this.$store.state.secret.isActiveToast
      } else {
        return false
      }
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
  .toast-enter-active,
  .toast-leave-active {
    transition: transform 400ms ease;
  }

  .toast-massage-wrap {
    position: absolute;
    right: 0;
    z-index: 30;
    color: #000000;
  }

  .toast-enter {
    transform: translateX(100%);
  }

  .toast-enter-to {
    transform: translateX(0);
  }

  .toast-leave-to {
    transform: translateX(100%);
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
