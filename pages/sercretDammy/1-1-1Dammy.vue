<template>
  <div>
    <div class="wrap">
      <div class="box">
        <div class="left">
          <p class="secret-text">シークレット映画</p>
          <secret-ganru-selecter />
          <go-to-watch-button
            :handleClose="requestCloseDrawer"
            :handleSubmit="requestTemporaryReservation"
            :movieId="movieId"
          />
        </div>
        <div class="right">
          <div class="chats-description">
            <p class="chats-title">チャットで映画を推理</p>
            <p class="chats-massage">
              チケットを購入するとチャットに参加いただけます。
            </p>
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
import { IMovie, loadStates, IReservationForm } from '~/store/movies'
export default Vue.extend({
  components: {
    'go-to-watch-drawer': GoToWatchDrawer,
    'secret-ganru-selecter': SecretGanruSelecter,
    'go-to-watch-button': GoToWatchButton
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
      defaultGenre: 'アクション'
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
  justify-content: space-between;
}
.box {
  display: flex;
  justify-content: space-between;
}
.secret-text {
  color: #ffffff;
  font-size: 80px;
}

.right {
  display: flex;
  align-items: center;

  .chats-description {
    width: 638px;
    height: 100%;
    color: #ffffff;
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
