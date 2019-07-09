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
import { IMovie, loadStates, IReservationForm } from '~/store/movies'
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
      return this.$store.state.movies.isOpenDrawer
    },
    loadState(): loadStates {
      return this.$store.state.movies.loadState
    }
  },
  methods: {
    ...mapActions({
      requestOpenDrawer: 'mkfovies/requestOpenDrawer',
      requestCloseDrawer: 'movies/requestCloseDrawer'
    }),
    requestTemporaryReservation: function(form: IReservationForm) {
      this.$store.dispatch('movies/requestTemporaryReservation', form)
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
  }
})
</script>

