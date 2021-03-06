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
      <transition
        :v-on="openAndCloseToastMassage('メールを送信しました')"
        name="toast"
      >
        <div v-if="isVisibleToast" class="toast-massage-wrap">
          <toast-message :message="toastMassage" />
        </div>
      </transition>
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
import ToastMassage from '~/components/texts/toastMessage.vue'
import LoadingMark from '~/components/marks/loadingMark.vue'

interface ToastMessage {
  isVisibleToast: boolean
  toastMassage: string
}

export default Vue.extend({
  components: {
    logo: Logo,
    search: Search,
    'toast-message': ToastMassage,
    'loading-mark': LoadingMark
  },
  computed: {
    isVisibleToast(): ToastMessage {
      return this.$store.state.base.isVisibleToast
    },
    toastMassage(): ToastMessage {
      return this.$store.state.base.toastMassage
    },
    isVisibleAnimation(): string {
      return this.$store.state.base.isVisibleLoading
    }
  },
  methods: {
    openAndCloseToastMassage: function(payload: string) {
      this.$store.subscribeAction(action => {
        if (action.type === 'movies/requestTemporaryReservation') {
          this.$store.dispatch('base/openAndCloseMassage', payload)
        } else if (action.type === 'secret/requestTemporaryReservation') {
          this.$store.dispatch('base/openAndCloseMassage', payload)
        }
      })
    },
    openAndCloseAnimation: function() {
      this.$store.subscribe(mutation => {
        switch (mutation.type) {
          case 'movies/setLoadState':
            if (this.$store.state.movies.loadState === 'loading') {
              this.$store.dispatch('base/openLoadingAction')
            } else {
              this.$store.dispatch('base/closeLoadingAction')
            }
            break
          case 'secret/setLoadState':
            if (this.$store.state.secret.loadState === 'loading') {
              this.$store.dispatch('base/openLoadingAction')
            } else {
              this.$store.dispatch('base/closeLoadingAction')
            }
            break
          case 'reservations/setLoadState':
            if (this.$store.state.reservations.loadState === 'loading') {
              this.$store.dispatch('base/openLoadingAction')
            } else {
              this.$store.dispatch('base/closeLoadingAction')
            }
            break
          default:
            break
        }
      })
    }
  },
  mounted() {
    this.openAndCloseAnimation()
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
    z-index: 100;
  }

  .search-wrap {
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
    z-index: 11;
  }

  .loading-wrap {
    z-index: 1000;
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
