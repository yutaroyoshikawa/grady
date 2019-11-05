<template>
  <nuxt-link :to="value | filterGenre | linkFormat">
    <div class="secretGanreButton">
      <showing-mark class="mark" />
      <div class="tagText">
        {{ text }}
      </div>
      <div class="secretText">
        シークレット
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import ShowingMark from '../components/marks/showingMark.vue'

export default Vue.extend({
  filters: {
    filterGenre(genre: string): string {
      switch (genre) {
        case '28':
          return 'Action'
        case '12':
          return 'Adventure'
        case '16':
          return 'Animation'
        case '35':
          return 'Comedy'
        case '80':
          return 'Crime'
        case '99':
          return 'Documentary'
        case '18':
          return 'Drama'
        case '10751':
          return 'Family'
        case '14':
          return 'Fantasy'
        case '36':
          return 'Historical drama'
        case '27':
          return 'Horror'
        case '10402':
          return 'Music'
        case '9648':
          return 'Mystery'
        case '10749':
          return 'Romance'
        case '878':
          return 'Science Fiction'
        case '10770':
          return 'Variety'
        case '53':
          return 'Thriller'
        case '10752':
          return 'War'
        case '37':
          return 'Western'
        default:
          return ''
      }
    },
    linkFormat(value: string): string {
      return `secret/${value}`
    }
  },
  components: {
    'showing-mark': ShowingMark
  },
  props: {
    text: String,
    value: String
  }
})
</script>

<style lang="scss" scoped>
.secretGanreButton {
  background: #000000;
  height: 348px;
  width: 242px;
  position: relative;
  border-radius: 20px;
  .mark {
    position: absolute;
  }
  .tagText {
    display: flex;
    position: absolute;
    font-size: 41px;
    color: #ffffff;
    top: 120px;
    justify-content: flex-start;
  }
  .secretText {
    display: flex;
    color: #000000;
    font-size: 32px;
    justify-content: center;
    align-items: center;
    height: 63px;
    width: 242px;
    background: #ffffff;
    position: absolute;
    bottom: 30px;
  }
}
</style>
