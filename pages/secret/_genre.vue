<template>
  <div class="wrapper">
    <div class="all-wrap">
      <div class="secret-wrap">
        <div class="secret-box">
          <p class="secret-text">シークレット映画</p>
          <secret-genre-selecter :genre="genre" :handle-change="handleChange" />
        </div>
        <go-to-watch-button
          class="drawer-btn"
          :handle-click="requestOpenDrawer"
        />
      </div>
      <div class="chat-wrap">
        <div class="chats-description">
          <p class="chats-title">チャットで映画を推理</p>
          <p class="chats-massage">
            チケットを購入するとチャットに参加いただけます。
          </p>
        </div>
        <div class="center-line"></div>
        <read-only-chat class="only-chat" :chats="chats" />
      </div>
    </div>
    <transition name="drawer">
      <div v-if="isOpenDrawer" class="drawer">
        <go-to-watch-drawer
          :handle-close="requestCloseDrawer"
          :handle-submit="requestTemporaryReservation"
          :genre="genre"
        />
      </div>
    </transition>
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
    },
    chats(): any {
      return this.$store.state.secret.chats
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
    // mutationへdispatch
    requestListenData: function(genre: string) {
      this.$store.dispatch('secret/requestListenData', genre)
    },
    stopListenData: function() {
      this.$store.dispatch('secret/stopListenData')
    },
    handleChange: function(event: any) {
      // ルーティング
      this.$nuxt.$router.push({
        path: `/secret/${event.target.value}`
      })
    }
  },
  mounted() {
    this.requestListenData(this.$route.params.genre)
  },
  // ここでfirebaseの通信終了
  destroyed() {
    this.stopListenData()
  },
  data: function() {
    return {
      genre: this.$route.params.genre
    }
  },
  middleware: ['secret']
})
</script>
<style scoped lang="scss">
.only-chat {
  overflow-y: scroll;
}
.wrapper {
  display: flex;
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
    justify-content: center;
    .all-wrap {
      display: flex;
      width: 1539px;
      justify-content: space-between;
      .secret-wrap {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        .secret-text {
          font-size: 80px;
        }
      }
      .chat-wrap {
        display: flex;
        flex-flow: column;
        justify-content: center;
        .chats-description {
          .chats-title {
            font-size: 38px;
          }
          .chats-massage {
            width: 638px;
            font-size: 21px;
            padding: 2px;
            margin-top: 15px;
            margin-bottom: 10px;
            border-bottom: solid 3px #ffffff;
          }
        }
      }
    }
  }
  .only-chat {
    height: 750px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .wrapper {
    justify-content: center;
    .all-wrap {
      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
      align-items: center;
      .secret-wrap {
        .secret-text {
          font-size: 61px;
        }
        .drawer-btn {
          position: absolute;
          z-index: 1;
          top: 88%;
          margin-left: 13%;
        }
      }
      .chat-wrap {
        margin-top: -30%;
        .chats-description {
          .chats-title {
            margin-right: 90px;
            font-size: 23px;
            text-align: center;
          }
          .chats-massage {
            width: 598px;
            font-size: 13px;
            padding: 2px;
            margin-top: 15px;
            margin-bottom: 10px;
            text-align: center;
          }
        }
      }
    }
  }
  .center-line {
    background-color: #3e5d6e;
    height: 3px;
    width: 596px;
  }
  .only-chat {
    margin-top: 10px;
    height: 400px;
    width: 300px;
    margin-left: 130px;
  }
}

@media screen and (max-width: 767px) {
  .wrapper {
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    .secret-wrap {
      .secret-text {
        font-size: 27px;
      }
      .drawer-btn {
        position: absolute;
        z-index: 1;
        top: 85%;
        margin-left: 6%;
      }
    }
    .chat-wrap {
      margin-top: 20%;
      display: flex;
      justify-content: center;
      flex-flow: column;
      .chats-description {
        .chats-title {
          font-size: 18px;
        }
        .chats-massage {
          width: 218px;
          font-size: 13px;
          padding: 1px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .center-line {
    background-color: #3e5d6e;
    height: 3px;
    width: 218px;
  }
  .only-chat {
    margin-left: 45px;
    height: 200px;
    width: 150px;
  }
}
</style>
