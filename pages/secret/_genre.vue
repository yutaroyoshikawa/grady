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
.hoge {
  overflow-y: scroll;
}
.wrapper {
  background-color: #0a2e41;
  height: 100vh;
  width: 100vw;
  color: #ffffff;
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
  .wrapper {
    display: grid;
    grid-template-columns: 181px 640px 263px 638px 199px;
    grid-template-rows: 237px 737px 106px;
    justify-content: center;
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
        /*width: 638px;*/
        width: 100%;
        height: 100%;
        /*background-color: lightcyan;*/
        .chats-title {
          font-size: 38px;
        }
        .chats-massage {
          font-size: 21px;
          border-bottom: solid 3px #ffffff;
        }
        .hoge {
          /*background-color: lightblue;*/
          display: flex;
          justify-content: center;
          height: 700px;
        }
      }
    }
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  main.main {
    height: 135px;
    margin-top: 150px;
  }
  .drawer-btn {
    position: relative;
    margin: 150px;
    bottom: -500px;
    z-index: 2;
  }
  .secret-text {
    font-size: 61px;
  }
  div.main {
    .chats-title {
      font-size: 38px;
    }
    .chats-massage {
      font-size: 21px;
      border-bottom: solid 3px #ffffff;
    }
    .center-line {
      top: 15px;
      width: 596px;
      border-bottom: solid 3px #3e5d6e;
    }
  }
  .hoge {
    height: 400px;
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  main.main {
    margin-top: 200px;
  }
  .drawer-btn {
    position: relative;
    bottom: -400px;
    z-index: 2;
  }
  .secret-text {
    font-size: 27px;
  }
  div.main {
    .chats-title {
      font-size: 18px;
    }
    .chats-massage {
      font-size: 13px;
    }
    .center-line {
      width: 218px;
      border-bottom: solid 3px #3e5d6e;
    }
  }
  .hoge {
    height: 184.62px;
    width: 100%;
  }
}
</style>
