<template>
  <div class="wrapper">
    <div class="top"></div>
    <div></div>
    <main class="main">
      <p class="secret-text">シークレット映画</p>
      <secret-genre-selecter :genre="genre" :handle-change="handleChange" />
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
        <div class="center-line"></div>
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
import { firebaseApp } from '@/store/flamelink'

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
    },
    listenData: function() {
      firebaseApp
        .firestore()
        .collection('chats')
        .doc(this.genre)
        .collection('chats')
        .orderBy('postedAt', 'desc')
        .onSnapshot((doc: any) => {
          // eslint-disable-next-line no-console
          console.log(doc.docs)
          this.chats = doc.docs
          doc.forEach((hoge: any) => {
            // eslint-disable-next-line no-console
            console.log(hoge.data())
          })
        })
    }
  },
  created() {
    this.listenData()
  },
  data: function() {
    return {
      genre: this.$route.params.genre,
      chats: []
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
        .center-line {
          display: none;
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
  /* .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    main.main {
      height: 135px;
    }
    .drawer-btn {
      position: relative;
      margin: 150px;
      bottom: -200px;
      z-index: 2;
    }
    .secret-text {
      font-size: 61px;
    }
    div.main {
      .chats-title {
        text-align: center;
        font-size: 23px;
      }
      .chats-massage {
        text-align: center;
        font-size: 13px;
      }
      .center-line {
        top: 15px;
        width: 596px;
        border-bottom: solid 3px #3e5d6e;
      }
    }
  }
} */
  .wrapper {
    display: grid;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 51.5px 218px 50.5px;
    grid-template-rows: 91px 121px 77.22px 3px 173.31px 80.64px;
    background-color: aliceblue;

    .top {
      background-color: aqua;
      grid-column-start: 1;
      grid-column-end: 6;
    }

    .main {
      background-color: aquamarine;
      .drawer-btn {
        margin-top: 370px;
      }

      .secret-text {
        background-color: blueviolet;
        font-size: 80px;
      }

      .chats-description {
        background-color: blue;
        color: #ffffff;
        .chats-title {
          background-color: cornflowerblue;
          font-size: 38px;
        }
        .chats-massage {
          font-size: 21px;
          border-bottom: solid 3px #ffffff;
        }
        .center-line {
          display: none;
        }
      }
    }
  }
  .footer {
    grid-column-start: 1;
    grid-column-end: 6;
  }
}
@media screen and (max-width: 767px) {
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    main.main {
      margin-top: 150px;
      justify-content: center;
    }
    .drawer-btn {
      position: relative;
      margin: 50px;
      bottom: -320px;
      z-index: 2;
    }
    .secret-text {
      font-size: 27px;
    }
    div.main {
      display: flex;
      flex-direction: column;
      margin-top: -100px;
      .chats-title {
        text-align: center;
        font-size: 18px;
      }
      .chats-massage {
        text-align: center;
        font-size: 13px;
      }
      .center-line {
        display: flex;
        justify-content: center;
        width: 218px;
        border-bottom: solid 3px #3e5d6e;
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
