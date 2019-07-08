<template>
  <div>
    <div class="wrap">
      <div class="box">
        <div class="box-left">
          <p class="secret-text">シークレット映画</p>
          <secret-ganru-selecter />
          <go-to-watch-button
            class="go-to-watch"
            :handleClick="requestOpenDrawer"
          />
        </div>
        <div class="box-right">
          <div class="chats-description">
            <p class="chats-title">チャットで映画を推理</p>
            <p class="chats-massage">
              チケットを購入するとチャットに参加いただけます。
            </p>
            <div class="chat-wrap">
              <read-only-chat :chats="chats" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="drawer">
      <div v-if="isOpenDrawer" class="drawer">
        <go-to-watch-drawer
          :handleClose="requestCloseDrawer"
          :handleSubmit="requestTemporaryReservation"
          :movieId="movieId"
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
import { IMovie, loadStates, IReservationForm } from '~/store/movies'
export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer,
    'secret-ganru-selecter': SecretGanruSelecter,
    'go-to-watch-button': GoToWatchButton,
    'read-only-chat': ReadOnlyChat
  },
  computed: {
    movie(): IMovie {
      return this.$store.state.movies.movie
    },
    isOpenDrawer(): boolean {
      return this.$store.state.movies.isOpenDrawer
    },
    loadState(): loadStates {
      return this.$store.state.movies.loadState
    }
  },
  methods: {
    ...mapActions({
      requestOpenDrawer: 'movies/requestOpenDrawer',
      requestCloseDrawer: 'movies/requestCloseDrawer'
    }),
    requestTemporaryReservation: function(form: IReservationForm) {
      this.$store.dispatch('movies/requestTemporaryReservation', form)
    }
  },
  data() {
    return {
      defaultGenre: 'アクション',
      chats: [{ 0: 'hoge' }, { 1: 'hoge' }, { 2: 'hoge' }, { 3: 'hoge' }]
    }
  }
})
</script>
<style lang="scss" scoped>
.wrap {
  background-color: #0a2e41;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .box {
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
  }
}
.secret-text {
  color: #ffffff;
  font-size: 80px;
}

.box-left {
  .go-to-watch {
    margin-top: 30%;
  }
}

.box-right {
  justify-content: flex-end;
  .chats-description {
    width: 638px;
    height: 100%;
    color: #ffffff;

    .chat-wrap {
      margin-top: 10%;
      display: flex;
      justify-content: center;
    }
  }
}
.chats-title {
  font-size: 38px;
}
.chats-massage {
  font-size: 21px;
  border-bottom: solid 3px #ffffff;
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
