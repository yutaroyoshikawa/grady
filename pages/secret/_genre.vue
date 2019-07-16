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
import { IMovie, loadStates, IReservationForm, IHoge } from '~/store/secret'
// import { firebaseApp } from '@/store/flamelink'

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
    // mutationへcommit
    requestListenData: function(genre: IHoge) {
      this.$store.dispatch('secret/requestListenData', genre)
    },
    handleChange: function(event: any) {
      // ルーティング
      this.$nuxt.$router.push({
        path: `/secret/${event.target.value}`
      })
    }
    //   listenData: function() {
    //     firebaseApp
    //       .firestore()
    //       .collection('chats')
    //       .doc(this.genre)
    //       .collection('chats')
    //       .orderBy('postedAt', 'desc')
    //       .onSnapshot((doc: any) => {
    //         // eslint-disable-next-line no-console
    //         console.log(doc.docs)
    //         this.chats = doc.docs
    //         doc.forEach((hoge: any) => {
    //           // eslint-disable-next-line no-console
    //           console.log(hoge.data())
    //         })
    //       })
    //     // vuexで取り出したもの
    //     // this.data = this.$store.state.data
    //   }
    // },
    // // listen dataを早めに呼び出す
  },
  // created() {
  //   this.genre =
  // },
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
  display: grid;
  grid-template-columns: 181px 640px 263px 638px 199px;
  grid-template-rows: 237px 737px 106px;
  background-color: #0a2e41;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  .top {
    grid-column-start: 1;
    grid-column-end: 6;
  }

  .main {
    .drawer-btn {
      margin-top: 370px;
    }

    .secret-text {
      color: #ffffff;
      font-size: 80px;
    }

    .chats-description {
      /*width: 638px;*/
      width: 100%;
      height: 100%;
      color: #ffffff;
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
        height: 100%;
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

  .footer {
    grid-column-start: 1;
    grid-column-end: 6;
  }
}
</style>
