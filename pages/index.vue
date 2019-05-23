<template>
  <section class="container">
    <div>
      <logo v-if="loadState === 'none'" />
      <div v-if="loadState === 'loading'">loading...</div>
      <div v-if="loadState === 'success'">
        <p>success!</p>
        <div v-for="(movie, index) in movies" v-bind:key="index">
          <p>{{ movie.title }}</p>
        </div>
      </div>
      <div v-if="loadState === 'error'">[error!]{{ errorMessage }}</div>
      <h1 class="title">
        Grady
      </h1>
      <h2 class="subtitle">
        JOIN JOIN
      </h2>
      <button class="button--green" @click="requestGetData">取得</button>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import { namespace } from 'vuex-class'
import * as connectionStore from '~/store/connection'
import { ILoadState } from '~/store/connection/types'

const Connection = namespace(connectionStore.name)

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
  @Connection.Action('requestGetData')
  private requestGetData!: Function

  @Connection.Getter('loadState')
  private loadState!: ILoadState

  @Connection.Getter('errorMessage')
  private errorMessage!: string

  @Connection.Getter('movies')
  private movies!: Object[]
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
