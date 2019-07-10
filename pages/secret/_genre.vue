<template>
  <div class="wrapper">
    <div class="top"></div>
    <div></div>
    <main class="main">
      <p class="secret-text">シークレット映画</p>
      <secret-genre-selecter :genre="genre" :handleChange="handleChange" />
      <go-to-watch-button
        class="drawer-btn"
        :handle-click="requestOpenDrawer"
      />
    </main>
    <div></div>
    <div class="main">
      <div class="chats-description">
        <p class="chats-title">チャットで映画を推理</p>
        <p class="chats-massage">
          チケットを購入するとチャットに参加いただけます。
        </p>
        <read-only-chat class="hoge" :chats="chats" />
      </div>
    </div>
    <div></div>
    <transition name="drawer">
      <div v-if="isOpenDrawer" class="drawer">
        <go-to-watch-drawer
          :handle-close="requestCloseDrawer"
          :handle-submit="requestTemporaryReservation"
          :genre="genre"
        />
      </div>
    </transition>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import GoToWatchDrawer from '~/layouts/drawers/goToWatchDrawer.vue'
import SecretGanruSelecter from '../../components/selector/secretGenreSelector.vue'
import GoToWatchButton from '~/components/buttons/goToWatchButton.vue'
import ReadOnlyChat from '~/layouts/chats/readOnlyChat.vue'
import { IMovie, loadStates, IReservationForm } from '~/store/secret'
export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer,
    'secret-genre-selecter': SecretGanruSelecter,
    'go-to-watch-button': GoToWatchButton,
    'read-only-chat': ReadOnlyChat
  },
  computed: {
    movie(): IMovie {
      return this.$store.state.movies.movie
    },
    isOpenDrawer(): boolean {
      return this.$store.state.secret.isOpenDrawer
    },
    loadState(): loadStates {
      return this.$store.state.movies.loadState
    }
  },
  methods: {
    ...mapActions({
      requestOpenDrawer: 'secret/requestOpenDrawer',
      requestCloseDrawer: 'secret/requestCloseDrawer'
    }),
    requestTemporaryReservation: function(form: IReservationForm) {
      this.$store.dispatch('secret/requestTemporaryReservation', form)
    },
    handleChange: function(event: any) {
      // ルーティング
      this.$nuxt.$router.push({
        path: `/secret/${event.target.value}`
      })
    }
  },
  data: function() {
    return {
      genre: this.$route.params.genre,
      chats: [{ 0: 'hoge' }, { 1: 'hoge' }, { 2: 'hoge' }, { 3: 'hoge' }]
    }
  },
  middleware: ['secret']
})
</script>
<style scoped lang="scss">
.wrapper {
  background-color: #0a2e41;
  height: 100vh;
  width: 100vw;

  .main {
    .secret-text {
      color: #ffffff;
    }

    .chats-description {
      width: 100%;
      height: 100%;
      color: #ffffff;
    }
  }
}

@media screen and (min-width: 1024px) {
  .wrapper {
    display: grid;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 204px 640px 263px 638px 199px;
    grid-template-rows: 237px 737px 106px;

    .top {
      grid-column-start: 1;
      grid-column-end: 6;
    }

    .main {
      .drawer-btn {
        margin-top: 370px;
      }

      .secret-text {
        font-size: 80px;
      }

      .chats-description {
        color: #ffffff;

        .chats-title {
          font-size: 38px;
        }
        .chats-massage {
          font-size: 21px;
          border-bottom: solid 3px #ffffff;
        }
      }
    }
  }
  .footer {
    grid-column-start: 1;
    grid-column-end: 6;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    main.main {
      margin-top: 83.49px;
      justify-content: center;
    }
    .drawer-btn {
      position: relative;
      bottom: -450px;
      z-index: 2;
    }
    .secret-text {
      font-size: 61px;
    }
    .chats-title {
      font-size: 23px;
    }
    .chats-massage {
      width: 218px;
      font-size: 13px;
      border-bottom: solid 3px #3e5d6e;
    }
  }
}

@media screen and (max-width: 767px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .main {
      .drawer-btn {
        margin-top: 370px;
      }

      .secret-text {
        font-size: 27px;
      }

      .chats-description {
        color: #ffffff;

        .chats-title {
          font-size: 18px;
        }

        .chats-massage {
          font-size: 13px;
          border-bottom: solid 3px #ffffff;
        }
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
</style>
